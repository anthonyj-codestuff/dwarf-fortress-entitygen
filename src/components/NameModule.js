import React, { Component } from 'react';
import * as Constants from "./assets/languages";

class NameModule extends Component {
  constructor(){
    super();
    this.state = {
      dwarfName: ""
    };
  }

  componentDidMount(){
    this.setState({dwarfName: Constants.dwarf[0]});
  }

  render() {
    return (
      <div>
        {this.state.dwarfName}
      </div>
    );
  }
}

export default NameModule;