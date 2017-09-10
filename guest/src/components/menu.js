import React, { Component } from 'react';
import Menuproducto from './menu-producto.js'
import { Route } from 'react-router-dom'




export default class Menu extends Component {
	constructor( props ) {

		super( props )
		this.state = {
			productos: {},
		};
	}


	render( ) {

		var menu = Object.values(this.props.menu ).map(( categoria, index ) => {
			var productos = Object.values( categoria.productos ).map(producto => {
				return (
					<Menuproducto key={producto.key}  producto={producto} />
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

		return (


			<Route path="/" render={() =>
				<div>
					{menu}
				</div>

		}/>


		);
	}

}
