import "../App.css";
import React, { Component } from "react";
import base from "../rebase";
import logo from "../media/logoBlanco.png";
import Pestana from "./pestana";
import Bienvenido from "./bienvenido";
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

  handleCrearMesa() {
    var valorPush = base.push("restaurantes/oconnells/mesas", {
      data: {
        numero: "2",
        codigoMesa: "dgm92",
        total: "0",
        fechaHoraIngreso: "",
        estado: "abierta",
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

  handleChange = (name) => (event) => {
    this.setState({ [name]: event.target.value });

    if (event.target.value.length >= 4) {
      base.bindToState("restaurantes/oconnells/mesas", {
        context: this,
        state: "mesa",
        asArray: true,
        keepKeys: true,
        queries: {
          orderByChild: "codigoMesa",
          equalTo: event.target.value,
        },
      });

      setTimeout(() => {
        console.log("ejecuto");
        this.handleEntrarMesa();
      }, 500);
    }
  };

  render() {
    if (this.state.mesaKey === false) {
      return <Bienvenido handleCrearMesa={this.handleCrearMesa} />;
    } else {
      return (
        <Pestana
          mesaKey={this.state.mesakey}
          codigoMesa="" //{this.state.mesa[0].codigoMesa}
          numeroMesa="" //{this.state.mesa[0].numero}
        />
      );
    }
  }
}
