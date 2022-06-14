import React from "react";
import { CalendarControlProps } from "../../../types/CalendarControlProps";
import "./CalendarControlRight.css";

function CalendarControlRight(props: CalendarControlProps) {
  return (
    <div className="right-control-container">
      <div className="centre">
        {props.monthName}/{props.year}
      </div>
      <div className="right" onClick={() => props.increaseMonth!()}></div>
    </div>
  );
}

export default CalendarControlRight;
