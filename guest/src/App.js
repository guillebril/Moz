import React, { Component }
from 'react';
import './App.css';

import Pestana from './components/pestana'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      restaurantes: []
    };
  }
  render() {
    return(
      <Pestana/>
    )
  }
}

export default App;
