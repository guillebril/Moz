import '../App.css';
import React, { Component } from 'react';
import base from '../rebase'

import BottomNavigation, { BottomNavigationButton } from 'material-ui/BottomNavigation';
import LocalDiningIcon from 'material-ui-icons/LocalDining';
import BeerIcon from 'material-ui-icons/Beer';
import ListIcon from 'material-ui-icons/List';
import Menu from './menu';
import Cuenta from './cuenta'
import Paper from 'material-ui/Paper';



export default class Pestana extends Component {

	state = {
	value: 0,
	restaurante: {},
	pedidos: {},
};

	handleChange = (event, value) => {
     this.setState({ value });

   };


	 componentDidMount( ) {
		 // convierto el objeto a array y le hago a doble binding
		 base.bindToState('restaurantes/oconnells/menu', {
			 context: this,
			 state: 'restaurante',
			 asArray: true
		 });

		 base.bindToState('restaurantes/oconnells/mesas/-KrZAqaw3YqtWTQIAcM7', {
			 context: this,
			 state: 'pedidos',
			 asArray: true
		 });

	 }


  ventana = () => {

	 if (this.state.value === 0){
		 return (
			 <Menu  menu={this.state.restaurante} />
		 )}
		 if (this.state.value === 1){
			 return (<Menu menu={this.state.restaurante}/>)

		 } else {
			 return (<Cuenta pedidos={this.state.pedidos}/>)
		 }


	 }



	render()
	 {

    const { value } = this.state;
    return (
			<div>
				<div style={{marginBottom: '64px'}}>
				{this.ventana()}
				</div>




			      <BottomNavigation
			        value={value}
			        onChange={this.handleChange}
			        showLabels={true}
							style={{position: 'fixed', bottom: '0', width: '100%', boxShadow: '-1px 7px 20px 0px'}}>
			        <BottomNavigationButton style={{display: 'grid'}}label="Bebidas" icon={<BeerIcon />}/>
			        <BottomNavigationButton style={{display: 'grid'}} label="Comidas" icon={<LocalDiningIcon/>} />
			        <BottomNavigationButton style={{display: 'grid'}} label="Cuenta" icon={<ListIcon />} />
					</BottomNavigation>



			</div>
    );
  }

	}
