import React from "react";

import { DateTime } from "luxon";

import "./Calendar.css";
import Month from "../Month/Index";

type CalendarProps = {
  month: number;
  year: number;
  selectedDate: DateTime;
  startDate: DateTime;
  endDate: DateTime;
  selectDate: (val: DateTime) => any;
};

function Calendar(props: CalendarProps) {
  return (
    <Month
      month={props.month}
      year={props.year}
      selectedDate={props.selectedDate}
      startDate={props.startDate.startOf("day")}
      endDate={props.endDate.startOf("day")}
      selectDate={props.selectDate}
    />
  );
}

export default Calendar;
