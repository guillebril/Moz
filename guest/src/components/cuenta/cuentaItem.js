import React, { Component } from "react";
import ItemEstado from "./itemEstado";
export default class CuentaItem extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    var t = new Date(this.props.horario);
    var horas = t.getHours();
    var minutos = ("0" + t.getMinutes()).slice(-2);

    return (
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "5px 20px 5px 10px",

          fontFamily: "Roboto",
        }}
      >
        <div style={{}}>
          <div
            style={{ fontWeight: "700", fontSize: "16px", lineHeight: "30px" }}
          >
            <span
              style={{
                paddingRight: "10px",
                color: "#ffc107",
                fontWeight: "500",
              }}
            >
              {this.props.cantidad}
            </span>
            {this.props.producto}
          </div>
          <div style={{ color: "#595959", fontSize: "14px" }}>
            {this.props.comentarios}
          </div>
        </div>
        <div
          style={{
            display: "flex",
            paddingTop: "10px",
            fontSize: "16px",
            fontWeight: "600",
            alignItems: "center",
          }}
        >
          <div>${this.props.total}</div>
          <div>
            <ItemEstado
              mesaKey={this.props.mesaKey}
              estado={this.props.estado}
              llave={this.props.llave}
            />
          </div>
        </div>
      </div>
    );
  }
}
