import React, { useEffect, useState } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Table from "components/Table/Table.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import { db } from "data/firebase-config";
import { CircularProgress } from "@material-ui/core";

const styles = {
  cardCategoryWhite: {
    "&,& a,& a:hover,& a:focus": {
      color: "rgba(255,255,255,.62)",
      margin: "0",
      fontSize: "14px",
      marginTop: "0",
      marginBottom: "0",
    },
    "& a,& a:hover,& a:focus": {
      color: "#FFFFFF",
    },
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
    "& small": {
      color: "#777",
      fontSize: "65%",
      fontWeight: "400",
      lineHeight: "1",
    },
  },
};

const useStyles = makeStyles(styles);

export default function Beds() {
  const [data, setData] = useState([]);
  const classes = useStyles();
  useEffect(() => {
    const query = db.collectionGroup("hospitalBeds");

    query.get().then(function (querySnapshot) {
      const queryData = querySnapshot.docs.map((d) => ({
        ...d.data(),
        beds: [0, 46, 5, 0],
        total: [0, 520, 119, 61],
        verified_at: "10:03 PM, May 21",
      }));
      setData(queryData);
    });
  }, []);
  return (
    <GridContainer>
      <GridItem xs={12} sm={12} md={12}>
        <Card>
          <CardHeader style={{ backgroundColor: "#343a40" }} color="primary">
            <h4 className={classes.cardTitleWhite}>COVID-19 Beds</h4>
            <p className={classes.cardCategoryWhite}>
              Verified list of beds available through Pune.
            </p>
          </CardHeader>
          <CardBody>
            {data.length > 0 ? (
              <Table
                tableHeaderColor="primary"
                tableHead={[
                  "Name",
                  "Without Oxygen",
                  "With Oxygen",
                  "ICU Without Ventilator",
                  "ICU With Ventilator",
                ]}
                tableData={data}
              />
            ) : (
              <div style={{ textAlign: "center" }}>
                <CircularProgress />
              </div>
            )}
          </CardBody>
        </Card>
      </GridItem>
    </GridContainer>
  );
}
