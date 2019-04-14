import React  from 'react';
import { capitalize } from "../assets/utils";
/**
 * 
 * @param {string} title  - Label for the menu
 * @param {Array<string>} options 
 * @param {string} current - The currently selected option 
 * @param {function} callback - Sets state
 */
export function getDropDownMenu(title, options, current, callback) {
  return(
    <div>
      <span className="text-minor">{title} </span>
      <select
        onChange={e => callback(e)}
      >
        {/* fill the dropdown box with the values from the race list */}
        {options.map((e, i) => (
          <option
            value={e}
            selected={(current === e) ? "selected" : ""}
          >
            {capitalize(e)}
          </option>
        ))}
      </select>
    </div>
  );
}