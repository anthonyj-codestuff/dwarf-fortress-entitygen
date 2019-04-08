import React, { Component } from 'react';
import Modal from "@material-ui/core/Modal";
import * as Constants from "./assets/languages";

import "./NameModule.scss";
import "./NamePoolModal.scss";

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
      allNameTokens: ["flowery", "nature", "primitive", "holy", "evil", "negator", "magic", "violent", "peace", "ugly", "death", "old", "subordinate", "leader", "new", "domestic", "mythic", "artifice", "color", "mystery", "negative", "romantic", "assertive", "aquatic", "protect", "restrain", "thought", "wild", "earth", "good", "balance", "boundary", "dance", "darkness", "light", "order", "festival", "family", "fire", "food", "freedom", "games", "luck", "music", "sky", "silence", "trade", "travel", "truth", "wealth"].sort(),
      dwarfNameTokens: [["artifice", "earth"], ["domestic", "subordinate", "evil", "flowery", "negative", "ugly", "negator"]],
      elfNameTokens: [["flowery", "nature"], ["domestic", "subordinate", "evil", "negative", "ugly", "negator"]],
      humanNameTokens: [[], ["subordinate", "evil", "negative", "ugly", "negator"]],
      goblinNameTokens: [["evil"], ["domestic", "flowery", "holy", "peace", "negator", "good"]]
    };
  }

  componentDidMount(){
    this.setState({dwarfName: Constants.dwarf[0]});
  }

  handleSwitch(name, value) {
    // value = -1: Add name to this.state.selectedCurrent[1] (forbidden array) and remove from selectedCurrent[0]
    // value = 1:  Add name to this.state.selectedCurrent[0] (required array) and remove from selectedCurrent[1]
    // value = 0:  Remove name from both arrays
    let tempArray = [];
    switch (value) {
      case "-1": //Add name to this.state.selectedCurrent[1] (forbidden array) and remove from selectedCurrent[0]
        if (!this.state.selectedCurrent[1].includes(name)) {
          //append name to forbidden
          this.setState({
            selectedCurrent: [
              [...this.state.selectedCurrent[0]],
              [...this.state.selectedCurrent[1], name]
            ]
          });
        }
        // if the element is found in the required array, remove it
        if (this.state.selectedCurrent[0].indexOf(name) !== -1) {
          this.setState({
            // filter the element out of the permitted array. Don't touch the second one
            selectedCurrent: [
              [
                ...this.state.selectedCurrent[0].filter(e => {
                  return e !== name;
                })
              ],
              [...this.state.selectedCurrent[1]]
            ]
          });
        }
        break;
      case "1":
        // everything here should be the same as in "-1" but reversed
        if (!this.state.selectedCurrent[0].includes(name)) {
          this.setState({
            selectedCurrent: [
              [...this.state.selectedCurrent[0], name],
              [...this.state.selectedCurrent[1]]
            ]
          });
        }
        if (this.state.selectedCurrent[1].indexOf(name) !== -1) {
          this.setState({
            selectedCurrent: [
              [...this.state.selectedCurrent[0]],
              [
                ...this.state.selectedCurrent[1].filter(e => {
                  return e !== name;
                })
              ]
            ]
          });
        }
        break;
      case "0":
        // remove name from both arrays
        this.setState({
          selectedCurrent: [
            [
              ...this.state.selectedCurrent[0].filter(e => {
                return e !== name;
              })
            ],
            [
              ...this.state.selectedCurrent[1].filter(e => {
                return e !== name;
              })
            ]
          ]
        });
        break;
      default:
        console.log(
          "ERROR: default state reached in handleSwitch() with name",
          name,
          "and value",
          value
        );
        break;
    }
  }

  getSliderValue(sliderWord) {
    // Set the initial value of the toggle based on what values are found in the selectedCurrent arrays
    return this.state.selectedCurrent[0].includes(sliderWord) &&
      !this.state.selectedCurrent[1].includes(sliderWord)
      ? 1
      : this.state.selectedCurrent[1].includes(sliderWord) &&
        !this.state.selectedCurrent[0].includes(sliderWord)
      ? -1
      : 0;
  }

  toggleModal() {
    this.setState({ modalIsOpen: !this.state.modalIsOpen });
  }

  render() {

    let nameBlock = (
      <div className="entity-name">
        <p className="original">
          <span
            className={
              this.state.entityName.firstNameHeld ? "held-name" : ""
            }
            onClick={() =>
              this.setState({ entityName: {...this.state.entityName, firstNameHeld: !this.state.entityName.firstNameHeld} })
            }
          >
            {this.state.entityName.first + " "} {/* print first name with a held or unheld class*/}
          </span>
          <span
            className={this.state.entityName.lastNameHeld ? "held-name" : ""}
            onClick={() =>
              this.setState({ entityName: {...this.state.entityName, lastNameHeld: !this.state.entityName.lastNameHeld} })
            }
          >
            {this.state.entityName.last} {/* print last name with a held or unheld class*/}
          </span>
        </p>
        <p className="translated">
          {this.state.entityName.firstName + " " + this.state.entityName.transLastName} {/* print translated name with smaller font*/}
        </p>
      </div>
    ); //nameBlock - Just a few words wrapped in spans

    const toggleStateColor = [
      "trinary-toggle-red",
      "trinary-toggle-default",
      "trinary-toggle-green"
    ]; //used to set toggle switch classes based on value

    

    return (
      <div style={{ display: "flex", flexDirection: "row" }}>
        <div className="entity-module">
          {this.state.namesThisSession > 0 ? nameBlock : null}
          <div className="entity-module-controls">
            <button
              className="button-entity-name"
              onClick={() => this.getName()}
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
          {toggleList}
        </Modal>
      </div>
    );
  }
}

export default NameModule;