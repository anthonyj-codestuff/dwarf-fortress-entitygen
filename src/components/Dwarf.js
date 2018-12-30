import React, { Component } from "react";
import { connect } from 'react-redux';
import { initializeLanguages } from '../redux/reducer';

class Dwarf extends Component 
{
  constructor()
  {
    super();
    this.state =
    {
      original: [],
      translated: [],
      rand: null
    };
  }

  async componentDidMount()
  {
    console.log("before", this.props.dwarf)
    await this.props.initializeLanguages();
    console.log("after", this.props.dwarf[0])
    console.log("after", this.props.elf[0])
    console.log("after", this.props.human[0])
    console.log("after", this.props.goblin[0])
  }

  render() 
  {
    return <div></div>;
  }
}

const mapStateToProps = state => state;

export default connect(mapStateToProps,{initializeLanguages})(Dwarf);
