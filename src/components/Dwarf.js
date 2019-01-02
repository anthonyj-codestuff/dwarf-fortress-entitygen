import React, { Component } from "react";
import { connect } from 'react-redux';
import { initializeLanguages } from '../redux/reducer';
import './Dwarf.css';

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
      },
      allNameTokens: ["flowery", "nature", "primitive", "holy", "evil", "negator", "magic", "violent", "peace", "ugly", "death", "old", "subordinate", "leader", "new", "domestic", "mythic", "artifice", "color", "mystery", "negative", "romantic", "assertive", "aquatic", "protect", "restrain", "thought", "wild", "earth", "good", "balance", "boundary", "dance", "darkness", "light", "order", "festival", "family", "fire", "food", "freedom", "games", "luck", "music", "sky", "silence", "trade", "travel", "truth", "wealth"],
      dwarfNameTokens: [["artifice", "earth"], ["domestic", "subordinate", "evil", "flowery", "negative", "ugly", "negator"]],
      elfNameTokens: [["flowery", "nature"], ["domestic", "subordinate", "evil", "negative", "ugly", "negator"]],
      humanNameTokens: [[], ["subordinate", "evil", "negative", "ugly", "negator"]],
      goblinNameTokens: [["evil"], ["domestic", "flowery", "holy", "peace", "negator", "good"]]
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
    let nameBlock = <div className="dwarf-name">
      {this.state.currentDwarf.firstName} "{this.state.currentDwarf.transLastName}" {this.state.currentDwarf.lastName}<br/>
    </div>;

    return <div>
      <div className="dwarf-module">
        {this.state.namesThisSession > 0 ?
          nameBlock
          : null}
        <button onClick={() => this.getDwarfName()}>Get D0rf Name</button>
      </div>
    </div>;
  }
}

const mapStateToProps = state => state;

export default connect(mapStateToProps,{initializeLanguages})(Dwarf);
