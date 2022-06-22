import React from "react";

import { DateTime } from "luxon";

type SecondsPickerProps = {
  selected: number;
  setSecond: (sec: number) => any;
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
      <select
        defaultValue={props.selected}
        onChange={(e) => props.setSecond(+e.target.value)}
      >
        {options}
      </select>
    </div>
  );
}

export default SecondsPicker;
