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
    console.log("before", this.props.english)
    await this.props.initializeLanguages();
    console.log("after", this.props.english)
  }

  render() 
  {
    return <div></div>;
  }
}

const mapStateToProps = state => state;

export default connect(mapStateToProps,{initializeLanguages})(Dwarf);
