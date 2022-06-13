import React, { useRef } from "react";

import { DateTime } from "luxon";
import "./CalendarControls.css";

type CalendarProps = {
  monthName: string;
  month: number;
  year: number;
  navigate: ({year}: any) => any;
};

function increaseMonth(
  month: number,
  year: number,
  callback: ({year}: any) => any
) {
  var changedDate = DateTime.fromObject({ year: year, month: month });
  changedDate = changedDate.plus({ month: 1 });
  callback({
    year: +changedDate.toFormat("yyyy"),
    month: +changedDate.toFormat("MM"),
    monthName: changedDate.monthShort,
  });
}

function decreaseMonth(
  month: number,
  year: number,
  callback: ({year}: any) => any
) {
  var changedDate = DateTime.fromObject({ year: year, month: month });
  changedDate = changedDate.minus({ month: 1 });
  callback({
    year: +changedDate.toFormat("yyyy"),
    month: +changedDate.toFormat("MM"),
    monthName: changedDate.monthShort,
  });
}

function CalendarControls(props: CalendarProps) {
  return (
    <div className="top-control-container">
      <div
        className="left"
        onClick={() => decreaseMonth(props.month, props.year, props.navigate)}
      ></div>
      <div className="centre">
        {props.monthName}/{props.year}
      </div>
      <div
        className="right"
        onClick={() => increaseMonth(props.month, props.year, props.navigate)}
      ></div>
    </div>
  );
}

export default CalendarControls;
