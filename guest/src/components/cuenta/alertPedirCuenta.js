import React from 'react';
import Button from 'material-ui/Button';
import Dialog, {
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from 'material-ui/Dialog';
import Slide from 'material-ui/transitions/Slide';
import base from '../../rebase'



function Transition(props) {
  return <Slide direction="up" {...props} />;
}

class AlertPedirCuenta extends React.Component {





    handlePedirCuenta =() =>{

      base.update('restaurantes/oconnells/mesas/-Kti1MOdTgkw0HwEH7Bh/', {
        data: {estadoMesa: 'cerrada'}
      }).then(() => {
        //Router.transitionTo('dashboard');
      }).catch(err => {
        //handle error
      });


      this.props.handleAlertClose()
    }


  render() {
    return (
      <div>
        <Dialog
          open={this.props.alertOpen}
          transition={Transition}
          keepMounted
          onRequestClose={this.props.handleAlertClose}
        >
          <DialogTitle>{"Total: $"+ this.props.totalCuenta}</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Una vez que pidas la cuenta ya no podras realizar mas pedidos.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.props.handleAlertClose} color="primary">
              Cancelar
            </Button>
            <Button onClick={this.handlePedirCuenta} color="primary">
              Pedir
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

export default AlertPedirCuenta;
