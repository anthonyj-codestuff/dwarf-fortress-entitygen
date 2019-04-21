import React, { Component } from 'react';
import Modal from "@material-ui/core/Modal";

import "./NameModule.scss";
import "./NamePoolModal.scss";
import { getPoolState } from './partials/poolModal';
import { setCurrentLanguage, setCurrentRace } from "./setters/dropDownFuncs";
import { handleSwitch } from './setters/sliderFuncs'
import { getNameBlock } from './partials/nameBlock';
import { getName, wordToLang } from "./partials/getName";
import { allNameTokens } from "./assets/languages";

class NameModule extends Component {
  constructor(){
    super();
    this.state = {
      entityName: {
        first: "",
        last: "",
        transLast: "",
        firstHeld: false,
        lastHeld: false
      },
      namePool: [],
      selectedCurrent: [["artifice", "earth"], ["domestic", "subordinate", "evil", "flowery", "negative", "ugly", "negator"]],
      selectedPrev: [],
      selectedLanguage: "dwarf",
      selectedRace: "dwarf",
      races: ["dwarf", "elf", "human", "goblin"],
      allNameTokens: allNameTokens.sort(),
      dwarfNameTokens: [["artifice", "earth"], ["domestic", "subordinate", "evil", "flowery", "negative", "ugly", "negator"]],
      elfNameTokens: [["flowery", "nature"], ["domestic", "subordinate", "evil", "negative", "ugly", "negator"]],
      humanNameTokens: [[], ["subordinate", "evil", "negative", "ugly", "negator"]],
      goblinNameTokens: [["evil"], ["domestic", "flowery", "holy", "peace", "negator", "good"]]
    };
    this.getNameBlock = getNameBlock.bind(this);
    this.clearSelected = this.clearSelected.bind(this);
    this.setCurrentRace = setCurrentRace.bind(this);
    this.setCurrentLanguage = setCurrentLanguage.bind(this);
    this.getPoolState = getPoolState.bind(this);
    this.handleSwitch = handleSwitch.bind(this);
  }

  componentDidMount(){
  }

  clearSelected() {
    this.setState({ selectedCurrent: [[], []] });
  }


  toggleModal() {
    this.setState({ modalIsOpen: !this.state.modalIsOpen });
  }

  handleNameGen() {
    const nameObj = getName(this.state.selectedCurrent, this.state.selectedLanguage)
    const { first, last1, last2 } = nameObj;
    const tFirst = wordToLang(first, this.state.selectedLanguage);
    const tLast1 = wordToLang(last1, this.state.selectedLanguage);
    const tLast2 = wordToLang(last2, this.state.selectedLanguage);
    console.log("names", nameObj.first, nameObj.last1, nameObj.last2);
    this.setState({...this.state, entityName: {
      ...this.state.entityName,
      first: tFirst,
      last: tLast1 + tLast2,
      transLast: last1 + last2
    }});
  }

  render() {

    const stuffObj = {
      races: this.state.races,
      allTokens: this.state.allNameTokens,
      currentRace: this.state.selectedRace,
      currentLanuage: this.state.selectedLanguage,
      currentTokens: this.state.selectedCurrent,
      setRace: this.setCurrentRace,
      setLang: this.setCurrentLanguage,
      handleSwitch: this.handleSwitch,
      clear: this.clearSelected
    };

    return (
      <div style={{ display: "flex", flexDirection: "row" }}>
        <div className="entity-module">
          {this.getNameBlock()}
          <div className="entity-module-controls">
            <button
              className="button-entity-name"
              onClick={() => this.handleNameGen()}
            >
              Get Name
            </button>
            <button
              className="button-entity-name"
              onClick={() => this.toggleModal()}
            >
              Settings
            </button>
          </div>
        </div>
        <Modal open={this.state.modalIsOpen} onClose={() => this.toggleModal()}>
          {getPoolState(stuffObj)}
        </Modal>
      </div>
    );
  }
}

export default NameModule;