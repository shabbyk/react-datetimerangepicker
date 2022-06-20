import * as React from "react";

import { DateTime } from "luxon";

type MinutesPickerProps = {
  increment: number;
  selected: number;
  setMinute: (min: number) => any;
};

function MinutesPicker(props: MinutesPickerProps) {
  let options = [];
  for (var i = 0; i < 60; i += props.increment) {
    options.push(
      <option key={i} value={i}>
        {i}
      </option>
    );
  }
  return (
    <div className="minutes-picker-container">
      <select
        defaultValue={props.selected}
        onChange={(e) => props.setMinute(+e.target.value)}
      >
        {options}
      </select>
    </div>
  );
}

export default MinutesPicker;
