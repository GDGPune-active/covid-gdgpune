/*eslint-disable*/
import React from "react";
import PropTypes from "prop-types";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import ListItem from "@material-ui/core/ListItem";
import List from "@material-ui/core/List";
// core components
import styles from "assets/jss/material-dashboard-react/components/footerStyle.js";

const useStyles = makeStyles(styles);

export default function Footer(props) {
  const classes = useStyles();
  return (
    <footer className={classes.footer}>
      <div className={classes.container}>
        <div className={classes.left}>
          <List className={classes.list}>
            <ListItem className={classes.inlineBlock}>
              <a
                href="https://gdg.community.dev/gdg-pune"
                className={classes.block}
              >
                Join Us
              </a>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <a
                href="https://www.meetup.com/Pune-GDG/"
                className={classes.block}
              >
                Meetup
              </a>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <a href="https://twitter.com/gdgpune" className={classes.block}>
                Twitter
              </a>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <a
                href="https://www.facebook.com/groups/gdgpune"
                className={classes.block}
              >
                Facebook
              </a>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <a
                href="https://www.linkedin.com/company/gdgpune"
                className={classes.block}
              >
                LinkedIn
              </a>
            </ListItem>
          </List>
        </div>
        <p className={classes.right}>
          <span>
            &copy; {1900 + new Date().getYear()}{" "}
            <a
              href="https://gdg.community.dev/gdg-pune"
              target="_blank"
              className={classes.a}
            >
              GDG Pune
            </a>
            , made with love for Pune
          </span>
        </p>
      </div>
    </footer>
  );
}
