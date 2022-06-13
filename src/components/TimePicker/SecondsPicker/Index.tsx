import React from "react";

import { DateTime } from "luxon";

type SecondsPickerProps = {
  selected: number;
  setDate: (date: DateTime) => any;
};

function SecondsPicker(props: SecondsPickerProps) {
  let options = [];
  for (var i = 0; i < 60; i++) {
    options.push(
      <option key={i} value={i}>
        {i}
      </option>
    );
  }
  return (
    <div className="seconds-picker-container">
      <label>ss:</label>
      <select defaultValue={props.selected}>{options}</select>
    </div>
  );
}

export default SecondsPicker;
