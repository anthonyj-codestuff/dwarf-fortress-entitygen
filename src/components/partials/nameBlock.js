import React  from 'react';
import { capitalize } from '../assets/utils';

export function getNameBlock() {
  const {first, last, firstHeld, lastHeld, transLast} = this.state.entityName;
  return (
    <div className="entity-name">
      <p className="original">
        <span
          className={
            firstHeld ? "held-name" : ""
          }
          onClick={() =>
            this.setState({ entityName: {...this.state.entityName, firstHeld: !firstHeld} })
          }
        >
          {(first ? capitalize(first) : "Click 'Get Name' to start") + " "} {/* print first name with a held or unheld class*/}
        </span>
        <span
          className={lastHeld ? "held-name" : ""}
          onClick={() =>
            this.setState({ entityName: {...this.state.entityName, lastHeld: !lastHeld} })
          }
        >
          {capitalize(last)} {/* print last name with a held or unheld class*/}
        </span>
      </p>
      <p className="translated">
        {(first ? capitalize(first) : "") + " " 
        + (transLast ? capitalize(transLast) : "")} {/* print translated name with smaller font*/}
      </p>
    </div>
  ); //nameBlock - Just a few words wrapped in spans
}