import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Select from "@material-ui/core/Select";
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker
} from "@material-ui/pickers";
import GridItem from "components/Grid/GridItem.js";
import "date-fns";
import DateFnsUtils from "@date-io/date-fns";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import GridContainer from "components/Grid/GridContainer.js";

const useStyles = makeStyles(theme => ({
  cardCategoryWhite: {
    color: "rgba(255,255,255,.62)",
    margin: "0",
    fontSize: "14px",
    marginTop: "0",
    marginBottom: "0"
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none"
  }
}));

export default function BedRegistration() {
  const classes = useStyles();
  const [fieldValues, setFieldvalues] = useState({
    ["name"]: "",
    ["address"]: "",
    ["bedType"]: "Covid Bed",
    ["date"]: new Date(),
    ["vacantNo"]: 0
  });
  const handleChange = event => {
    console.log(event);
    if (event) {
      setFieldvalues(fieldValues => ({
        ...fieldValues,
        [event.target.name]: event.target.value
      }));
    }
  };

  const handleSubmit = event => {
    console.log(fieldValues);
    event.preventDefault();
  };
  return (
    <GridContainer>
      <GridItem xs={12} sm={12} md={12}>
        <Card>
          <CardHeader color="primary">
            <h4 className={classes.cardTitleWhite}>Add Bed</h4>
            <p className={classes.cardCategoryWhite}>
              Complete form to add bed availability details
            </p>
          </CardHeader>
          <CardBody className={classes.cardCategoryWhite}>
            <GridContainer>
              <GridItem xs={12} sm={12} md={10}>
                <TextField
                  required
                  id="standard-required"
                  label="Name"
                  name="name"
                  value={fieldValues.name}
                  onChange={handleChange}
                  fullWidth
                />
              </GridItem>
              <GridItem xs={12} sm={12} md={10}>
                <TextField
                  label="Address"
                  id="standard-multiline-flexible"
                  name="address"
                  multiline
                  required
                  rowsMax={4}
                  value={fieldValues.address}
                  onChange={handleChange}
                  fullWidth
                />
              </GridItem>
              <GridItem xs={12} sm={12} md={5}>
                <Grid variant="outlined">
                  <InputLabel id="demo-simple-select-label" required>
                    Bed
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={fieldValues.bedType}
                    onChange={handleChange}
                    label="Bed Type"
                    name="bedType"
                    fullWidth
                  >
                    <MenuItem value={"Covid Bed"}>Covid Bed</MenuItem>
                    <MenuItem value={"Covid Oxygen Bed"}>
                      Covid Oxygen Bed
                    </MenuItem>
                    <MenuItem value={"Covid ICU Bed"}>Covid ICU Bed</MenuItem>
                  </Select>
                </Grid>
              </GridItem>
              <GridItem xs={12} sm={12} md={5}>
                <TextField
                  required
                  id="standard-required"
                  label="Number of Vacant Beds"
                  type="number"
                  name="vacantNo"
                  value={fieldValues.vacantNo}
                  onChange={handleChange}
                  fullWidth
                />
              </GridItem>
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <GridItem xs={12} sm={12} md={5}>
                  <KeyboardDatePicker
                    disableToolbar
                    required
                    variant="inline"
                    format="MM/dd/yyyy"
                    margin="normal"
                    id="date-picker-inline"
                    label="Verfieid At: Date"
                    value={fieldValues.date}
                    onChange={handleChange}
                    KeyboardButtonProps={{
                      "aria-label": "change date"
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={5}>
                  <KeyboardTimePicker
                    required
                    margin="normal"
                    id="time-picker"
                    label="Verfieid At: Time"
                    value={fieldValues.date}
                    onChange={handleChange}
                    KeyboardButtonProps={{
                      "aria-label": "change time"
                    }}
                  />
                </GridItem>
              </MuiPickersUtilsProvider>
            </GridContainer>
          </CardBody>
          <CardFooter>
            <GridItem xs={12} sm={12} md={5}>
              <Button color="primary" round onClick={handleSubmit}>
                Submit
              </Button>
            </GridItem>
          </CardFooter>
        </Card>
      </GridItem>
    </GridContainer>
  );
}
