import React, { useRef } from "react";

import { DateTime } from "luxon";
import "./Week.css";

type WeekProps = {
  dayOffset: number;
  weekNumber: number;
  year: number;
  month: number;
};

function Week(props: WeekProps) {
  const eleRef = useRef(null);

  var weekStartDate = DateTime.fromObject({
    year: props.year,
    month: props.month,
  });

  if (props.weekNumber == 1) {
    weekStartDate = weekStartDate.minus({ days: props.dayOffset });
  } else {
    weekStartDate = weekStartDate.plus({
      days: (props.weekNumber - 1) * 7 + 1,
    });
  }

  var weekTemplate = [weekStartDate];
  for (var i = 1; i < 7; i++) {
    weekTemplate.push(weekTemplate[i - 1].plus({ hour: 24 }));
  }

  return (
    <div className="week">
      {weekTemplate.map((el) => (
        <div className="date-cell">{el.toFormat("dd")}</div>
      ))}
    </div>
  );
}

export default Week;
