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