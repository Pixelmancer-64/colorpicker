import React, { Component } from "react";
import Colorpicker from "./Colorpicker";
import chroma from "chroma-js";
import { withStyles } from "@material-ui/core/styles";
import { Checkbox } from "@material-ui/core";

const styles = {
  root: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
  },

  content:{
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    gap: "2rem",
    width: '100%'
  },

  gradient: {
    height: "10%",
    width: "80%",
    display: "flex",
    justifyContent: "space-between",
  },
};

class Solo extends Component {
  constructor(...props) {
    super(...props);

    this.state = {
      color: "hsla(280,100%,50%,1)",
      colorString: "hsla(280,100%,50%,1)",
      colorLock: "false",
      color2: "hsla(280,100%,50%,1)",
      colorString2: "hsla(280,100%,50%,1)",
    };

    this.onColorChange = this.onColorChange.bind(this);
    this.colorInput = this.colorInput.bind(this);
  }

  onColorChange(color) {
    if (this.state.colorLock) {
      this.setState({
        color2: this.state.color,
        colorString2: this.state.colorString,
        color: color.hsla,
        colorString: color.hslaString,
      });
    } else this.setState({ color: color.hsla, colorString: color.hslaString });
  }
  colorInput(e) {
    const colorInput = e.target.value;
    console.log(colorInput)
    if (chroma.valid(colorInput)) {
      const color = chroma(colorInput).css("hsla");
      this.setState({ color, colorString: color });
    }
  }
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <div className={classes.content}>
          <Checkbox
            onChange={() => this.setState({ colorLock: !this.state.colorLock })}
          />
          <Colorpicker
            color={this.state.color}
            colorString={this.state.colorString}
            onColorChange={this.onColorChange}
            colorInput={this.colorInput}
          />
          <div
            className={classes.gradient}
            style={{
              background: `linear-gradient(to right, ${this.state.colorString2}, ${this.state.colorString})`,
            }}
          >
            <span>{this.state.colorString2}</span>
            <span>{this.state.colorString}</span>
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(Solo);
