import React, { useRef } from "react";

import { DateTime } from "luxon";
import "./Calendar.css";
import Month from "../Month/Index";

type CalendarProps = {
  month: number;
  year: number;
};

function Calendar(props: CalendarProps) {
  const eleRef = useRef(null);
  return <Month month={props.month} year={props.year} />;
}

export default Calendar;
