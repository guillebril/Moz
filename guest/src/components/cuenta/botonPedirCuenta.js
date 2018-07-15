import React, { Component } from 'react';
import CuentaItem from './cuentaItem.js'
import Button from 'material-ui/Button';
import AlertPedirCuenta from './alertPedirCuenta'
import { DoneAll } from 'material-ui-icons';

export default class BotonPedirCuenta extends Component {
  constructor(props) {
    super(props)
    this.state = {
      alertOpen: false,

    };
  }

  handleAlertOpen = () => {
    this.setState({ alertOpen: true });
  };

  handleAlertClose = () => {
    this.setState({ alertOpen: false });
  };

  render() {
    let botonDisabled = this.props.estadoMesa === 'abierta' ? false : true
    let textoBoton = botonDisabled ? 'TOTAL: ' : 'REQUEST THE BILL'

    return (
      <div style={{ display: 'grid', margin: '10px'}}>
				<div style={{textAlign: 'center', color: '#ccc', margin:'15px', marginBottom:'30px'}}> The
					<DoneAll style={{width:'20px', paddingLeft:'6px', color: '#1CD686'}}/>
				next to the order means we have started preparing your order</div>
        <Button disabled={botonDisabled} raised onClick={this.handleAlertOpen} color="primary" style={{ height: '46px'}}>
          <div style={{fontSize: '16px'}}>{textoBoton }(${this.props.totalCuenta})</div>
        </Button>
        <AlertPedirCuenta
          alertOpen={this.state.alertOpen}
          totalCuenta={this.props.totalCuenta}
          mesaKey={this.props.mesaKey}
          handleAlertClose={this.handleAlertClose}  />
      </div>

    )
  }
}