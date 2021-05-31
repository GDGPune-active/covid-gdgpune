import * as functions from "firebase-functions";
import { hasRequiredFields, getTriggerType } from "../utils";
import { db, auth } from "../firebaseConfig";

const spark = (sparkConfig) => async (
  change: functions.Change<functions.firestore.DocumentSnapshot>,
  context: functions.EventContext
) => {
  const beforeData = change.before?.data();
  const afterData = change.after?.data();
  const ref = change.after ? change.after.ref : change.before.ref;
  const triggerType = getTriggerType(change);
  try {
    const {
      type,
      triggers,
      shouldRun,
      requiredFields,
      sparkBody,
    } = sparkConfig;
    const sparkContext = {
      row: triggerType === "delete" ? beforeData : afterData,
      ref,
      db,
      auth,
      change,
      triggerType,
      sparkConfig,
    };
    if (!triggers.includes(triggerType)) return false; //check if trigger type is included in the spark
    if (
      triggerType !== "delete" &&
      requiredFields &&
      requiredFields.length !== 0 &&
      !hasRequiredFields(requiredFields, afterData)
    ) {
      console.log("requiredFields are ", requiredFields, "type is", type);
      return false; // check if it hase required fields for the spark to run
    }
    const dontRun = shouldRun
      ? !(typeof shouldRun === "function"
          ? await shouldRun(sparkContext)
          : shouldRun)
      : false; //

    console.log("type is ", type, "dontRun value is", dontRun);

    if (dontRun) return false;
    const sparkData = await Object.keys(sparkBody).reduce(
      async (acc, key) => ({
        [key]:
          typeof sparkBody[key] === "function"
            ? await sparkBody[key](sparkContext)
            : sparkBody[key],
        ...(await acc),
      }),
      {}
    );
    console.log(JSON.stringify(sparkData));
    const sparkFn = require(`./${type}`).default;
    await sparkFn(sparkData, sparkContext);
    return true;
  } catch (err) {
    console.error(err);
    return Promise.reject(err);
  }
};

export default spark;
