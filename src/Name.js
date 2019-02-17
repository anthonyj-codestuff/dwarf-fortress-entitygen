//
// Contains the generic getName function for getting the name of a civ entity. 
// Not suitable for FBs or artifacts except in special cases.
//

// getName() //Should take in a language and a word pool. Outputs a standard name in the given language using the given pool

// wordIsOfType() //Grammar chaecking function. Checks to see that a given word has a given form

class NameFunctions {
  async getName(pool = []) { //change to getEntityName()
    // To get a name, choose from the pool of names. The pool should already be filtered to include all relevant spheres
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
}