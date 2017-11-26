import React, { Component } from 'react';
import CuentaItem from './cuentaItem.js'
import BotonPedirCuenta from './botonPedirCuenta.js'

export default class Cuenta extends Component {
	constructor( props ) {
		super( props )
		this.state = {
			cuenta: [ ]
		};
	}




	render( ) {

		var pedidosFiltrados = Object.values(this.props.cuenta)
		.filter(item => item.estado !== 'cancelado')


		var listaPedidos = pedidosFiltrados.map(( item, index ) => {
			return ( <CuentaItem key={item.key} {...item} llave={item.key}/> )
		})

		//esto ya devuelve el total de la cuenta:
		var totalCuenta = pedidosFiltrados
		.map((item,index) => item.total)
		.reduce((a , b)  => Number(a) + Number(b), 0)

		let colorSegunEstadoMesa =  this.props.estadoMesa === 'abierta' ? '#000' : '#999'
		return (


			<div  style={{paddingBottom: '6px', color: colorSegunEstadoMesa}}>
				{listaPedidos}
				<BotonPedirCuenta estadoMesa={this.props.estadoMesa} totalCuenta={totalCuenta}/>
			</div>
		)
	}
}
