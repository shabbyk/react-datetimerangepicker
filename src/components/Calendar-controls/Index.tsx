import React, { useRef } from "react";

import { DateTime } from "luxon";
import "./Calendar-controls.css";

type CalendarProps = {
  monthName: string;
  month: number;
  year: number;
};

function CalendarControls(props: CalendarProps) {
  const eleRef = useRef(null);
  return (
    <div className="top-control-container">
      <div className="left"></div>
      <div className="centre">
        {props.monthName}/{props.year}
      </div>
      <div className="right"></div>
    </div>
  );
}

export default CalendarControls;
