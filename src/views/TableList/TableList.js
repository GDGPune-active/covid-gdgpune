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
              tableHead={[
                "Name",
                "Without Oxygen",
                "With Oxygen",
                "ICU Without Ventilator",
                "ICU With Ventilator",
              ]}
              tableData={[
                {
                  name: "Aadhar Hospital",
                  address: "Pune",
                  contact: "9225620504",
                  beds: [0, 46, 5, 0],
                  total: [0, 520, 119, 61],
                  verified_at: "10:03 PM, May 21",
                },
                {
                  name: "Ace Hospital Pune",
                  address: "Pune",
                  contact: "9423005023",
                  beds: [11, 9, 0, 0],
                  total: [22, 19, 1, 3],
                  verified_at: "10:03 PM, May 21",
                },
                {
                  name: "Bharati Hospital",
                  address: "Pune",
                  contact: "9730682657 9881895957",
                  beds: [0, 26, 2, 0],
                  total: [0, 29, 6, 1],
                  verified_at: "10:03 PM, May 21",
                },
                {
                  name: "Chaitanya hospital",
                  address: "Pune",
                  contact: "9158003439",
                  beds: [4, 0, 0, 0],
                  total: [29, 56, 4, 11],
                  verified_at: "10:03 PM, May 21",
                },
                {
                  name: "GMF Ruby Hall Clinic",
                  address: "Pune",
                  contact: "9890300503 8108595899",
                  beds: [10, 18, 0, 0],
                  total: [10, 20, 0, 0],
                  verified_at: "10:03 PM, May 21",
                },
                {
                  name: "Hardikar Hospital ",
                  address: "Pune",
                  contact: "7774064091",
                  beds: [170, 160, 2, 2],
                  total: [190, 182, 12, 18],
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
