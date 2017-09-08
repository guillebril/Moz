import '../App.css';
import React, { Component } from 'react';
import Tabs, { Tab } from 'material-ui/Tabs';
import SwipeableViews from 'react-swipeable-views';
import Menu from './menu';
import Cuenta from './cuenta'
const styles = {
	slide: {
		marginTop: 48,

		paddingBottom: 15
	},
	slide1: {},

	slide2: {
		minHeight: 500
	}
};

export default class Pestana extends Component {
	state = {
		index: 0
	};

	handleChange = ( event, value ) => {
		this.setState({ index: value });
	};

	handleChangeIndex = ( index ) => {
		this.setState({ index });
	};

	render( ) {
		const { index } = this.state;

		return (
			<div>
				// <Tabs
				// 	index={index}
				// 	className="cabezal"
				// 	indicatorColor="accent"
				// 	fullWidth
				// 	onChange={this.handleChange}>
				//
				// 	<Tab style={styles.cabezal} label="Menu"/>
				// 	<Tab label="Mi Cuenta"/>
				//
				// </Tabs>
				// <SwipeableViews index={index} threshold={5tert} onChangeIndex={this.handleChangeIndex}>
				//
				// 	<div style={Object.assign( {}, styles.slide, styles.slide1 )}>
				//
				// 		<Menu/>
				// 	</div>
				// 	<div style={Object.assign( {}, styles.slide, styles.slide2 )}>
				// 		<Cuenta/>
				// 		<br/>
				// 		<br/>
				// 	</div>
				//
				// </SwipeableViews>
			</div>
		);
	}
}
