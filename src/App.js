import React, { Component } from "react";
import Palette from "./Palette";
import Home from './Home'
import PaletteList from "./PaletteList";
import Shades from "./Shades";
import PaletteForm from "./PaletteForm";
import { generatePalette } from "./colorHelpers";
import { Route, Routes } from "react-router-dom";
import LocalStorage from "./localStorage";
import Solo from "./Solo";

class App extends Component {
  constructor(...props) {
    super(...props);
    this.state = {
      colors: LocalStorage.getData("palettes"),
    };
    this.getPalette = this.getPalette.bind(this);
    this.savePalette = this.savePalette.bind(this);
  }

  findPalette(id) {
    return LocalStorage.getData("palettes").find((e) => e.id === id);
  }

  getPalette(id) {
    const found = this.findPalette(id);
    return found ? generatePalette(found) : false;
  }

  savePalette(obj) {
    LocalStorage.add("palettes", obj);
    this.setState({ colors: [...this.state.colors, obj] });
  }

  render() {
    return (
      <Routes>
        <Route
          exact
          path="/"
          element={<Home/>}
        />

        <Route
          exact
          path="/paletteList"
          element={<PaletteList palettes={this.state.colors} />}
        />

        <Route exact path="/colorpicker" element={<Solo />} />

        <Route
          exact
          path="/new"
          element={
            <PaletteForm
              palettes={this.state.colors}
              savePalette={this.savePalette}
            />
          }
        />
        <Route
          exact
          path="/palette/:id"
          element={<Palette getPalette={this.getPalette} />}
        />
        <Route
          exact
          path="/palette/:paletteId/:colorId"
          element={<Shades getPalette={this.getPalette} />}
        />
      </Routes>
    );
  }
}

export default App;
