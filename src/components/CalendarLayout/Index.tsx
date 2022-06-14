import { useEffect, useRef, useState } from "react";

import { DateTime } from "luxon";

import Calendar from "../Calendar/Index";
import TimePicker from "../TimePicker/Index";
import CalendarControlLeft from "../CalendarControls/Left/Index";
import CalendarControlRight from "../CalendarControls/Right/Right";

type CalendarLayoutProps = {
  width: number;
  selectedDate: DateTime;
  closeFn: (show: boolean) => any;
  setDate: (date: DateTime) => any;
};

function handleOutsideClick(ref: any, e: any, closeFn: (show: boolean) => any) {
  if (ref.current && !ref.current.contains(e.target)) {
    closeFn(false);
  }
}

function CalendarLayout(props: CalendarLayoutProps) {
  const appRef = useRef(null);
  useEffect(() => {
    document.addEventListener("mousedown", (e) =>
      handleOutsideClick(appRef, e, props.closeFn)
    );
    return () =>
      document.removeEventListener("mousedown", (e) =>
        handleOutsideClick(appRef, e, props.closeFn)
      );
  });
  return (
    <div
      className="calendar-layout"
      ref={appRef}
      style={{
        width: props.width,
      }}
    >
      <div className="left-calendar">
        <CalendarControlLeft />
        <Calendar
          month={currDateDetails.month}
          year={currDateDetails.year}
          selectedDate={props.selectedDate.startOf("day")}
          selectDate={props.setDate}
        />
        <TimePicker
          selectedDate={props.selectedDate}
          selectedHour={props.selectedDate.hour}
          selectedMinute={props.selectedDate.minute}
          selectedSecond={props.selectedDate.second}
          setDate={props.setDate}
        />
      </div>
      <div className="right-calendar">
        <CalendarControlRight />
        <Calendar
          month={currDateDetails.month + 1}
          year={currDateDetails.year}
          selectedDate={props.selectedDate.startOf("day")}
          selectDate={props.setDate}
        />
        <TimePicker
          selectedDate={props.selectedDate}
          selectedHour={props.selectedDate.hour}
          selectedMinute={props.selectedDate.minute}
          selectedSecond={props.selectedDate.second}
          setDate={props.setDate}
        />
      </div>
    </div>
  );
}

export default CalendarLayout;
