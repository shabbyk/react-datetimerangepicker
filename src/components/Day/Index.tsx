import React from "react";

import { DateTime } from "luxon";

import "./Day.css";
import { HoverProps } from "../../types/HoverProps";

type DayProps = {
  date: DateTime;
  currMonth: number;
  selectedDate?: DateTime;
  hoverProps: HoverProps;
  startDate: DateTime;
  endDate?: DateTime;
  selectDateRange: (startDate: DateTime, endDate?: DateTime) => any;
};

function getClassName(
  currElDate: DateTime,
  currMonth: number,
  startDate: DateTime,
  endDate?: DateTime
): string {
  var classNameString = "date-cell";

  if (currElDate.month !== currMonth) {
    classNameString += " filler-date";
  }

  if (
    currElDate.toMillis() === startDate.toMillis() ||
    (endDate && currElDate.toMillis() === endDate.toMillis())
  ) {
    classNameString += " selected-date";
  } else {
    classNameString += " default-hover";
  }

  return classNameString;
}

function dayContent(date: DateTime) {
  return date.toFormat("dd");
}

function handleClick(e: any, props: DayProps) {
  if (
    (props.startDate && props.endDate) ||
    (!props.startDate && !props.endDate)
  ) {
    props.selectDateRange(props.date.startOf("day"), undefined);
  } else if (props.startDate && !props.endDate) {
    if (
      props.date.startOf("day").toMillis() <
      props.startDate.startOf("day").toMillis()
    ) {
      props.selectDateRange(props.date.startOf("day"), undefined);
    } else {
      props.selectDateRange(props.startDate, props.date.startOf("day"));
    }
  }

  e.stopPropagation();
}

function Day(props: DayProps) {
  let classes = getClassName(
    props.date,
    props.currMonth,
    props.startDate,
    props.endDate
  );

  if (+props.date.toFormat("dd") === 22) {
    debugger;
  }

  /*
    If endDate is selected, only highligh selected range.
    Do not highlight on hover.
    If endDate is not selected, show highligh on hover
  */
  if (
    (props.endDate &&
      props.date.toMillis() > props.startDate.toMillis() &&
      props.date.toMillis() < props.endDate.toMillis()) ||
    (!props.endDate &&
      props.hoverProps.hovering &&
      props.date.toMillis() > props.startDate.toMillis() &&
      props.date.toMillis() < props.hoverProps.date!.toMillis())
  ) {
    classes += " in-range";
  }

  return (
    <div
      className={classes}
      data-date={props.date.toISO()}
      data-isfiller={props.date.month !== props.currMonth}
      onClick={(e) =>
        props.date.month === props.currMonth
          ? handleClick(e, props)
          : e.preventDefault()
      }
    >
      {dayContent(props.date)}
    </div>
  );
}

export default Day;
