import React, { Component } from 'react'
import base from '../rebase'

import Button from 'material-ui/Button';
import Dialog from 'material-ui/Dialog';
import List, { ListItem, ListItemText } from 'material-ui/List';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import IconButton from 'material-ui/IconButton';
import CloseIcon from 'material-ui-icons/Close';
import Typography from 'material-ui/Typography';

import Slide from 'material-ui/transitions/Slide';
import MenuProductoContador from './menu-producto-contador'
import TextField from 'material-ui/TextField';

export default class Menuproducto extends Component {
	constructor( props ) {

		super( props )
		this.state = {
			open: false,
			cantidad: 1,
			totalModal: props.producto.precio,
			comentario: ''
		};
	}

	handleOpen = ( ) => {
		this.setState({ open: true });
	};

	handleClose = ( ) => {
		this.setState({ open: false });
	};

	handleChange = event => {
		this.setState({ comentario: event.target.value });
	};

	onTouchTapRestar = ( event ) => {
		var cantidad = this.state.cantidad
		if ( cantidad > 1 ) {
			this.setState({
				cantidad: cantidad - 1,
				totalModal: ( cantidad - 1 ) * this.props.producto.precio
			})
		}
	}

	onTouchTapSumar = ( event ) => {
		var cantidad = this.state.cantidad
		this.setState({
			cantidad: cantidad + 1,
			totalModal: ( cantidad + 1 ) * this.props.producto.precio
		})
	}

	agregarEnCuenta = ( ) => {
		var etiquetaTiempo = new Date( )
		base.push('restaurantes/oconnells/mesas/-KrZAqaw3YqtWTQIAcM7', {
			data: {
				Producto: this.props.producto.nombre,
				Usuario: base.initializedApp.auth( ).currentUser.uid,
				Tamaño: '',
				Cantidad: this.state.cantidad,
				Comentarios: this.state.comentario,
				Horario: etiquetaTiempo + '',
				Total: this.state.totalModal,
				Estado: 'Pedido'
			}
		});
		console.log( etiquetaTiempo )
		this.setState({ open: false });
	}

	render( ) {

		return (
			<div className='producto_item' onClick={this.handleOpen}>
				<div className='producto_item_nombre'>{this.props.producto.nombre}</div>
				<div className='producto_item_descripcion'>{this.props.producto.descripcion}</div>
				<div className='producto_item_precio'>${this.props.producto.precio}</div>
				<div>

					<Dialog
						fullScreen
						open={this.state.open}
						onRequestClose={this.handleClose}
						transition={< Slide direction='up' />}>

						<AppBar style={{
							position: 'relative',
							backgroundColor: '#F44336'
						}}>
							<Toolbar>
								<Typography
									type="title"
									style={{
									'WebkitFontSmoothing': 'antialiased',
									color: '#fff',
									flex: '1'
								}}
									color="inherit">
									{this.props.producto.nombre}
								</Typography>
								<IconButton
									style={{
									color: '#fff'
								}}
									onClick={this.handleClose}
									aria-label="Close">
									<CloseIcon/>
								</IconButton>
							</Toolbar>
						</AppBar>

						<List>
							<ListItem>
								<ListItemText
									primary={this.props.producto.nombre}
									secondary={this.props.producto.descripcion}/>
								<Typography type='title'>
									${this.props.producto.precio}
								</Typography>

							</ListItem>
							<ListItem>
								<TextField
									name='comentario'
									onChange={this.handleChange}
									label="Comentarios"
									multiline
									fullWidth
									margin="normal"/>

							</ListItem>

							<ListItem>
								<MenuProductoContador
									cantidad={this.state.cantidad}
									onTouchTapRestar={this.onTouchTapRestar}
									onTouchTapSumar={this.onTouchTapSumar}/>
							</ListItem>
						</List>
						<Button
							raised
							color="primary"
							onClick={this.agregarEnCuenta}
							style={{
							height: '45px'
						}}>
							<Typography type='title'>
								Pedir {this.state.cantidad} (${this.state.totalModal})</Typography>

						</Button>
					</Dialog>
				</div>
			</div>
		)
	}

}
