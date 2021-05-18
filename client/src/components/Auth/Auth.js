import React, { useEffect, useState } from "react";

import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Slide,
  Step,
  StepLabel,
  Stepper,
  TextField,
  Typography,
} from "@material-ui/core";

import { useAuthState } from "react-firebase-hooks/auth";

import { firebase_app } from "data/firebase-config";
import { useForm, Controller } from "react-hook-form";
import MaterialUiPhoneNumber from "material-ui-phone-number";
import firebase from "firebase/app";
import { useHistory } from "react-router";

const Auth = (props) => {
  const [user, loading, error] = useAuthState(firebase_app.auth());
  const [open, setOpen] = useState(false);
  const [phone, setPhone] = useState("");
  const [code, setCode] = useState("");
  const [showLoading, setShowLoading] = useState(false);

  let history = useHistory();

  const [activeStep, setActiveStep] = React.useState(0);
  const [confirmationResultCopy, setConfirmationResultCopy] = useState();

  const getStepContent = (step) => {
    switch (step) {
      case 0:
        return (
          <MaterialUiPhoneNumber
            name="phone"
            label="Phone Number"
            data-cy="user-phone"
            defaultCountry={"in"}
            countryCodeEditable={false}
            value={phone}
            onChange={(value) => setPhone(value)}
          />
        );
      case 1:
        return (
          <TextField
            label="Enter OTP"
            onChange={(e) => setCode(e.target.value)}
            value={code}
          />
        );
      case 2:
        return (
          <TextField
            label="Enter Name"
            onChange={(e) => setCode(e.target.value)}
            value={code}
          />
        );
    }
  };

  useEffect(() => {
    !loading && setOpen(!user ? true : false);
    setActiveStep(0);
  }, [loading, user]);

  useEffect(() => {
    setTimeout(() => {
      window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier(
        "sign-in-button",
        {
          size: "invisible",
          callback: function (response) {
            // reCAPTCHA solved, allow signInWithPhoneNumber.
            login();
          },
        }
      );
    }, 100);
  }, []);

  const login = () => {
    setShowLoading(true);
    // setupRecaptcha();
    const appVerifier = window.recaptchaVerifier;
    firebase_app
      .auth()
      .signInWithPhoneNumber(phone, appVerifier)
      .then((confirmationResult) => {
        setShowLoading(false);
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        setConfirmationResultCopy(confirmationResult);
        window.confirmationResult = confirmationResult;
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const verifyOtp = () => {
    setShowLoading(true);

    confirmationResultCopy
      .confirm(code)
      .then((result) => {
        setShowLoading(false);
        setPhone("");
        setCode("");
        // User signed in successfully.
        const user = result.user;
        setActiveStep((prevActiveStep) => prevActiveStep + 1);

        // console.log("SUCCESS");
      })
      .catch((error) => {
        console.log("ERROR");
      });
  };

  const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="down" ref={ref} {...props} />;
  });

  return (
    <Dialog
      open={open}
      //   TransitionComponent={Transition}
      onClose={() => {
        props.setShowLoginPopup && props.setShowLoginPopup(false);
        setOpen(false);
        !props.setShowLoginPopup && history.push("/dashboard");
      }}
      keepMounted
      aria-labelledby="alert-dialog-slide-title"
      aria-describedby="alert-dialog-slide-description"
    >
      <DialogTitle id="alert-dialog-slide-title">
        {"Signin to proceed"}
      </DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-slide-description"></DialogContentText>
        <div>{getStepContent(activeStep)}</div>
      </DialogContent>
      <DialogActions>
        <Button
          disabled={activeStep === 0 || showLoading}
          onClick={() => setActiveStep((prevActiveStep) => prevActiveStep - 1)}
          color="primary"
        >
          Back
        </Button>
        {activeStep === 0 ? (
          <Button
            disabled={showLoading || phone.length < 10}
            onClick={login}
            color="primary"
          >
            Generate OTP
          </Button>
        ) : (
          <Button disabled={showLoading} onClick={verifyOtp} color="primary">
            Verify
          </Button>
        )}
      </DialogActions>
    </Dialog>
  );
};

export default Auth;
