import React from "react";

import { DateTime } from "luxon";

import HourPicker from "./HoursPicker/Index";
import MinutesPicker from "./MinutesPicker/Index";
import SecondsPicker from "./SecondsPicker/Index";
import "./TimePicker.css";

type TimePickerProps = {
  selectedDate?: DateTime;
  selectedHour: number;
  selectedMinute: number;
  selectedSecond: number;
  setDate: (date: DateTime) => any;
};

function TimePicker(props: TimePickerProps) {
  function setHour(hour: number) {
    props.selectedDate && props.setDate(props.selectedDate.set({ hour: hour }));
  }

  function setMinute(min: number) {
    props.selectedDate &&
      props.setDate(props.selectedDate.set({ minute: min }));
  }

  function setSecond(sec: number) {
    props.selectedDate &&
      props.setDate(props.selectedDate.set({ second: sec }));
  }
  return (
    <div className="timepicker">
      <HourPicker is24Format selected={props.selectedHour} setHour={setHour} />:
      <MinutesPicker
        increment={1}
        selected={props.selectedMinute}
        setMinute={setMinute}
      />
      :
      <SecondsPicker selected={props.selectedSecond} setSecond={setSecond} />
    </div>
  );
}

export default TimePicker;
