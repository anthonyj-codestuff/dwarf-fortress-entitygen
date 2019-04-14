import React  from 'react';

export function getNameBlock() {
  return (
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
}