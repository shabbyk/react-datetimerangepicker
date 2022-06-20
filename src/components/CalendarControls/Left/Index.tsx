import React from "react";
import { CalendarControlProps } from "../../../types/CalendarControlProps";
import "./CalendarControlLeft.css";

function CalendarControlLeft(props: CalendarControlProps) {
  return (
    <div className="left-control-container">
      <div className="left" onClick={() => props.decreaseMonth!()}></div>
      <div className="centre">
        <span className="month-name">{props.monthName}</span>
        <span className="year-name">{props.year}</span>
      </div>
    </div>
  );
}

export default CalendarControlLeft;
