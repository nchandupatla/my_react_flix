import React, { Component } from 'react';

import Flix from './containers/Flix/Flix';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <Flix />
      </MuiThemeProvider>
    );
  }
}

export default App;
