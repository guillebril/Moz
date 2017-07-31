import React, { Component }
from 'react';
import './App.css';

import { MuiThemeProvider } from 'material-ui/styles';


import Pestana from './components/pestana';







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
      <MuiThemeProvider>
      <Pestana/>

      </MuiThemeProvider>
    )
  }
}

export default App;
