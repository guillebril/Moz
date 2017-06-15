import '../App.css';
import React, { Component } from 'react';
import Tabs, { Tab } from 'material-ui/Tabs';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import SwipeableViews from 'react-swipeable-views';
import Menu from './menu';


const styles = {
  slide: {
    marginTop: 48,
    minHeight: 500,
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 10,
    paddingBottom: 15,

  },
  slide1: {

  },
  slide2: {
    backgroundColor: '#B3DC4A',
  },


};


export default class Pestana extends Component {
  state = {
    index: 0,
  };

  handleChange = (event, value) => {
    this.setState({
      index: value,
    });
  };

  handleChangeIndex = (index) => {
    this.setState({
      index,
    });
  };

  render() {
    const {
      index,
    } = this.state;

    return(
      <MuiThemeProvider>
        <div>
          <Tabs index={index} className="cabezal" fullWidth onChange={this.handleChange}>
            <Tab style={styles.cabezal}  label="Menu" />
            <Tab label="Mi Cuenta" />

          </Tabs>
          <SwipeableViews index={index} onChangeIndex={this.handleChangeIndex}>

            <div style={Object.assign({}, styles.slide, styles.slide1)}>
              <Menu/>
            </div>
            <div style={Object.assign({}, styles.slide, styles.slide2)}>
              slide n°2
              <br />
              <br />

            </div>

          </SwipeableViews>
        </div>
      </MuiThemeProvider>
    );
  }
}
