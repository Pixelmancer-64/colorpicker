import React, { Component } from "react";
import iro from "@jaames/iro";
import IroColorPicker from "./IroColorPicker";
import { withStyles } from "@material-ui/core/styles";
import { TextField  } from "@mui/material";

const styles = {
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: " 2rem ",
  },
};

class Colorpicker extends Component {
  constructor(...props) {
    super(...props);

    this.state = {
      colorInput: this.props.colorString,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleColorChange = this.handleColorChange.bind(this)
  }

  handleChange(e) {
    this.props.colorInput(e);
    this.setState({ colorInput: e.target.value });
  }

  handleColorChange(e){
    this.props.onColorChange(e)
    this.setState({ colorInput: this.props.colorString });
  }

  render() {
    return (
      <div className={this.props.classes.root}>
        <TextField 
          label="Color value"
          value={this.state.colorInput}
          onChange={this.handleChange}
        />

        <IroColorPicker
          color={this.props.color}
          onColorChange={this.handleColorChange}
          layout={[
            {
              component: iro.ui.Wheel,
            },
            {
              component: iro.ui.Slider,
              options: {
                sliderType: "hue",
              },
            },
            {
              component: iro.ui.Slider,
              options: {
                sliderType: "saturation",
              },
            },
            {
              component: iro.ui.Slider,
              options: {
                sliderType: "value",
              },
            },
            {
              component: iro.ui.Slider,
              options: {
                sliderType: "alpha",
              },
            },
          ]}
        />
      </div>
    );
  }
}

export default withStyles(styles)(Colorpicker);
