import React from "react";
import { CalendarControlProps } from "../../../types/CalendarControlProps";
import "./CalendarControlLeft.css";

function CalendarControlLeft(props: CalendarControlProps) {
  return (
    <div className="left-control-container">
      <div className="left" onClick={() => props.decreaseMonth!()}></div>
      <div className="centre">
        {props.monthName}/{props.year}
      </div>
    </div>
  );
}

export default CalendarControlLeft;
