import React, { Component } from 'react';
import './App.css';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import createPalette from 'material-ui/styles/palette';
import {red, amber} from 'material-ui/colors';
import Pestana from './components/pestana';
import {BrowserRouter as Router } from 'react-router-dom'




const temaMozapp = createMuiTheme({
  palette: createPalette({
    primary: amber,
    accent: red,
  }),
});



class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      restaurantes: []
    };
  }



  render()
   {

    return(
      <Router >
      <MuiThemeProvider theme={temaMozapp}>
              <Pestana/>
      </MuiThemeProvider>
      </Router>
    )
  }
}

export default App;
