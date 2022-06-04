import React, { useRef } from "react";

import { DateTime } from "luxon";
import "./Month.css";
import Week from "../Week/Index";

type MonthProps = {
  month: number;
  year: number;
  selectedDate: DateTime;
  selectDate: (date: DateTime) => any;
};

function Month(props: MonthProps) {
  const eleRef = useRef(null);

  var calenderObj = DateTime.fromObject({
    year: props.year,
    month: props.month,
  });

  let dayOfWeek = calenderObj.startOf("month").weekday;

  var monthTemplate = [];
  for (var i = 1; i <= 6; i++) {
    monthTemplate.push(
      <Week
        weekNumber={i}
        dayOffset={dayOfWeek}
        month={props.month}
        year={props.year}
        selectedDate={props.selectedDate}
        selectDate={props.selectDate}
      />
    );
  }

  return <div className="month">{monthTemplate}</div>;
}

export default Month;
