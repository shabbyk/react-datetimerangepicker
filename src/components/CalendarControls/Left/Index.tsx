import React from "react";
import { CalendarControlProps } from "../../../types/CalendarControlProps";

function CalendarControlLeft(props: CalendarControlProps) {
  return (
    <>
      <div className="left" onClick={() => props.decreaseMonth()}></div>
      <div className="centre">
        {props.monthName}/{props.year}
      </div>
    </>
  );
}

export default CalendarControlLeft;
