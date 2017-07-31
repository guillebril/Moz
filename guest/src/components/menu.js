import React, { Component } from 'react';
import base from '../rebase'
import Menuproducto from './menu-producto.js'



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



        var productos =  Object.values(categoria.productos).map(producto => {
            return(
              <Menuproducto key={producto.key} producto={producto} />
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
