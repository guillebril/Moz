import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom'
import createHistory from 'history/createBrowserHistory'

import MenuProductoPedir from './menu-producto-pedir'


export default class Menuproducto extends Component {


	constructor( props ) {


		super( props )
		this.state = { open: true }
	}



	handleOpen = ( ) => {
		this.setState({ open: true });

	};

	handleClose = ( ) => {
		this.setState({ open: false });
		createHistory().push('/' )
		};


	render( ) {

		return (

			<Link to={'/'+this.props.producto.key}>
			<div className='producto_item' onClick={this.handleOpen} >
				<div className='producto_item_nombre'>{this.props.producto.nombre}</div>
				<div className='producto_item_descripcion'>{this.props.producto.descripcion}</div>
				<div className='producto_item_precio'>${this.props.producto.precio}</div>

			<div>

					<Route path={'/'+this.props.producto.key} render={() =>
						<MenuProductoPedir
							open={this.state.open}
							handleOpen={this.handleOpen}
							handleClose={this.handleClose}
							onRequestClose={this.handleClose}
							producto={this.props.producto} />
					}/>
				</div>
			</div>
			</Link>

		)
	}

}
