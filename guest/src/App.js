import React, { Component } from "react";
import "./App.css";
import { MuiThemeProvider, createMuiTheme } from "material-ui/styles";
import { red, amber } from "material-ui/colors";
import Landing from "./components/landing";
import { BrowserRouter as Router } from "react-router-dom";
const temaMozapp = createMuiTheme({
  palette: {
    primary: amber,
    accent: red,
  },
});

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      restaurantes: [],
    };
  }

  render() {
    return (
      <Router>
        <MuiThemeProvider theme={temaMozapp}>
          <Landing />
        </MuiThemeProvider>
      </Router>
    );
  }
}

export default App;
