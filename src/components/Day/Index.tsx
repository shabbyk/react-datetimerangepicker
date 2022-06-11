import React, { MouseEventHandler, useRef, useState } from "react";
import { DateTime } from "luxon";
import "./Day.css";

type DayProps = {
  date: DateTime;
  currMonth: number;
  selectedDate: DateTime;
  hoveringOverMonth: boolean;
  selectDate: (date: DateTime) => any;
};

function getClassName(
  currElDate: DateTime,
  currMonth: number,
  selectedDate: DateTime
): string {
  var classNameString = "date-cell";

  if (currElDate.month != currMonth) {
    classNameString += " ends";
  }

  if (currElDate.toMillis() == selectedDate.toMillis()) {
    classNameString += " start-date";
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

function handleHoverOn(
  e: any,
  props: DayProps,
  setInrange: (value: boolean) => any
) {
  if (props.date.toMillis() > props.selectedDate.toMillis()) {
    setInrange(true);
  } else {
    setInrange(false);
  }
}

function Day(props: DayProps) {
  const [inRange, isInRange] = useState(false);
  let classes = getClassName(props.date, props.currMonth, props.selectedDate);

  if (props.hoveringOverMonth) {
  }

  return (
    <div
      className={classes}
      onClick={(e) => handleClick(e, props)}
      onMouseEnter={(e) => handleHoverOn(e, props, isInRange)}
      onMouseLeave={(e) => handleHoverOff(e, props, isInRange)}
    >
      {dayContent(props.date)}
    </div>
  );
}

export default Day;
