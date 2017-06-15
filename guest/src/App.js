import React, { Component }
from 'react';
import './App.css';
//import base from './rebase'
import Tabs from './components/tabs'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      restaurantes: []
    };
  }
  render() {
    return(
      <Tabs/>
    )
  }
}

export default App;
