import React, { Component } from 'react';

export default class PedidoItem extends Component {
	constructor( props ) {
		super( props )
		this.state = {};
	}

	render( ) {

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
									fontSize: '16px'
								}}>
								<span style={{paddingRight: '10px', color: '#ffc107', fontWeight: '500' }} >
									{this.props.pedido.Cantidad}
								</span>
									{this.props.pedido.Producto}
								</div>
									<div style={{
										fontSize: '14px', paddingLeft: '20px',}}>
										{this.props.pedido.Comentarios}
									</div>

						</div>
						<div style={{

							fontSize: '18px',
							fontWeight: '300',
							}}>
							${this.props.pedido.Total}
						</div>

			</div>
		)
	}
}
