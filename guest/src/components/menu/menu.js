import React, { Component } from 'react';
import Menuproducto from './productoItem.js'
import { Route } from 'react-router-dom'
import { CircularProgress } from 'material-ui/Progress';




export default class Menu extends Component {
	constructor( props ) {
		super( props )
		this.state = { cargando: true,
		};
	}

	render( ) {

		var menu = Object.values(this.props.menu ).map(( categoria, index ) => {
			var productos = Object.values( categoria.productos )
			.filter(producto => producto.disponibilidad === true)
			.sort((a, b) => a.pos > b.pos)
			.map(producto => {
				return (
					<Menuproducto estadoMesa={this.props.estadoMesa} key={producto.key}  producto={producto} />
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
		let colorSegunEstadoMesa =  this.props.estadoMesa === 'abierta' ? '#000' : '#999'
		return (

<div>
	<Route path="/" render={() =>
		<div style={{color: colorSegunEstadoMesa}}>


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

</div>
		);
	}

}
