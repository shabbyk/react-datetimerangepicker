import React, { useRef } from "react";

import { DateTime } from "luxon";
import "./Week.css";
import Day from "../Day/Index";

type WeekProps = {
  dayOffset: number;
  weekNumber: number;
  year: number;
  month: number;
  selectedDate: DateTime;
  selectDate: (date: DateTime) => any;
};

function Week(props: WeekProps) {
  var weekStartDate = DateTime.fromObject({
    year: props.year,
    month: props.month,
  });

  var currMonth = weekStartDate.month;

  if (props.weekNumber > 1) {
    weekStartDate = weekStartDate.plus({
      days: (props.weekNumber - 1) * 7,
    });
  }

  weekStartDate = weekStartDate.minus({ days: props.dayOffset });

  var weekTemplate = [weekStartDate];
  for (var i = 1; i < 7; i++) {
    weekTemplate.push(weekTemplate[i - 1].plus({ hour: 24 }));
  }

  return (
    <div className="week">
      {weekTemplate.map((el) => (
        <Day
          date={el}
          selectDate={props.selectDate}
          selectedDate={props.selectedDate}
          currMonth={currMonth}
        />
      ))}
    </div>
  );
}

export default Week;
