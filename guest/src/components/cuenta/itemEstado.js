import React, { Component } from 'react';
import base from '../../rebase';
import IconButton from 'material-ui/IconButton';

import {Delete, DoneAll} from 'material-ui-icons';
export default class ItemEstado extends Component {



  eliminarItem = ()  =>{

  

    base.update('restaurantes/oconnells/mesas/-Kti1MOdTgkw0HwEH7Bh/pedidos/'+this.props.llave , {
      data: {estado: 'cancelado'},
      }
    )
  }



  iconoQueMuestra () {
    if (this.props.estado === 'aceptado'){
      return (
        <div style={{paddingTop: '6px'}}>
          <DoneAll style={{width:'20px', paddingLeft:'6px', color: '#1CD686'}}/>
        </div>
      )
    }  if (this.props.estado === 'Pedido'){
      return (
        <IconButton onTouchTap={this.eliminarItem}>
          <Delete  style={{paddingLeft:'12px', color: 'rgb(146, 146, 146)'}}/>
        </IconButton>
      )

    } else {
			return (null)
    }


  }




	render(){
    return(
    this.iconoQueMuestra()
  )
  }
}
