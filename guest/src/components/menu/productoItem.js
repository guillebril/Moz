import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import createHistory from "history/createBrowserHistory";
import MenuProductoPedir from "./productoPedir";
import ProductoSnackbar from "./productoSnackbar";

export default class Menuproducto extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      mostrarSnackbar: false,
    };
  }

  handleClose = () => {
    this.setState({
      open: false,
    });
    createHistory().push("/");
  };

  handleCloseConSnackbar = () => {
    this.setState({
      open: false,
      mostrarSnackbar: true,
    });
    createHistory().push("/");
    setTimeout(() => {
      this.setState({
        mostrarSnackbar: false,
      });
    }, 3400);
  };

  handleOpen = () => {
    this.props.estadoMesa !== "abierta" ? null : this.setState({ open: true });
  };

  render() {
    return (
      <Link to={"/" + this.props.producto.key}>
        <div className="producto_item" onClick={this.handleOpen}>
          <img className="producto_item_img" src={this.props.producto.img} />
          <div className="producto_item_nombre">
            {this.props.producto.nombre}
          </div>
          <div className="producto_item_descripcion">
            {this.props.producto.descripcion}
          </div>
          <div className="producto_item_precio">
            ${this.props.producto.precio}
          </div>
        </div>
        <div>
          <Route
            path={"/" + this.props.producto.key}
            render={() => (
              <MenuProductoPedir
                mesaKey={this.props.mesaKey}
                open={this.state.open}
                handleOpen={this.handleOpen}
                handleClose={this.handleClose}
                numeroMesa={this.props.numeroMesa}
                handleCloseConSnackbar={this.handleCloseConSnackbar}
                onRequestClose={this.handleClose}
                producto={this.props.producto}
              />
            )}
          />
        </div>
        {this.state.mostrarSnackbar ? (
          <ProductoSnackbar irACuenta={this.props.irACuenta} />
        ) : null}
      </Link>
    );
  }
}
