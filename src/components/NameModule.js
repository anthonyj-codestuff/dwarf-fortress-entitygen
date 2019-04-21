import React, { Component } from 'react';
import Modal from "@material-ui/core/Modal";

import "./NameModule.scss";
import "./NamePoolModal.scss";
import { getPoolState } from './partials/poolModal';
import { setCurrentLanguage, setCurrentRace } from "./setters/dropDownFuncs";
import { handleSwitch } from './setters/sliderFuncs'
import { getNameBlock } from './partials/nameBlock';
import { getName } from "./partials/getName";
import { allNameTokens } from "./assets/languages";

class NameModule extends Component {
  constructor(){
    super();
    this.state = {
      entityName: {
        first: "",
        last: "",
        transLast: "",
        firstNameHeld: false,
        lastNameHeld: false
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
    this.getName = getName.bind(this);
  }

  componentDidMount(){
    this.setState({entityName: {...this.state.entityName, first: "Click 'Get Name' to start"}});
  }

  clearSelected() {
    this.setState({ selectedCurrent: [[], []] });
  }


  toggleModal() {
    this.setState({ modalIsOpen: !this.state.modalIsOpen });
  }

  async 

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
              onClick={() => this.getName(this.state.selectedCurrent, this.state.selectedLanguage)}
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