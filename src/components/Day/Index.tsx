import React, { useRef } from "react";
import { DateTime } from "luxon";
import "./Day.css";

type DayProp = {
  date: DateTime;
  selectedDate: DateTime;
  selectDate: (date: DateTime) => any;
};

function getClassName(currElDate: DateTime, selectedDate: DateTime) {
  var classNameString = "date-cell";

  if (+currElDate.toFormat("dd") == 4) {
    debugger;
  }

  if (currElDate.toMillis() == selectedDate.toMillis()) {
    classNameString += " selected-date";
  }

  return classNameString;
}

function dayContent(date: DateTime) {
  return date.toFormat("dd");
}

function Day(props: DayProp) {
  return (
    <div
      className={getClassName(props.date, props.selectedDate)}
      onClick={(e) => {
        props.selectDate(props.date.startOf("day"));
        e.stopPropagation();
      }}
    >
      {dayContent(props.date)}
    </div>
  );
}

export default Day;
