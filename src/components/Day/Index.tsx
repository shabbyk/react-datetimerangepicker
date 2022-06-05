import React, { MouseEventHandler, useRef, useState } from "react";
import { DateTime } from "luxon";
import "./Day.css";

type DayProps = {
  date: DateTime;
  currMonth: number;
  selectedDate: DateTime;
  selectDate: (date: DateTime) => any;
};

function getClassName(
  currElDate: DateTime,
  currMonth: number,
  selectedDate: DateTime,
  inRange: boolean
) {
  var classNameString = "date-cell";

  if (currElDate.month != currMonth) {
    classNameString += " ends";
  }

  if (inRange) {
    classNameString += " in-range";
  }

  if (currElDate.toMillis() == selectedDate.toMillis()) {
    classNameString += " start-date";
  } else if (currElDate.toMillis() > selectedDate.toMillis()) {
    classNameString += " in-select-range";
  } else {
    classNameString += " default-hover";
  }

  return classNameString;
}

function dayContent(date: DateTime) {
  return date.toFormat("dd");
}

function handleClick(e: any, props: DayProps) {
  if (props.date.month == props.currMonth) {
    props.selectDate(props.date.startOf("day"));
  }
  e.stopPropagation();
}

function handleMouseEvents(
  e: any,
  props: DayProps,
  setState: (value: boolean) => any
) {
  if (props.date.toMillis() > props.selectedDate.toMillis()) {
    setState(true);
  } else {
    setState(false);
  }
  e.stopPropagation();
}

function Day(props: DayProps) {
  const [inRange, isInRange] = useState(false);
  return (
    <div
      className={getClassName(
        props.date,
        props.currMonth,
        props.selectedDate,
        inRange
      )}
      onClick={(e) => handleClick(e, props)}
      onMouseEnter={(e) => handleMouseEvents(e, props, isInRange)}
      onMouseLeave={(e) => handleMouseEvents(e, props, isInRange)}
    >
      {dayContent(props.date)}
    </div>
  );
}

export default Day;
