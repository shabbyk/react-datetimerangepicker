import React from "react";

import "./ReactDateTimeRangePicker.css";
import LeftCalendar from "./components/LeftCalendar/Index";
import RightCalendar from "./components/RightCalendar/Index";

type ReactDateTimeRangePickerProps = {
  dateFormat: string;
  width: number;
};

function ReactDateTimeRangePicker(props: ReactDateTimeRangePickerProps) {

  return (
    <div className="rdtrp-container">
      <LeftCalendar dateFormat={props.dateFormat} width={props.width}/>
      <RightCalendar dateFormat={props.dateFormat} width={props.width}/>
    </div>
  );
}

export default ReactDateTimeRangePicker;
