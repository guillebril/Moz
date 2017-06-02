import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import base from './rebase'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      restaurantes: []
    };
  }

  componentDidMount() {
    // convierto el objeto a array y le hago a doble binding
    base.syncState('restaurantes/', {
      context: this,
      state: 'restaurantes',
      asArray: true
    });
  }

  render() {
    //genero la lista y la guardo en una variable
    var restaurantes = this.state.restaurantes.map((item, index) => {
      return (
        <p key={item.key}>
          {item.name}</p>
      )
    })

    //Pongo el resto del HTML
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
          <p>Welcome!</p>
        </div>
        <p className="App-intro">
          To get started, edit
          <code>src/App.js</code>
          and save to reload.
        </p>

        <div>
          {restaurantes}
        </div>
      </div>
    );
  }
}

export default App;
