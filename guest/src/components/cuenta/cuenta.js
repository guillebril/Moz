import React, { Component } from 'react';
import base from '../../rebase'
import CuentaItem from './cuentaItem.js'
import Button from 'material-ui/Button';



export default class Cuenta extends Component {
	constructor( props ) {
		super( props )
		this.state = {
			cuenta: [ ]
		};
	}

	componentDidMount( ) {
		base.bindToState('restaurantes/oconnells/mesas/-Kti1MOdTgkw0HwEH7Bh/pedidos', {
			context: this,
			keepKeys: true,
			state: 'cuenta',
			asArray: true
		});

	}

	render( ) {

		var listaPedidos = Object.values(this.state.cuenta).filter(item => item.estado !== 'cancelado').map(( item, index ) => {
			return ( <CuentaItem key={item.key} {...item} llave={item.key}/> )
		})

		//esto ya devuelve el total de la cuenta:
		console.log( Object.values(this.state.cuenta)
		.filter(item => item.estado !== 'cancelado')
		.map((item,index) => item.total)
		.reduce((a , b)  => Number(a) + Number(b), 0)
	)
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
