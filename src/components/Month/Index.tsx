import React, { useRef } from "react";

import { DateTime } from "luxon";
import "./Month.css";

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

  return <></>;
}

export default Month;
