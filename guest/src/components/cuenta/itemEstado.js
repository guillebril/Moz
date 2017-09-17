import React, { Component } from 'react';
import base from '../../rebase';
import IconButton from 'material-ui/IconButton';
import AllDoneIcon from 'material-ui-icons/AllDone';
import DeleteIcon from 'material-ui-icons/Delete';
export default class ItemEstado extends Component {
	constructor( props ) {
		super( props )
		this.state = {
      estado: props.estado};
	}

  eliminarItem = ()  =>{
    base.update('restaurantes/oconnells/mesas/-Kti1MOdTgkw0HwEH7Bh/pedidos/'+this.props.llave , {
      data: {estado: 'Cancelado'},
      }
    )
  }



  iconoQueMuestra () {
    if (this.state.estado === 'Aceptado'){
      return (
        <div style={{paddingTop: '6px'}}>
        <AllDoneIcon style={{width:'16px', paddingLeft:'6px', color: '#1CD686'}}/>
        </div>
      )
    }  if (this.state.estado === 'Pedido'){
      return (
        <IconButton onTouchTap={this.eliminarItem}>
        <DeleteIcon  style={{paddingLeft:'12px', color: 'rgb(146, 146, 146)'}}
          />
        </IconButton>
      )

    }
    

  }


	render(){
    return(
    this.iconoQueMuestra()
  )
  }
}
