import '../App.css';
import React, { Component } from 'react';
import base from '../rebase'
import logo from '../media/logoBlanco.png'
import Pestana from './pestana';

export default class Landing extends Component {

  constructor(props) {
    super(props)
    this.state = {
      mesaKey: false,
      mesas: []
    }
  }

  handleEntrarMesa = () => {
    this.setState({ mesaKey: true })

  }

  componentDidMount() {
    base.bindToState('restaurantes/oconnells/mesas', {
      context: this,
      state: 'mesas',
      asArray: true,
      queries: {
        orderByChild: 'codigoMesa',

        limitToLast: 1
      }
    });
  }

  render() {
    if (this.state.mesaKey === false) {
      return (
        <div style={{backgroundColor:'#F44336',height:'100vh', display: 'flex', flexDirection:'column', alignItems:'center'  }}>
                <div style={{flex: 1, }}>
                  <img style={{ width:'120px', opacity: '0.22', marginTop:'40px'}} src={logo}/>

                  <p onClick={this.handleEntrarMesa}>Hello world</p>
                  </div>
              </div>
      )
    } else {
      return <Pestana/>
    }

  }

}