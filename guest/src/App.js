import React, { Component } from 'react';
import './App.css';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import createPalette from 'material-ui/styles/palette';
import {red, amber} from 'material-ui/colors';
import Pestana from './components/pestana';




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
      <MuiThemeProvider theme={temaMozapp}>
      <Pestana/>
      </MuiThemeProvider>
    )
  }
}

export default App;
