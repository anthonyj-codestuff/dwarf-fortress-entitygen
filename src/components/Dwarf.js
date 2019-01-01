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
      namesThisSession: 0,
      currentDwarf: {
          firstName: "",
          lastName: ""
      }
    };
  }

  async componentDidMount()
  {
    await this.props.initializeLanguages();
  }

  getRand()
  {
    return Math.floor(Math.random() * this.props.dwarf.length);
  }

  wordIsOfType(num, type)
  {
    // Take the word, retrieve the array of types from the grammar blob, and check to see if it can be considered "type"
    let word = this.props.english[num];
    if(word)
    {
        // console.log("english word", word);
        // console.log("num", num);
        // console.log("type", type);
        let typeArray = this.props.grammar[word];
        return (typeArray.includes(type));
    }
    else return true ;
  }

  capitalize(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
  }

  getDwarfName()
  {
    let first;
    do 
    {
        first = this.getRand();
    } while(!this.wordIsOfType(first, "noun"));
    let last1 = this.getRand();
    let last2 = this.getRand();

    let dwarfName = {
        firstName: this.capitalize(this.props.dwarf[first]),
        lastName: this.capitalize(this.props.dwarf[last1] + this.props.dwarf[last2]),
        transLastName: this.capitalize(this.props.english[last1] + this.props.english[last2])
    };
    this.setState({ currentDwarf: dwarfName, namesThisSession: this.state.namesThisSession+1 })
  }

  render() 
  {
      let nameBlock = <div>
        {this.state.currentDwarf.firstName} "{this.state.currentDwarf.transLastName}" {this.state.currentDwarf.lastName}<br/>

      </div>;

    return <div>
        {this.state.namesThisSession > 0 ?
            nameBlock
            : null}
        <button onClick={() => this.getDwarfName()}>Get D0rf Name</button>
    </div>;
  }
}

const mapStateToProps = state => state;

export default connect(mapStateToProps,{initializeLanguages})(Dwarf);
