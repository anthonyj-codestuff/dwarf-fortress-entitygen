import React, { Component } from "react";
import { connect } from "react-redux";
import Modal from "@material-ui/core/Modal";
import { initializeLanguages } from "../redux/reducer";

import "./NameModule.scss";
import "./NamePoolModal.scss";

class NameModule extends Component {
  constructor() {
    super();
    this.state = {
      namesThisSession: 0,
      modalIsOpen: false,
      currentEntity: {
        firstName: "",
        lastName: "",
        transLastName: "",
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
    this.wordIsOfType = this.wordIsOfType.bind(this);
    this.handleSwitch = this.handleSwitch.bind(this);
    this.buildNamePool = this.buildNamePool.bind(this);
    this.cullForbiddenNames = this.cullForbiddenNames.bind(this);
    this.capitalize = this.capitalize.bind(this);
    this.deaccent = this.deaccent.bind(this);
    this.getNameModule = this.getNameModule.bind(this);
    this.getDwarfName = this.getDwarfName.bind(this);
    this.getSliderValue = this.getSliderValue.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
  }

  async componentDidMount() {
    await this.props.initializeLanguages();
  }

  wordIsOfType(word, type) {
    // Take the word, retrieve the array of types from the grammar blob, and check to see if it can be considered "type"
    if (word) {
      let typeArray = this.props.grammar[word];
      return typeArray.includes(type);
    } else return true;
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

  buildNamePool() {
    let newPool = [];
    if (this.state.selectedCurrent === this.state.selectedPrev) {
      console.log("Same as last set!");
      return;
    }
    // If the pool options have changed since last time, rebuild the pool from scratch using the first part of the pool options
    // If the selectedCurrent[0] array is empty, the user has not selected any tags to be applied. Add all available names to the pool
    if (this.state.selectedCurrent[0].length > 0) {
      // add only the activated names to the pool
      for (let i = 0; i < this.state.selectedCurrent[0].length; i++) {
        newPool = newPool.concat(
          this.props.tokens[this.state.selectedCurrent[0][i]]
        );
      }
    } else {
      // add all available names to the pool
      for (let i = 0; i < this.state.allNameTokens.length; i++) {
        newPool = newPool.concat(
          this.props.tokens[this.state.allNameTokens[i]]
        );
      }
    }

    console.log("newPool", newPool);
    newPool = newPool.filter((e, i, self) => e !== "" && i === self.indexOf(e));

    // filtering out forbidden words (passing in the standard set of forbidden dwarf names)
    newPool = this.cullForbiddenNames(newPool, this.state.selectedCurrent[1]);
    
    //update the previous pool so that rapid queries can be faster
    this.setState({ selectedPrev: this.state.selectedCurrent });
    // put the new pool of names on state for easy access
    this.setState({ namePool: newPool });
    return newPool;
  }

  cullForbiddenNames(pool, forbiddenArray) {
    // state contains a list of forbidden names per race, but this function should be used to filter out any array of tokens passed in as the second parameter
    let forbiddenPool = [];
    for (let i in forbiddenArray) {
      // take the token, grab the list from Redux, and add all of the relative arrays together
      forbiddenPool = forbiddenPool.concat(
        this.props.tokens[forbiddenArray[i]]
      );
    }
    // Remove dupes
    forbiddenPool = forbiddenPool.filter(
      (e, i, self) => e !== "" && i === self.indexOf(e)
    );
    // Filter one more time and remove any word that appears in the pool of forbidden names
    return pool.filter((e, i) => !forbiddenPool.includes(e));
  }

  capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  deaccent(str) {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  }

  getNameModule(
    race = "dwarf"
  ) // a generic name generation function for all races.
  // Every entity has a chance of getting a name from another civilization based on their upbringing
  // Use the requested 'race' to determine which name to retrieve
  {
    // Vanilla numbers for dwarves:
    // 0-976: Dwarf
    // 977-999: Human
    // 1000: Goblin
    let isOfNativeCiv = Math.floor(Math.random() * 1000);
    console.log("isOfNativeCiv", isOfNativeCiv);
  }

  async getDwarfName() { //change to getName()

    //
    //DO THIS NEXT: All this button should do is compile a name pool and send it to the generic name function along with a desired language
    //

    // To get a dwarf name, first determine the pool of names to choose from. Dwarves take all words from "artifice" and "earth" by default
    // and strip all words from "domestic", "subordinate", "evil", "flowery", "negative", "ugly", and "negator"
    // Include a small chance to also choose from other valid pools
    let first, last1, last2;
    let isOfNativeCiv = Math.floor(Math.random() * 1000);
    console.log("isOfNativeCiv", isOfNativeCiv);
    // Defines a standard pool of names by adding together the two normal name lists
    await this.buildNamePool();
    let pool = this.state.namePool;

    //TODO: Program crashes if the resulting pool of names is empty. Check for this.
    do {
      first = pool[Math.floor(Math.random() * pool.length)];
    } while (!this.wordIsOfType(first, "noun"));
    last1 = pool[Math.floor(Math.random() * pool.length)];
    last2 = pool[Math.floor(Math.random() * pool.length)];

    let dwarfName = {
      //set new names only if the user has not opted to hold the name
      ...this.state.currentEntity,
      firstName: this.state.currentEntity.firstNameHeld === true
        ? this.state.currentEntity.firstName
        : this.capitalize(
            this.props[this.state.selectedLanguage][this.props.english.indexOf(first)]
          ),
      lastName: this.state.currentEntity.lastNameHeld === true
        ? this.state.currentEntity.lastName
        : this.capitalize(
            this.props[this.state.selectedLanguage][this.props.english.indexOf(last1)] +
              this.props[this.state.selectedLanguage][this.props.english.indexOf(last2)]
          ),
      transLastName: this.state.currentEntity.lastNameHeld === true
      ? this.state.currentEntity.transLastName
      : this.capitalize(last1) + "-" + this.capitalize(last2)
    };
    this.setState({
      currentEntity: dwarfName,
      namesThisSession: this.state.namesThisSession + 1
    });
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
              this.state.currentEntity.firstNameHeld ? "held-name" : ""
            }
            onClick={() =>
              this.setState({
                currentEntity: {
                  ...this.state.currentEntity,
                  firstNameHeld: !this.state.currentEntity.firstNameHeld
                }
              })
            }
          >
            {this.state.currentEntity.firstName}{" "}
          </span>
          <span
            className={this.state.currentEntity.lastNameHeld ? "held-name" : ""}
            onClick={() =>
              this.setState({
                currentEntity: {
                  ...this.state.currentEntity,
                  lastNameHeld: !this.state.currentEntity.lastNameHeld
                }
              })
            }
          >
            {this.state.currentEntity.lastName}
          </span>
        </p>
        <p className="translated">
          {this.state.currentEntity.firstName +
            " " +
            this.state.currentEntity.transLastName}
        </p>
      </div>
    );
    const toggleStateColor = [
      "trinary-toggle-red",
      "trinary-toggle-default",
      "trinary-toggle-green"
    ];

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
                  {this.capitalize(e)}
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
                  {this.capitalize(e)}
                </option>
              ))}
            </select>
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

    return (
      <div style={{ display: "flex", flexDirection: "row" }}>
        <div className="entity-module">
          {this.state.namesThisSession > 0 ? nameBlock : null}
          <div className="entity-module-controls">
            <button
              className="button-entity-name"
              onClick={() => this.getDwarfName()}
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

const mapStateToProps = state => state;

export default connect(
  mapStateToProps,
  { initializeLanguages }
)(NameModule);
