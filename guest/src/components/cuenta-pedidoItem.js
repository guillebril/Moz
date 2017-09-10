import React, { Component } from 'react';

export default class PedidoItem extends Component {
	constructor( props ) {
		super( props )
		this.state = {};
	}

	render( ) {

		var t = new Date(this.props.pedido.Horario)
		var horas = t.getHours()
		var minutos = ('0' + t.getMinutes()).slice(-2)

		return (
			<div style={{display: 'flex',
				justifyContent: 'space-between',
				padding: '10px',
				paddingBottom: '15px',
			 	paddingRight: '20px',
				fontFamily: 'Roboto'}}>
						<div style={{

						}}>

								<div style={{
									fontWeight: '700',
									fontSize: '16px',
									lineHeight: '30px'
								}}>
								<span style={{paddingRight: '10px', color: '#ffc107', fontWeight: '500' }} >
									{this.props.pedido.Cantidad}
								</span>
									{this.props.pedido.Producto}
								</div>
									<div style={{
										color: '#595959',
										fontSize: '14px',}}>
										<span style={{color: '#929292'}}>{horas +':'+ minutos +' '}</span>
										{this.props.pedido.Comentarios}
									</div>

						</div>
						<div style={{
							paddingTop: '10px',
							fontSize: '16px',
							fontWeight: '600',
							}}>
							${this.props.pedido.Total}
						</div>

			</div>
		)
	}
}
