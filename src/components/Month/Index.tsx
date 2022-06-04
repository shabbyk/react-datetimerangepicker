import React, { useRef } from "react";

import { DateTime } from "luxon";
import "./Month.css";
import Week from "../Week/Index";

type MonthProps = {
  month: number;
  year: number;
};

function Month(props: MonthProps) {
  const eleRef = useRef(null);

  var calenderObj = DateTime.fromObject({
    year: props.year,
    month: props.month,
  });

  let daysInCurrMonth = calenderObj.daysInMonth;
  let firstDay = calenderObj.startOf("month");
  let lastDay = calenderObj.endOf("month");
  let lastMonth = calenderObj.minus({ month: 1 }).month;
  let lastYear = calenderObj.minus({ year: 1 }).year; // If curr month is January
  let daysInLastMonth = calenderObj.minus({ year: 1, month: 1 }).daysInMonth;
  let dayOfWeek = calenderObj.startOf("month").day;
  let localFirstDay = DateTime.local().startOf("month").day;

  var startDay = daysInLastMonth - dayOfWeek + localFirstDay + 1;
  if (startDay > daysInLastMonth) startDay -= 7;

  if (dayOfWeek == localFirstDay) startDay = daysInLastMonth - 6;

  var totalWeeks = Math.ceil(
    (daysInCurrMonth + (daysInLastMonth - startDay)) / 7
  );

  var monthTemplate = [];
  for (var i = 1; i <= totalWeeks; i++) {
    monthTemplate.push(<Week weekNumber={i} weekStartDate={DateTime.now()} />);
  }

  return <>{monthTemplate}</>;
}

export default Month;
