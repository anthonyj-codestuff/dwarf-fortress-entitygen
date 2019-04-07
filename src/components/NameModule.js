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

  toggleModal() {
    this.setState({ modalIsOpen: !this.state.modalIsOpen });
  }

  render() {

    let toggleList = (
      <div className="token-list">
        <div className="token-list-head">
          <div>
            <span className="text-minor">Race </span>
            <select
              onChange={event =>
                this.setState({
                  selectedCurrent: this.state[
                    event.target.value + "NameTokens"
                  ],
                  selectedRace: event.target.value
                })
              }
            >
              {/* fill the dropdown box with the values from the race list */}
              {this.state.races.map((e, i) => (
                <option
                  value={e}
                  selected={this.state.selectedRace === e ? "selected" : ""}
                >
                  {/* {capitalize(e)} */}
                  +OPTION+
                </option>
              ))}
            </select>
          </div>
          <div>
            <span className="text-minor">Language </span>
            <select
              onChange={event =>
                this.setState({ selectedLanguage: event.target.value })
              }
            >
              {/* fill the dropdown box with the values from the race list */}
              {this.state.races.map((e, i) => (
                <option
                  value={e}
                  selected={this.state.selectedLanguage === e ? "selected" : ""}
                >
                  {/* {capitalize(e)} */}
                  -OPTION-
                </option>
              ))}
            </select>
          </div>
          <div>
            <button onClick={() => this.setState({ selectedCurrent: [ [], [] ] })}>Clear all options</button>
          </div>
        </div>
        {this.state.allNameTokens.map((e, i) => {
          return (
            <div key={"token-" + i} class="token-toggle-row">
              <span>{e}</span>
              <div>
                <input
                  id={"ts-" + i}
                  className={
                    "trinary-toggle " +
                    toggleStateColor[+this.getSliderValue(e) + 1]
                  }
                  type="range"
                  value={this.getSliderValue(e)}
                  onChange={event => {
                    console.log(
                      "trinary-toggle " +
                        toggleStateColor[+this.getSliderValue(e) + 1]
                    );
                    return this.handleSwitch(e, event.target.value);
                  }}
                  min="-1"
                  max="1"
                  step="1"
                />
              </div>
            </div>
          );
        })}
      </div>
    );

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