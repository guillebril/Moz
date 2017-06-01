import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import firebase from 'firebase';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      nombre: 'Guille',
      restaurantes: []
    };
  }

  componentDidMount() {
    const rootRef = firebase.database().ref().child('restaurantes/');
    rootRef.on('child_added', snap => {
      console.log(snap.val().name)
    });
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
          <p>Welcome {this.state.nombre}
          </p>
        </div>
        <p className="App-intro">
          To get started, edit
          <code>src/App.js</code>
          and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
