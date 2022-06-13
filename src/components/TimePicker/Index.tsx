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
  return (
    <div className="timepicker">
      <HourPicker
        is24Format
        selected={props.selectedHour}
        setDate={props.setDate}
      />
      <MinutesPicker
        increment={1}
        selected={props.selectedMinute}
        setDate={props.setDate}
      />
      <SecondsPicker selected={props.selectedSecond} setDate={props.setDate} />
    </div>
  );
}

export default TimePicker;
