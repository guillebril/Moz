import React, { Component } from 'react';
import base from '../../rebase'
import PedidoItem from './pedidoItem.js'
import Button from 'material-ui/Button';



export default class Cuenta extends Component {
	constructor( props ) {
		super( props )
		this.state = {
			pedidos: [ ]
		};
	}

	componentDidMount( ) {
		base.bindToState('restaurantes/oconnells/mesas/-Kti1MOdTgkw0HwEH7Bh/pedidos', {
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

			<div style={{paddingBottom: '6px'}}>
				{listaPedidos}
				<div style={{ display: 'grid', margin: '10px'}}>
				<Button raised color="primary" style={{ height: '46px'}}>
					<div style={{fontSize: '16px'}}>PEDIR LA CUENTA</div>
				</Button>
				</div>
			</div>
		)
	}
}
