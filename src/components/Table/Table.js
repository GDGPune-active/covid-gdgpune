import React from "react";
import PropTypes from "prop-types";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import {
  Table,
  TableHead,
  TableRow,
  TableBody,
  TableCell,
  Collapse,
  IconButton,
  Box,
  Chip,
} from "@material-ui/core";
import { AiOutlineDown } from "react-icons/ai";
import { FiPhone } from "react-icons/fi";

// core components
import styles from "assets/jss/material-dashboard-react/components/tableStyle.js";

const useStyles = makeStyles(styles);

const useRowStyles = makeStyles({
  root: {
    "& > *": {
      borderBottom: "unset",
    },
  },
});

function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);
  const classes = useRowStyles();

  return (
    <React.Fragment>
      <TableRow className={classes.root}>
        <TableCell style={{ textAlign: "center" }}>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            <AiOutlineDown />
          </IconButton>
        </TableCell>
        <TableCell style={{ textAlign: "center" }}>{row.name}</TableCell>
        {row.beds &&
          row.beds.map((bed, i) => (
            <TableCell key={row.name + i} style={{ textAlign: "center" }}>
              {bed + " / " + row.total[i]}
            </TableCell>
          ))}
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box margin={1}>
              <p>{row.name}</p>
              <p>{row.address}</p>
              <p style={{ color: "#f00" }}>Not Verified</p>
              {/* <p>Verified at: {row.verified_at}</p> */}
              <strong>
                Tap to call:
                {row.contact &&
                  row.contact.split(" ").map((number) => (
                    <Chip
                      key={number}
                      icon={<FiPhone color="white" />}
                      label={number}
                      style={{
                        marginLeft: "5px",
                        marginRight: "5px",
                        backgroundColor: "#51a846",
                        color: "white",
                        textEmphasis: "",
                      }}
                    />
                  ))}
              </strong>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

Row.propTypes = {
  row: PropTypes.shape({
    name: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
    contact: PropTypes.string.isRequired,
    beds: PropTypes.array.isRequired,
    total: PropTypes.array.isRequired,
    verified_at: PropTypes.string.isRequired,
  }).isRequired,
};

export default function CustomTable(props) {
  const classes = useStyles();
  const { tableHead, tableData, tableHeaderColor } = props;
  return (
    <div className={classes.tableResponsive}>
      <Table className={classes.table}>
        {tableHead !== undefined ? (
          <TableHead className={classes[`${tableHeaderColor}TableHeader`]}>
            <TableRow className={classes.tableHeadRow}>
              <TableCell></TableCell>
              {tableHead.map((prop, key) => (
                <TableCell
                  className={`${classes.tableCell} ${classes.tableHeadCell}`}
                  style={{ textAlign: "center" }}
                  key={key}
                >
                  {prop}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
        ) : null}
        <TableBody>
          {tableData.map((row) => (
            <Row key={row.name} row={row} />
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

CustomTable.defaultProps = {
  tableHeaderColor: "gray",
};

CustomTable.propTypes = {
  tableHeaderColor: PropTypes.oneOf([
    "warning",
    "primary",
    "danger",
    "success",
    "info",
    "rose",
    "gray",
  ]),
  tableHead: PropTypes.arrayOf(PropTypes.string),
  tableData: PropTypes.array.isRequired,
};
