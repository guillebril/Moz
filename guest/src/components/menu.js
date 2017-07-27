import React, { Component }
from 'react';
import base from '../rebase'


export default class Menu extends Component {
  constructor(props) {
    super(props)
    this.state = {
      restaurante: [],
      productos: {}
    };
  }

  componentDidMount() {
    // convierto el objeto a array y le hago a doble binding
    base.bindToState('restaurantes/oconnells/menu', {
      context: this,
      state: 'restaurante',
      asArray: true
    });
  }

  render() {

      var restaurante = this.state.restaurante.map((categoria, index) => {
      console.log(JSON.stringify(categoria.productos, null, 4))

        var productos =  Object.values(categoria.productos).map(producto => {
            return(
            <div key={producto.key} className='producto_item'>
              <div className='producto_item_nombre'>{producto.nombre}</div>
              <div className='producto_item_descripcion'>{producto.descripcion}</div>
              <div className='producto_item_precio'>${producto.precio}</div>
            </div>
          )
        })

      return (
        <div key={categoria.key}>
            <div className='categoria_titulo'>
              {categoria.nombre}
            </div>
            <div>
              {productos}
            </div>
        </div>
      )
  })

    return(
      <div>
          {restaurante}
      </div>

    );
  }

}
