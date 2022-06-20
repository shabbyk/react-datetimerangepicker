import React from "react";

import { DateTime } from "luxon";

import "./Calendar.css";
import Month from "../Month/Index";
import { HoverProps } from "../../types/HoverProps";

type CalendarProps = {
  month: number;
  year: number;
  selectedDate?: DateTime;
  startDate: DateTime;
  endDate?: DateTime;
  hoverProps: HoverProps;
  setHoverProps: (hoverProps: HoverProps) => any;
  selectDateRange: (startDate: DateTime, endDate?: DateTime) => any;
};

function Calendar(props: CalendarProps) {
  return (
    <Month
      key={props.selectedDate?.month}
      month={props.month}
      year={props.year}
      selectedDate={props.selectedDate}
      startDate={props.startDate.startOf("day")}
      endDate={props.endDate ? props.endDate.startOf("day") : undefined}
      selectDateRange={props.selectDateRange}
      hoverProps={props.hoverProps}
      setHoverProps={props.setHoverProps}
    />
  );
}

export default Calendar;
