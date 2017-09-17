import React, { Component } from 'react';
import Menuproducto from './productoItem.js'
import { Route } from 'react-router-dom'
import { CircularProgress } from 'material-ui/Progress';




export default class Menu extends Component {
	constructor( props ) {

		super( props )
		this.state = { cargando: true
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


				{this.props.menu.length ?
						''
						 :
						 <div style={{margin:'auto', width: '50px', marginTop:'100px'}}>
 						<CircularProgress size={50} />
 						</div>

					 }

					 {menu}


				</div>

		}/>


		);
	}

}
