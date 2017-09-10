import React, { Component } from 'react';
import base from '../rebase'
import PedidoItem from './cuenta-pedidoItem.js'
export default class Cuenta extends Component {
	constructor( props ) {
		super( props )
		this.state = {
			pedidos: [ ]
		};
	}

	componentDidMount( ) {
		base.bindToState('restaurantes/oconnells/mesas/-KrZAqaw3YqtWTQIAcM7', {
			context: this,
			state: 'pedidos',
			asArray: true
		});

	}

	render( ) {

		var listaPedidos = Object.values(this.props.pedidos).map(( pedido, index ) => {
			return ( <PedidoItem key={pedido.key} pedido={pedido}/> )
		})

		return (
			<div>{listaPedidos}</div>
		)
	}
}
