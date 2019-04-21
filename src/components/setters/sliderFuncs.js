//TODO: Fix this abomination

export function handleSwitch(name, value) {
  // value = -1: Add name to this.state.selectedCurrent[1] (forbidden array) and remove from selectedCurrent[0]
  // value = 1:  Add name to this.state.selectedCurrent[0] (required array) and remove from selectedCurrent[1]
  // value = 0:  Remove name from both arrays
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