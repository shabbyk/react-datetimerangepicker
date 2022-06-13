import React from "react";

import { DateTime } from "luxon";

import HourPicker from "./HoursPicker/Index";
import MinutesPicker from "./MinutesPicker/Index";
import SecondsPicker from "./SecondsPicker/Index";

type TimePickerProps = {
  selectedHour: number;
  selectedMinute: number;
  selectedSecond: number;
  setDate: (date: DateTime) => any;
};

function TimePicker(props: TimePickerProps) {
  function setHour(hour: number) {}

  function setMinute(min: number) {}

  function setSecond(sec: number) {}
  return (
    <div className="timepicker">
      <HourPicker is24Format selected={props.selectedHour} setHour={setHour} />
      <MinutesPicker
        increment={1}
        selected={props.selectedMinute}
        setMinute={setMinute}
      />
      <SecondsPicker selected={props.selectedSecond} setSecond={setSecond} />
    </div>
  );
}

export default TimePicker;
