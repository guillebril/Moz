import '../App.css';
import React, {Component} from 'react';
import base from '../rebase'
import logo from '../media/logoBlanco.png'
import Pestana from './pestana';

import Input, {InputLabel} from 'material-ui/Input';
import {FormControl, FormHelperText} from 'material-ui/Form';

export default class Landing extends Component {

  constructor(props) {
    super(props)
    this.state = {
      mesaKey: false,
      valorCodigo: '',
      mesa: []
    }
  }

  handleEntrarMesa = () => {
    if (this.state.valorCodigo === this.state.mesa[0].codigoMesa) {
      this.setState({mesaKey: true})
    }
  };

  handleChange = name => event => {
    this.setState({[name]: event.target.value});

    if (event.target.value.length >= 4) {
      base.bindToState('restaurantes/oconnells/mesas', {
        context: this,
        state: 'mesa',
        asArray: true,
        keepKeys: true,
        queries: {
          orderByChild: 'codigoMesa',
          equalTo: event.target.value
        }
      });

      setTimeout(() => {
        console.log('ejecuto')
        this.handleEntrarMesa()
      }, 500);

    }

  };

  render() {
    if (this.state.mesaKey === false) {
      return (<div style={{
          backgroundColor: '#F44336',
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}>
        <div style={{
            flex: 1
          }}>
          <img style={{
              width: '120px',
              paddingLeft: '30px',
              opacity: '0.22',
              marginTop: '55px'
            }} src={logo}/>
          <br/>
          <br/>
          <div id="campoCodigo">
            <FormControl>
              <InputLabel id="labelCodigo" htmlFor="name-simple">Código de Mesa</InputLabel>
              <Input id="codigo" value={this.state.valorCodigo} onChange={this.handleChange('valorCodigo')}/>
            </FormControl>
          </div>

        </div>
      </div>)
    } else {
      return <Pestana mesaKey={this.state.mesa[0].key} codigoMesa={this.state.mesa[0].codigoMesa} numeroMesa={this.state.mesa[0].numero}/>
    }

  }

}
