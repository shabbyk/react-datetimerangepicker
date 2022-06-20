import React, { useState } from "react";

import { DateTime } from "luxon";

import "./Month.css";
import Week from "../Week/Index";
import { HoverProps } from "../../types/HoverProps";

type MonthProps = {
  month: number;
  year: number;
  selectedDate?: DateTime;
  startDate: DateTime;
  endDate?: DateTime;
  selectDateRange: (startDate: DateTime, endDate?: DateTime) => any;
};

function Month(props: MonthProps) {
  const [hoverProps, setHoverProps] = useState({
    hovering: false,
  } as HoverProps);

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
        startDate={props.startDate.startOf("day")}
        endDate={props.endDate ? props.endDate.startOf("day") : undefined}
        hoverProps={hoverProps}
        selectDateRange={props.selectDateRange}
      />
    );
  }

  function handleHoverOn(e: any) {
    if (e.target.dataset.isfiller === "true") return;

    setHoverProps({
      hovering: true,
      date: DateTime.fromISO(e.target.dataset.date),
    });

    e.stopPropagation();
  }

  function handleHoverOff(e: any) {
    if (e.target.dataset.isfiller === "true") return;

    setHoverProps({
      hovering: false,
    });

    e.stopPropagation();
  }

  return (
    <div
      className="month"
      onMouseOver={handleHoverOn}
      onMouseOut={handleHoverOff}
    >
      {monthTemplate}
    </div>
  );
}

export default Month;
