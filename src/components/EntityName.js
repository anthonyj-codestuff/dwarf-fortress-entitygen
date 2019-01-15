import React, { Component } from "react";
import { connect } from 'react-redux';
import List from '@material-ui/core';
import { initializeLanguages } from '../redux/reducer';
import './EntityName.scss';

class EntityName extends Component 
{
  constructor()
  {
    super();
    this.state =
    {
      namesThisSession: 0,
      cullForbidden: true,
      currentEntity: {
        firstName: "",
        lastName: ""
      },
      namePool: [],
      selectedCurrent: [["artifice", "earth"],["domestic", "subordinate", "evil", "flowery", "negative", "ugly", "negator"]],
      selectedPrev: [],
      races: ["dwarf", "elf", "human", "goblin"],
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

  wordIsOfType(word, type)
  {
    // Take the word, retrieve the array of types from the grammar blob, and check to see if it can be considered "type"
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

  buildNamePool()
  {
    let newPool = [];
    if(this.state.selectedCurrent === this.state.selectedPrev){
      return;
    }
    // If the pool options have changed since last time, rebuild the pool from scratch using the first part of the pool options
    for(let i=0; i<this.state.selectedCurrent[0].length; i++){
      newPool = newPool.concat(this.props.tokens[this.state.selectedCurrent[i]]);
    }
    newPool = newPool.filter((e, i, self) => (e !== '') && (i === self.indexOf(e)));

    if(this.state.cullForbidden) {
      // filtering out forbidden words (passing in the standard set of forbidden dwarf names)
      newPool = this.cullForbiddenNames(newPool, this.state.selectedCurrent[1]);
    }
    console.log('newPool', newPool);
    return newPool;
  }

  cullForbiddenNames(pool, forbiddenArray)
  {
    // state contains a list of forbidden names per race, but this function should be used to filter out any array of tokens passed in as the second parameter
    let forbiddenPool = [];
    for(let i in forbiddenArray)
    {
      // take the token, grab the list from Redux, and add all of the relative arrays together
      forbiddenPool = forbiddenPool.concat(this.props.tokens[forbiddenArray[i]]);
    }
    // Remove dupes
    forbiddenPool = forbiddenPool.filter((e, i, self) => (e !== '') && (i === self.indexOf(e)));
    // Filter one more time and remove any word that appears in the pool of forbidden names
    return pool.filter((e, i) => (!forbiddenPool.includes(e)));
  }

  capitalize(string) 
  {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  deaccent(str)
  {
    return str.normalize('NFD').replace(/[\u0300-\u036f]/g, "");
  }

  getEntityName(race = "dwarf")
  // a generic name generation function for all races.
  // Every entity has a chance of getting a name from another civilization based on their upbringing
  // Use the requested 'race' to determine which name to retrieve
  {
    // Vanilla numbers for dwarves: 
    // 0-976: Dwarf
    // 977-999: Human
    // 1000: Goblin
    let isOfNativeCiv = Math.floor(Math.random() * 1000);
    console.log('isOfNativeCiv', isOfNativeCiv);
  }

  async getDwarfName() //change to getEntityName()
  {
    // To get a dwarf name, first determine the pool of names to choose from. Dwarves take all words from "artifice" and "earth" by default
    // and strip all words from "domestic", "subordinate", "evil", "flowery", "negative", "ugly", and "negator"
    // Include a small chance to also choose from other valid pools
    let first, last1, last2;
    let isOfNativeCiv = Math.floor(Math.random() * 1000);
    console.log('isOfNativeCiv', isOfNativeCiv);
    // Defines a standard pool of names by adding together the two normal name lists
    await this.buildNamePool();
    let pool = this.state.namePool;

    //TODO: Program crashes if the resulting pool of names is empty. Check for this.
    do 
    {
      first = pool[Math.floor(Math.random() * pool.length)]
    } while(!this.wordIsOfType(first, "noun"));
    last1 = pool[Math.floor(Math.random() * pool.length)];
    last2 = pool[Math.floor(Math.random() * pool.length)];

    let dwarfName = {
      firstName: this.capitalize(this.props.dwarf[this.props.english.indexOf(first)]),
      lastName: this.capitalize(this.props.dwarf[this.props.english.indexOf(last1)] + this.props.dwarf[this.props.english.indexOf(last2)]),
      transLastName: this.capitalize(last1 + last2)
    };
    this.setState({ currentEntity: dwarfName, namesThisSession: this.state.namesThisSession+1 })
  }

  render() 
  {
    let nameBlock = <div className="entity-name">
      <span title={this.state.currentEntity.firstName + ' ' + this.state.currentEntity.transLastName}>{this.state.currentEntity.firstName} {this.state.currentEntity.lastName}</span><br/>
    </div>;

    // Skeleton for world analysis code. Do not delete without copying first
    // let nameAnalysis = LIST_OF_NAMES.map((e,i) => {
    //   let deanglicized = this.props.dwarf.filter((f,j) => (e === this.deaccent(f)));
    //   let indexOfName = this.props.dwarf.indexOf(deanglicized[0]);
    //   let englishWord = this.props.english[indexOfName];
    //   let listOfMatches = [];
    //   if(englishWord){
    //     listOfMatches = this.state.allNameTokens.filter((f,j) => {
    //       //console.log(englishWord, f) //returns 'zutthan wealth' etc
    //       return language_SYM[f].includes(english Word);
    //     })
    //   }
    // return <p className="entity-name">{deanglicized} {listOfMatches.sort().map((e) => <span>{e.toUpperCase()} </span>)}</p>})

    return (<div style={{display : "flex", flexDirection : "row"}}>
      <div className="entity-module">
        {this.state.namesThisSession > 0 ?
          nameBlock
          : null}
        <div className="entity-module-controls">
          <div style={{border : "1px solid red", marginRight : "10px"}}>
            <button onClick={() => this.getDwarfName()}>Get D0rf Name</button>
          </div>
          <div style={{border : "1px solid red"}}>
            <span className="text-minor">Cull Forbidden?</span>
            <input type="checkbox" checked={this.state.cullForbidden} onChange={() => this.setState({ cullForbidden: !this.state.cullForbidden })} />
          </div>
        </div>
      </div>
      <div className="token-list">
        {this.state.allNameTokens.map((e,i) => {
          return(<div key="i">{e}</div>);
        })}
      </div>
    </div>)
  }
}

const mapStateToProps = state => state;

export default connect(mapStateToProps,{initializeLanguages})(EntityName);
