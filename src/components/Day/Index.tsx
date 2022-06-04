import React, { useRef } from "react";
import { DateTime } from "luxon";
import "./Day.css";

type DayProp = {
  dayNumber: number;
};

function onKeyDown() {}

function onClick() {}

function onMouseEnter() {}

function dayContent(dayNumber: number) {
  return <div>{DateTime.now().plus({ day: dayNumber }).day}</div>;
}

function Day(props: DayProp) {
  const eleRef = useRef(null);

  return (
    <div
      ref={eleRef}
      className={""}
      onKeyDown={onKeyDown}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
    >
      {dayContent(props.dayNumber)}
    </div>
  );
}

export default Day;
