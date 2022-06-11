import React, { useRef, useState } from "react";

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
  const [hoveringOverMonth, setMonthHover] = useState(false);
  const [currentHoverDay, setCurrentHoverDay] = useState();

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
        hoveringOverMonth={hoveringOverMonth}
        selectDate={props.selectDate}
      />
    );
  }

  function handleHoverOn(e: any) {
    setMonthHover(true);
    // console.log(e);
    e.stopPropagation();
  }

  function handleHoverOff(e: any) {
    setMonthHover(false);
    // console.log(e);
    e.stopPropagation();
  }

  return (
    <div
      className="month"
      onMouseEnter={handleHoverOn}
      onMouseLeave={handleHoverOff}
    >
      {monthTemplate}
    </div>
  );
}

export default Month;
