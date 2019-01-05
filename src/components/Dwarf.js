import React, { Component } from "react";
import { connect } from 'react-redux';
import { initializeLanguages } from '../redux/reducer';
import './Dwarf.css';
const language_SYM = require('./assets/language_SYM.json');

const LIST_OF_NAMES = ["aban", "ablel", "adil", "alath", "amost", "as", "asen", "asmel", "asob", "ast", "astesh", "athel", "atir", "atis", "avuz", "bembul", "ber", "besmar", "bim", "bomrek", "catten", "cerol", "cilob", "cog", "dakost", "dastot", "datan", "deduk", "degel", "deler", "dishmab", "dobar", "dodok", "domas", "doren", "ducim", "dumat", "dumed", "edem", "edzul", "endok", "eral", "erib", "erith", "erush", "eshtan", "etur", "ezum", "fath", "feb", "fikod", "geshud", "goden", "id", "iden", "ilral", "imush", "ineth", "ingish", "ingiz", "inod", "iteb", "iton", "kadol", "kel", "kib", "kikrost", "kivish", "kogan", "kogsak", "kol", "kosoth", "kubuk", "kulet", "kumil", "led", "libash", "likot", "limul", "litast", "logem", "lokum", "lolor", "lor", "lorbam", "mafol", "mebzuth", "medtob", "melbil", "meng", "mestthos", "minkot", "mistem", "moldath", "momuz", "monom", "morul", "mosus", "muthkat", "nil", "nish", "nomal", "obok", "oddom", "olin", "olon", "onget", "onol", "onul", "rakust", "ral", "reg", "rigoth", "rimtar", "risen", "rith", "rovod", "sakzul", "sarvesh", "sazir", "shem", "shorast", "sibrek", "sigun", "sodel", "solon", "stakud", "stinthad", "stodir", "stukos", "tekkud", "thikut", "thob", "tholtig", "tirist", "tobul", "tosid", "tulon", "tun", "ubbul", "udib", "udil", "unib", "urdim", "urist", "urvad", "ushat", "ushrir", "ustuth", "uvash", "uzol", "vabok", "vucar", "vutok", "zan", "zaneg", "zas", "zasit", "zefon", "zon", "zuglar", "zulban", "zuntir", "zutthan"];

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

  capitalize(string) 
  {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  deaccent(str)
  {
    return str.normalize('NFD').replace(/[\u0300-\u036f]/g, "");
  }

  getEntityName(race)
  // a generic name generation function for all races. TODO: Move this into a parent name generation class
  {
    let isOfNativeCiv = this.getRand
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

    // Skeleton for world analysis code. Do not delete without copying first
    // let nameAnalysis = LIST_OF_NAMES.map((e,i) => {
    //   let deanglicized = this.props.dwarf.filter((f,j) => (e === this.deaccent(f)));
    //   let indexOfName = this.props.dwarf.indexOf(deanglicized[0]);
    //   let englishWord = this.props.english[indexOfName];
    //   let listOfMatches = [];
    //   if(englishWord){
    //     listOfMatches = this.state.allNameTokens.filter((f,j) => {
    //       //console.log(englishWord, f) //returns 'zutthan wealth' etc
    //       return language_SYM[f].includes(englishWord);
    //     })
    //   }
    // return <p className="dwarf-name">{deanglicized} {listOfMatches.sort().map((e) => <span>{e.toUpperCase()} </span>)}</p>})

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
