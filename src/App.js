import React, { Component } from 'react';
import Router from "./router/index";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return ( 
      <Router />
     );
  }
}
 
export default App;