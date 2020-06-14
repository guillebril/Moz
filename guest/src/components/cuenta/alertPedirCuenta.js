import React from "react";
import Button from "material-ui/Button";
import Dialog, {
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "material-ui/Dialog";
import Slide from "material-ui/transitions/Slide";
import base from "../../rebase";

function Transition(props) {
  return <Slide direction="up" {...props} />;
}

class AlertPedirCuenta extends React.Component {
  sumarTotal = () => {
    return this.props.totalCuenta;
  };

  handlePedirCuenta = () => {
    base
      .update("restaurantes/oconnells/mesas/" + this.props.mesaKey + "/", {
        data: {
          estadoMesa: "cerrada",
        },
      })
      .then(() => {
        window.location.href = `whatsapp://send?text=Hola, ya realice mi pedido. Quisiera coordinar la entrega y forma de pago. El codigo de mi pedido es: ${this.props.mesaKey}&phone=543413662745`;
        //Router.transitionTo('dashboard');
      })
      .catch((err) => {
        //handle error
      });

    this.props.handleAlertClose();
  };

  render() {
    return (
      <div>
        <Dialog
          open={this.props.alertOpen}
          transition={Transition}
          keepMounted="keepMounted"
          onRequestClose={this.props.handleAlertClose}
        >
          <DialogTitle>{"Total: $" + this.props.totalCuenta}</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Al confirmar tu pedido te redireccionaremos a Whatsapp para que
              puedas coordinar la entrega con nosotros.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.props.handleAlertClose} color="primary">
              Cancelar
            </Button>
            <Button onClick={this.handlePedirCuenta} color="primary">
              Confirmar
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

export default AlertPedirCuenta;
