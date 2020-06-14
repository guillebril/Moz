import React, { Component } from "react";
import base from "../../rebase";
import Button from "material-ui/Button";
import Dialog from "material-ui/Dialog";
import List, { ListItem, ListItemText } from "material-ui/List";
import AppBar from "material-ui/AppBar";
import Toolbar from "material-ui/Toolbar";
import IconButton from "material-ui/IconButton";
import CloseIcon from "material-ui-icons/Close";
import Typography from "material-ui/Typography";
import Slide from "material-ui/transitions/Slide";
import TextField from "material-ui/TextField";
import MenuProductoContador from "./productoPedirContador";
import { Autorenew } from "material-ui-icons";

export default class MenuProductoPedir extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cantidad: 1,
      totalModal: props.producto.precio,
      comentario: "",
      mostrarSnackbar: true,
    };
  }

  handleChange = (event) => {
    this.setState({ comentario: event.target.value });
  };

  onTouchTapRestar = (event) => {
    var cantidad = this.state.cantidad;
    if (cantidad > 1) {
      this.setState({
        cantidad: cantidad - 1,
        totalModal: (cantidad - 1) * this.props.producto.precio,
      });
    }
  };

  onTouchTapSumar = (event) => {
    var cantidad = this.state.cantidad;
    this.setState({
      cantidad: cantidad + 1,
      totalModal: (cantidad + 1) * this.props.producto.precio,
    });
  };

  agregarEnCuenta = () => {
    var etiquetaTiempo = new Date();
    base.push(
      "restaurantes/oconnells/mesas/" + this.props.mesaKey + "/pedidos",
      {
        data: {
          producto: this.props.producto.nombre,
          descripcion: this.props.producto.descripcion,
          //usuario: base.initializedApp.auth().currentUser.uid,
          tamaño: "",
          mesaKey: this.props.mesaKey,
          cantidad: this.state.cantidad,
          comentarios: this.state.comentario,
          horario: etiquetaTiempo + "",
          total: this.state.totalModal,
          numeroMesa: this.props.numeroMesa,

          estado: "Pedido",
        },
      }
    );
  };

  hacerTransition = (props) => {
    return <Slide direction="up" {...props} />;
  };

  render() {
    return (
      <Dialog
        fullScreen="fullScreen"
        open={this.props.open}
        onRequestClose={this.props.handleClose}
        transition={this.hacerTransition}
      >
        <AppBar
          style={{
            position: "relative",
            backgroundColor: "#F44336",
          }}
        >
          <Toolbar>
            <Typography
              type="title"
              style={{
                WebkitFontSmoothing: "antialiased",
                color: "#fff",
                flex: "1",
              }}
              color="inherit"
            >
              {this.props.producto.nombre}
            </Typography>

            <IconButton
              style={{
                color: "#fff",
              }}
              onClick={this.props.handleClose}
              aria-label="Close"
            >
              <CloseIcon />
            </IconButton>
          </Toolbar>
        </AppBar>

        <List>
          <ListItem>
            <ListItemText
              primary={this.props.producto.nombre}
              secondary={this.props.producto.descripcion}
            />
            <Typography type="title">${this.props.producto.precio}</Typography>
          </ListItem>
          <ListItem>
            <img
              style={{
                marginRight: "auto",
                marginLeft: "auto",
                maxWidth: "250px",
              }}
              src={this.props.producto.img}
            />
          </ListItem>
          <ListItem>
            <TextField
              name="comentario"
              onChange={this.handleChange}
              label="Comentarios"
              multiline="multiline"
              fullWidth="fullWidth"
              margin="normal"
            />
          </ListItem>

          <ListItem>
            <MenuProductoContador
              cantidad={this.state.cantidad}
              onTouchTapRestar={this.onTouchTapRestar}
              onTouchTapSumar={this.onTouchTapSumar}
            />
          </ListItem>
        </List>

        <Button
          raised="raised"
          color="primary"
          onClick={() => {
            this.agregarEnCuenta();
            this.props.handleCloseConSnackbar();
          }}
          style={{
            height: "45px",
            width: "100%",
          }}
        >
          <Typography type="title">
            Pedir {this.state.cantidad}
            (${this.state.totalModal})
          </Typography>
        </Button>
      </Dialog>
    );
  }
}
