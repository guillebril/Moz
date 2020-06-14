import React, { Component } from "react";
import AppBar from "material-ui/AppBar";
import Toolbar from "material-ui/Toolbar";
import Typography from "material-ui/Typography";

class AppBarra extends Component {
  render() {
    return (
      <div>
        <AppBar position="static" color="primary">
          <Toolbar>
            <Typography type="title" color="inherit">
              Chango Natural Market
            </Typography>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default AppBarra;
