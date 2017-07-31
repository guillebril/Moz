import React,  { Component } from 'react'


import Button from 'material-ui/Button';
import Dialog from 'material-ui/Dialog';
import List, { ListItem, ListItemText } from 'material-ui/List';
import Divider from 'material-ui/Divider';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import IconButton from 'material-ui/IconButton';
import CloseIcon from 'material-ui-icons/Close';
import Typography from 'material-ui/Typography';

import Slide from 'material-ui/transitions/Slide';




export default class Menuproducto extends Component{
  constructor(props) {
    super(props)
    this.state = {
      open: false
    };
  }


  handleOpen = () => {
    this.setState({open: true});

  };

  handleClose = () => {
    this.setState({open: false});
};
render() {



  return (
      <div  className='producto_item'   onClick={this.handleOpen}>
        <div className='producto_item_nombre'>{this.props.producto.nombre}</div>
        <div className='producto_item_descripcion'>{this.props.producto.descripcion}</div>
        <div className='producto_item_precio'>${this.props.producto.precio}</div>

          <div>

          <Dialog
            fullScreen
            open={this.state.open}
            onRequestClose={this.handleClose}
            transition={<Slide direction="up" />}
          >
            <AppBar style={{position: 'relative', backgroundColor: '#F44336'}} >
              <Toolbar>
                <IconButton color="contrast" iconClassName='Close' onClick={this.handleClose} aria-label="Close">
                  <CloseIcon />
                </IconButton>
                <Typography type="title" style={{flex: '1'}} color="inherit" >
                  {this.props.producto.nombre}
                  </Typography>
                <Button color="contrast" onClick={this.handleClose}>
                  Pedir
                </Button>
              </Toolbar>
            </AppBar>
            <List>
              <ListItem button>
                <ListItemText primary="Phone ringtone" secondary="Titania" />
              </ListItem>
              <Divider />
              <ListItem button>
                <ListItemText primary="Default notification ringtone" secondary="Tethys" />
              </ListItem>
            </List>
          </Dialog>
        </div>




    </div>
  )
}

}
