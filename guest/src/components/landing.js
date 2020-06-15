import "../App.css";
import React, { Component } from "react";
import base from "../rebase";
import logo from "../media/logoBlanco.png";
import Pestana from "./pestana";
import Bienvenido from "./bienvenido";
import Checkout from "./checkout";
import Input, { InputLabel } from "material-ui/Input";
import { FormControl, FormHelperText } from "material-ui/Form";

export default class Landing extends Component {
  constructor(props) {
    super(props);
    this.handleCrearMesa = this.handleCrearMesa.bind(this);
    this.state = {
      valorCodigo: "",
      mesaKey: localStorage.getItem("mesaKey") || false,
      mesa: [],
    };
  }

  handleFinalizarPedido = () => {
    this.setState({ mesaKey: "Pedido Finalizado" }, () => {
      localStorage.removeItem("mesaKey");
    });
  };

  handleCrearMesa() {
    var valorPush = base.push("restaurantes/oconnells/mesas", {
      data: {
        numero: "2",
        codigoMesa: "dgm92",
        total: "0",
        fechaHoraIngreso: "",
        estado: "abierta",
        estadoMesa: "abierta",
      },
    });
    var nuevoKey = valorPush.key;
    console.log(nuevoKey);

    this.setState({ mesaKey: nuevoKey }, () => {
      localStorage.setItem("mesaKey", nuevoKey);
    });
  }

  handleEntrarMesa = () => {
    if (this.state.valorCodigo === this.state.mesa[0].codigoMesa) {
      this.setState({ mesaKey: true });
    }
  };

  render() {
    if (this.state.mesaKey === false) {
      return <Bienvenido handleCrearMesa={this.handleCrearMesa} />;
    } else if (this.state.mesaKey === "Pedido Finalizado") {
      return <Checkout />;
    } else {
      return (
        <Pestana
          mesaKey={this.state.mesaKey}
          codigoMesa=""
          numeroMesa=""
          handleFinalizarPedido={this.handleFinalizarPedido}
        />
      );
    }
  }
}
