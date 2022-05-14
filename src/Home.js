import React from "react";
import { withStyles } from "@material-ui/styles";
import styles from "./styles/Home";
import SimpleNavbar from "./SimpleNavbar";

function Home(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <SimpleNavbar />
      <section className={classes.hero}>
        <div className={classes.container}>
          <section className={classes.main}>
            <h1 className={classes.introduction}>
              Powerful tools <br /> for your
              <span className={classes.rainbow + " " + classes.rainbowAnimated}>
                colorful
              </span>{" "}
              needs!
            </h1>
            <p className={classes.description}>
              Quick and complete tools for color related projects
            </p>
            <div className={classes.buttons}>
              <a href="/paletteList" className={classes.button + " " + classes.special}>
                Start now!
              </a>
              <a href="#" className={classes.button}>
                Learn more ↓
              </a>
            </div>
          </section>
        </div>
      </section>
    </div>
  );
}

export default withStyles(styles)(Home);
