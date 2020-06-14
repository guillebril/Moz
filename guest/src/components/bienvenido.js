import React, { Component } from "react";
import logoChango from "../media/chango-logo.png";
import ilu1 from "../media/ilu1.svg";
import "./bienvenido.css";
export default class Bienvenido extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="contenedor">
        <img className="logo" src={logoChango} />
        <img className="illustracion" src={ilu1} />
        <div className="texto">
          <div className="texto-negrita">Hace tu pedido online</div>
          <div className="texto-parrafo">
            Bienvenidos a la tienda online de <br />
            Chango Natural Market 👋. <br />
            Somos una tienda de alimentos natulares <br />
            comprometida con vos y con el mundo 😃.
          </div>
        </div>
        <button className="boton-primario" onClick={this.props.handleCrearMesa}>
          Ver Productos 👀
        </button>
      </div>
    );
  }
}
