import React, { useRef } from "react";

import { DateTime } from "luxon";
import "./Calendar.css";
import Month from "../Month/Index";
import CalendarControls from "../CalendarControls/Index";

type CalendarProps = {
  month: number;
  year: number;
};

function Calendar(props: CalendarProps) {
  return <Month month={props.month} year={props.year} />;
}

export default Calendar;
