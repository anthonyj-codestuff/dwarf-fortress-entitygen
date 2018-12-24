import React, { Component } from "react";
var D_NAMES = "test";

class Name extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      title: ""
    };

    var file = "../src/assets/language_DWARF.txt";
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", file, false);
    rawFile.onreadystatechange = function() {
      if (rawFile.readyState === 4) {
        if (rawFile.status === 200 || rawFile.status == 0) {
          var allText = rawFile.responseText;
          alert(allText);
        }
      }
    };
    rawFile.send(null);
  }

  render() {
    return <div>{D_NAMES}</div>;
  }
}

export default Name;
