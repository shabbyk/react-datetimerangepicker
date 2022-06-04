import { DateTime } from "luxon";
import React, { useRef } from "react";
import Day from "../Day/Index";
import "./Week.css";

type WeekProps = {
  weekStartDate: DateTime;
  weekNumber: number;
};

function Week(props: WeekProps) {
  const eleRef = useRef(null);
  var weekTemplate = [props.weekStartDate];
  for (var i = 1; i < 7; i++) {
    weekTemplate.push(weekTemplate[i - 1].plus({ hour: 24 }));
  }

  return (
    <>
      {weekTemplate.map((el) => (
        <div>{el.day}</div>
      ))}
    </>
  );
}

export default Week;
