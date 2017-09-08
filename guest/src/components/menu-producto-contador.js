import React, { Component } from 'react'

import IconButton from 'material-ui/IconButton';
import Add from 'material-ui-icons/Add';
import Remove from 'material-ui-icons/Remove';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography'

const contenedorContador = {
	display: 'flex',
	width: '100%',
	alignItems: 'center',
	justifyContent: 'center'
}
const papel = {
	display: 'flex',
	alignItems: 'center',
	backgroundColor: '#eee',
	borderRadius: '3px',
	paddingLeft: '10px',
	paddingRight: '10px'
}

const botonContador = {
	margingLeft: '30px',
	margingRight: '30px'
}

class MenuProductoContador extends Component {

	render( ) {

		return (
			<div style={contenedorContador}>
				<Paper style={papel} elevation={0}>
					<IconButton style={botonContador} onTouchTap={this.props.onTouchTapRestar}>
						<Remove/>
					</IconButton>
					<Typography
						style={{
						fontSize: '25px',
						margin: '20px',
						color: '#FFAB00'
					}}>
						{this.props.cantidad}
					</Typography>
					<IconButton style={botonContador} onTouchTap={this.props.onTouchTapSumar}>

						<Add/>
					</IconButton>
				</Paper>
			</div>

		)
	}
}

export default MenuProductoContador;
