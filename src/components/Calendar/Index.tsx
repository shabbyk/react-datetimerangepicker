import React, { useRef } from "react";

import { DateTime } from "luxon";
import "./Calendar.css";

type CalendarProps = {
  month: number;
  year: number;
  hour: number;
  minute: number;
  second: number;
};

function Calendar(props: CalendarProps) {
  const eleRef = useRef(null);
  var calenderObj = DateTime.fromObject({
    year: props.year,
    month: props.month,
  });
  let calendarState = {
    daysInMonth: calenderObj.daysInMonth,
    firstDay: calenderObj.startOf("month"),
    lastDay: calenderObj.endOf("month"),
    lastMonth: calenderObj.minus({ month: 1 }).month,
    lastYear: calenderObj.minus({ year: 1 }).year,
    daysInLastMonth: calenderObj.minus({ year: 1, month: 1 }).daysInMonth,
    dayOfWeek: calenderObj.startOf("month").day,
  };

  return <div ref={eleRef}></div>;
}

export default Calendar;
