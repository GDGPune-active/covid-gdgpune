import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Table from "components/Table/Table.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";

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

export default function TableList() {
  const classes = useStyles();
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
            <Table
              tableHeaderColor="primary"
              tableHead={["Name", "Verified At", "Type", "Vacant"]}
              tableData={[
                {
                  name: "Aadhar Hospital",
                  address: "Pune",
                  contact: "9225620504",
                  type: "Covid Bed",
                  vacant: 123,
                  verified_at: "10:03 PM, May 21",
                },
                {
                  name: "Ace Hospital Pune",
                  address: "Pune",
                  contact: "9423005023",
                  type: "Covid Oxygenbed",
                  vacant: 358,
                  verified_at: "10:03 PM, May 21",
                },
                {
                  name: "Bharati Hospital",
                  address: "Pune",
                  contact: "9730682657 9881895957",
                  type: "Covid Bed",
                  vacant: 56,
                  verified_at: "10:03 PM, May 21",
                },
                {
                  name: "Chaitanya hospital",
                  address: "Pune",
                  contact: "9158003439",
                  type: "Covid ICU Beds",
                  vacant: 157,
                  verified_at: "10:03 PM, May 21",
                },
                {
                  name: "GMF Ruby Hall Clinic",
                  address: "Pune",
                  contact: "9890300503 8108595899",
                  type: "Ventilators",
                  vacant: 0,
                  verified_at: "10:03 PM, May 21",
                },
                {
                  name: "Hardikar Hospital ",
                  address: "Pune",
                  contact: "7774064091",
                  type: "Covid Bed",
                  vacant: 123,
                  verified_at: "10:03 PM, May 21",
                },
              ]}
            />
          </CardBody>
        </Card>
      </GridItem>
    </GridContainer>
  );
}
