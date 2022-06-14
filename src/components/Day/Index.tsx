import React from "react";

import { DateTime } from "luxon";

import "./Day.css";
import { HoverProps } from "../../types/HoverProps";

type DayProps = {
  date: DateTime;
  currMonth: number;
  selectedDate: DateTime;
  hoverProps: HoverProps;
  selectDate: (date: DateTime) => any;
};

function getClassName(
  currElDate: DateTime,
  currMonth: number,
  selectedDate: DateTime
): string {
  var classNameString = "date-cell";

  if (currElDate.month !== currMonth) {
    classNameString += " filler-date";
  }

  if (currElDate.toMillis() === selectedDate.toMillis()) {
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
  if (props.date.month === props.currMonth) {
    props.selectDate(props.date.startOf("day"));
  }
  e.stopPropagation();
}

function Day(props: DayProps) {
  let classes = getClassName(props.date, props.currMonth, props.selectedDate);

  if (props.hoverProps.hovering && props.hoverProps.date) {
    if (
      props.date.toMillis() > props.selectedDate.toMillis() &&
      props.date.toMillis() < props.hoverProps.date.toMillis()
    ) {
      classes += " in-range";
    }
  }

  return (
    <div
      className={classes}
      data-date={props.date.toISO()}
      data-isfiller={props.date.month !== props.currMonth}
      onClick={(e) => handleClick(e, props)}
    >
      {dayContent(props.date)}
    </div>
  );
}

export default Day;
