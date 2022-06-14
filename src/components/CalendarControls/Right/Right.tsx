import React from "react";
import { CalendarControlProps } from "../../../types/CalendarControlProps";

function CalendarControlRight(props: CalendarControlProps) {
  return (
    <>
      <div className="right" onClick={() => props.increaseMonth()}></div>
      <div className="centre">
        {props.monthName}/{props.year}
      </div>
    </>
  );
}

export default CalendarControlRight;
