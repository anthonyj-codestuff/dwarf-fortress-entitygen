import React, { Component } from 'react';
import './ThreeState.scss';

class ThreeState extends Component {
  constructor() {
    super();
    this.state = {
      value: 0
    };
  }
  render() {
    return (
      <div>
        <input 
          className="trinary-toggle"
          // style={{background: "red"}}
          type="range"
          value={this.state.value}
          onChange={(e) => this.setState({value: e.target.value})}
          min="-1"
          max="1"
          step="1"
        />
      </div>
    );
  }
}

export default ThreeState;