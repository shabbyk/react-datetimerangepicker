import React from "react";
import { CalendarControlProps } from "../../../types/CalendarControlProps";
import "./CalendarControlRight.css";

function CalendarControlRight(props: CalendarControlProps) {
  return (
    <div className="right-control-container">
      <div className="centre">
        <span className="month-name">{props.monthName}</span>
        <span className="year-name">{props.year}</span>
      </div>
      <div className="right" onClick={() => props.increaseMonth!()}></div>
    </div>
  );
}

export default CalendarControlRight;
