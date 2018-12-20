import React, { Component } from 'react';
import DWARF_NAMES from '../assets/language_DWARF.txt';

class Name extends Component 
{
  constructor()
  {
    super();
    this.state = {
      name: ""
    };
  }
  render() 
  {
    return (
      <div>
        {DWARF_NAMES}
      </div>
    );
  }
}

export default Name;