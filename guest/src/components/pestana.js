import "../App.css";
import React, { Component } from "react";
import base from "../rebase";
import AppBarra from "./appBarra";

import BottomNavigation, {
  BottomNavigationButton,
} from "material-ui/BottomNavigation";
import { Dns, Kitchen, ShoppingCart } from "material-ui-icons";
import ListIcon from "material-ui-icons/List";
import Menu from "./menu/menu";
import Cuenta from "./cuenta/cuenta";

export default class Pestana extends Component {
  state = {
    value: 0,
    bebidas: [],
    comidas: [],
    cuenta: {},
    estadoMesa: "abierta",
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  irACuenta = () => {
    this.setState({ value: 2 });
  };

  componentDidMount() {
    base.syncState("restaurantes/oconnells/menu", {
      context: this,
      state: "comidas",
      asArray: true,
      queries: {
        orderByChild: "tipoCategoria",
        equalTo: "Comidas",
      },
    });

    base.syncState("restaurantes/oconnells/menu", {
      context: this,
      state: "bebidas",
      asArray: true,
      queries: {
        orderByChild: "tipoCategoria",
        equalTo: "Bebidas",
      },
    });

    base.syncState(
      "restaurantes/oconnells/mesas/" + this.props.mesaKey + "/pedidos",
      {
        context: this,
        state: "cuenta",
        asArray: true,
      }
    );

    base.syncState(
      "restaurantes/oconnells/mesas/" + this.props.mesaKey + "/estadoMesa",
      {
        context: this,
        state: "estadoMesa",
        asArray: false,
      }
    );
  }

  ventana = () => {
    const categoriasComidasOrdenadas = []
      .concat(this.state.comidas)
      .sort((a, b) => a.pos > b.pos);
    const categoriasBebidasOrdenadas = []
      .concat(this.state.bebidas)
      .sort((a, b) => a.pos > b.pos);

    if (this.state.value === 0) {
      return (
        <Menu
          numeroMesa={this.props.numeroMesa}
          mesaKey={this.props.mesaKey}
          irACuenta={this.irACuenta.bind(this)}
          estadoMesa={this.state.estadoMesa}
          menu={categoriasBebidasOrdenadas}
        />
      );
    }

    if (this.state.value === 1) {
      return (
        <Menu
          numeroMesa={this.props.numeroMesa}
          mesaKey={this.props.mesaKey}
          irACuenta={this.irACuenta.bind(this)}
          estadoMesa={this.state.estadoMesa}
          menu={categoriasComidasOrdenadas}
        />
      );
    } else {
      return (
        <Cuenta
          mesaKey={this.props.mesaKey}
          estadoMesa={this.state.estadoMesa}
          cuenta={this.state.cuenta}
          handleFinalizarPedido={this.props.handleFinalizarPedido}
        />
      );
    }
  };

  render() {
    if (this.state.estadoMesa !== "abierta") {
      localStorage.removeItem("mesaKey");
      return (window.location.href = "https://changonatural.web.app");
    }

    return (
      <div>
        <AppBarra />
        <div
          style={{
            marginBottom: "64px",
          }}
        >
          {this.ventana()}
        </div>
        <BottomNavigation
          value={this.state.value}
          onChange={this.handleChange}
          showLabels={true}
          style={{
            position: "fixed",
            bottom: "0",
            height: "70px",
            width: "100%",
            boxShadow: "-1px 7px 10px 0px",
          }}
        >
          <BottomNavigationButton
            style={{
              display: "grid",
            }}
            label="Para Heladera"
            icon={<Kitchen />}
          />
          <BottomNavigationButton
            style={{
              display: "grid",
            }}
            label="Para Alacena"
            icon={<Dns />}
          />
          <BottomNavigationButton
            style={{
              display: "grid",
            }}
            label="Carrito"
            icon={<ShoppingCart />}
          />
        </BottomNavigation>
      </div>
    );
  }
}
