import React, { Component } from "react";
import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";
import ColorRect from "./ColorRect";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import { useParams, useNavigate } from "react-router-dom";
import chroma from "chroma-js";
import Colorpicker from "./Colorpicker";

const drawerWidth = 360;

const styles = (theme) => ({
  root: {
    display: "flex",
  },

  appBar: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    display: "flex",
    padding: "0 24px",
    justifyContent: "center",
    color: "black",
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    padding: "0",
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: "0 8px",
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    height: `calc(100vh - 64px)`,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
  inside: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: " 2rem ",
    height: "100%",
  },

  palleteColors: {
    backgroundColor: "white",
    height: "100%",
    display: "flex",
    flexWrap: "wrap",
    borderRadius: "5px",
    overflow: "hidden",
  },

  moreOptions: {
    display: "flex",
    gap: "1rem",
  },

  form: {
    display: "flex",
    flexDirection: "column",
    gap: ".5rem",
  },

  paletteName: {
    marginLeft: "auto",
  },

  navForm: {
    display: "flex",
    gap: "1rem",
  },
});

class PaletteForm extends Component {
  state = {
    open: false,
  };

  handleDrawerOpen = () => {
    this.setState({ open: true });
  };

  handleDrawerClose = () => {
    this.setState({ open: false });
  };

  constructor(...props) {
    super(...props);

    this.state = {
      color: "hsla(0,50%,50%,1)",
      colorString: "hsla(0,50%,50%,1)",
      colorsArray: [],
      name: "",
      paletteName: "",
    };

    this.onColorChange = this.onColorChange.bind(this);
    this.addColor = this.addColor.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.savePalette = this.savePalette.bind(this);
    this.randomColor = this.randomColor.bind(this);
    this.deleteBox = this.deleteBox.bind(this);
    this.colorInput = this.colorInput.bind(this);
  }

  handleChange(e) {
    this.setState({ name: e.target.value });
  }

  onColorChange(color) {
    this.setState({ color: color.hsla, colorString: color.hslaString });
  }

  addColor() {
    const { colorString, name } = this.state;
    this.setState({
      colorsArray: [...this.state.colorsArray, { color: colorString, name }],
    });
  }

  randomColor() {
    const color = chroma.random().css("hsla");
    this.setState({ color: color, colorString: color });
  }

  deleteBox(id) {
    this.setState({
      colorsArray: this.state.colorsArray.filter(
        (e) => e.name.toLowerCase() !== id.toLowerCase()
      ),
    });
  }

  colorInput(e) {
    const colorInput = e.target.value;
    if (chroma.valid(colorInput)) {
      const color = chroma(colorInput).css("hsla");
      this.setState({ color, colorString: color });
    }
  }

  savePalette() {
    const { paletteName } = this.state;
    this.props.savePalette({
      paletteName,
      id: paletteName.replace(/ /g, "-"),
      colors: this.state.colorsArray,
    });
    this.props.navigate("/");
  }

  componentDidMount() {
    this.randomColor();
    ValidatorForm.addValidationRule("isUnicName", (value) => {
      return !this.state.colorsArray.find(
        (e) => e.name.toLowerCase() === value.toLowerCase()
      );
    });

    ValidatorForm.addValidationRule("isUnicColor", () => {
      return !this.state.colorsArray.find(
        (e) => e.color === this.state.colorString
      );
    });

    ValidatorForm.addValidationRule("isUnicPaletteName", (value) => {
      return !this.props.palettes.find(
        (e) => e.paletteName.toLowerCase() === value.toLowerCase()
      );
    });

    ValidatorForm.addValidationRule("hasColors", () => {
      return this.state.colorsArray.length;
    });
  }

  render() {
    const { classes } = this.props;
    const { open } = this.state;

    return (
      <div className={classes.root}>
        <CssBaseline />
        <AppBar
          position="fixed"
          style={{ background: "hsla(167, 22%, 96%, 1)", boxShadow: "none" }}
          className={classNames(classes.appBar, {
            [classes.appBarShift]: open,
          })}
        >
          <Toolbar disableGutters={!open}>
            <IconButton
              color="inherit"
              aria-label="Open drawer"
              onClick={this.handleDrawerOpen}
              className={classNames(classes.menuButton, open && classes.hide)}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" color="inherit" noWrap>
              <Link
                style={{ color: "inherit", textDecoration: "inherit" }}
                to="/"
              >
                ColorPicker
              </Link>
            </Typography>
            <div className={classes.paletteName}>
              <ValidatorForm onSubmit={this.savePalette}>
                <div className={classes.navForm}>
                  <TextValidator
                    label="Palette name"
                    variant="standard"
                    type="dark"
                    value={this.state.paletteName}
                    validators={["required", "isUnicPaletteName", "hasColors"]}
                    errorMessages={[
                      "This field is required!",
                      "Palette name already in use!",
                      "You need at least one color",
                    ]}
                    onChange={(e) =>
                      this.setState({ paletteName: e.target.value })
                    }
                  />
                  <Button variant="contained" color="secondary" type="submit">
                    Save Palette
                  </Button>
                </div>
              </ValidatorForm>
            </div>
          </Toolbar>
        </AppBar>
        <Drawer
          className={classes.drawer}
          variant="persistent"
          anchor="left"
          open={open}
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <div className={classes.drawerHeader}>
            <IconButton onClick={this.handleDrawerClose}>
              <ChevronLeftIcon />
            </IconButton>
          </div>

          <Divider />

          {/* AQUI QUE COMEÇA */}

          <div className={classes.inside}>
            <h1
              style={{
                backgroundColor: this.state.colorString,
                color: "transparent",
                backgroundClip: "text",
              }}
            >
              Palette Generator
            </h1>
            <Colorpicker
              color={this.state.color}
              colorString={this.state.colorString}
              onColorChange={this.onColorChange}
              colorInput={this.colorInput}
            />

            <ValidatorForm onSubmit={this.addColor}>
              <div className={classes.form}>
                <TextValidator
                  value={this.state.name}
                  validators={["required", "isUnicName", "isUnicColor"]}
                  errorMessages={[
                    "This field is required!",
                    "Name already in use!",
                    "Color already in use!",
                  ]}
                  onChange={this.handleChange}
                />
                <Button variant="contained" color="primary" type="submit">
                  Add color
                </Button>
              </div>
            </ValidatorForm>

            <div className={classes.moreOptions}>
              <Button
                variant="contained"
                color="secondary"
                onClick={() => this.setState({ colorsArray: [] })}
              >
                Clear palette
              </Button>
              <Button
                variant="contained"
                color="secondary"
                onClick={this.randomColor}
              >
                Random color
              </Button>
            </div>
          </div>
        </Drawer>
        <main
          className={classNames(classes.content, {
            [classes.contentShift]: open,
          })}
        >
          <div className={classes.drawerHeader} />
          <div className={classes.palleteColors}>
            {this.state.colorsArray.map((e) => (
              <ColorRect
                backgroundColor={e.color}
                delete={this.deleteBox}
                key={e.name}
                name={e.name}
                id={e.name}
              />
            ))}
          </div>
        </main>
      </div>
    );
  }
}

const withRouter = (WrappedComponent) => (props) => {
  const params = useParams();
  const navigate = useNavigate();

  props = { ...props };
  return <WrappedComponent {...props} params={params} navigate={navigate} />;
};

export default withStyles(styles, { withTheme: true })(withRouter(PaletteForm));