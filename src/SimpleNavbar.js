import React from "react";
import { withStyles } from "@material-ui/styles";
import styles from './styles/SimpleNavbar'

function SimpleNavbar(props) {
  const { classes } = props;
  return (
    <div className={classes.root} >
    <h1 className={classes.logo}>ColorTools</h1>
    </div>
  );
}

export default withStyles(styles)(SimpleNavbar);