import { useEffect, useRef, useState } from "react";

import { DateTime } from "luxon";

import Calendar from "../Calendar/Index";
import TimePicker from "../TimePicker/Index";
import CalendarControlLeft from "../CalendarControls/Left/Index";
import CalendarControlRight from "../CalendarControls/Right/Index";
import "./CalendarLayout.css";

type CalendarLayoutProps = {
  width: number;
  selectedDate: DateTime;
  closeFn: (show: boolean) => any;
  setDate: (date: DateTime) => any;
};

type CalendarLayoutState = {
  currMonth: number;
  leftMonth: number;
  leftMonthName: string;
  leftMonthYear: number;
  rightMonth: number;
  rightMonthName: string;
  rightMonthYear: number;
};

function handleOutsideClick(ref: any, e: any, closeFn: (show: boolean) => any) {
  if (ref.current && !ref.current.contains(e.target)) {
    closeFn(false);
  }
}

function CalendarLayout(props: CalendarLayoutProps) {
  const appRef = useRef(null);
  const [calendarInit, updateLeftCalActivity] = useState({
    currMonth: props.selectedDate.month,
    leftMonth: props.selectedDate.month,
    leftMonthName: props.selectedDate.monthShort,
    leftMonthYear: props.selectedDate.year,
    rightMonth: props.selectedDate.month + 1,
    rightMonthName: props.selectedDate.plus({ month: 1 }).monthShort,
    rightMonthYear: props.selectedDate.plus({ month: 1 }).year,
  } as CalendarLayoutState);

  useEffect(() => {
    document.addEventListener("mousedown", (e) =>
      handleOutsideClick(appRef, e, props.closeFn)
    );
    return () =>
      document.removeEventListener("mousedown", (e) =>
        handleOutsideClick(appRef, e, props.closeFn)
      );
  });

  function increaseMonth() {
    var date = DateTime.fromObject({
      month: calendarInit.rightMonth,
      year: calendarInit.rightMonthYear,
    });
    updateLeftCalActivity({
      ...calendarInit,
      leftMonth: date.month,
      leftMonthName: date.monthShort,
      leftMonthYear: date.year,
      rightMonth: date.plus({ month: 1 }).month,
      rightMonthName: date.plus({ month: 1 }).monthShort,
      rightMonthYear: date.plus({ month: 1 }).year,
    });
  }

  function decreaseMonth() {
    var date = DateTime.fromObject({
      month: calendarInit.leftMonth,
      year: calendarInit.leftMonthYear,
    });
    updateLeftCalActivity({
      ...calendarInit,
      leftMonth: date.minus({ month: 1 }).month,
      leftMonthName: date.minus({ month: 1 }).monthShort,
      leftMonthYear: date.minus({ month: 1 }).year,
      rightMonth: date.month,
      rightMonthName: date.monthShort,
      rightMonthYear: date.year,
    });
  }

  return (
    <div className="calendar-layout" ref={appRef}>
      <div
        className="left-calendar"
        style={{
          width: props.width,
        }}
      >
        <CalendarControlLeft
          decreaseMonth={decreaseMonth}
          monthName={calendarInit.leftMonthName}
          year={calendarInit.leftMonthYear}
        />
        <Calendar
          month={calendarInit.leftMonth}
          year={calendarInit.leftMonthYear}
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
      <div
        className="right-calendar"
        style={{
          width: props.width,
        }}
      >
        <CalendarControlRight
          increaseMonth={increaseMonth}
          monthName={calendarInit.rightMonthName}
          year={calendarInit.rightMonthYear}
        />
        <Calendar
          month={calendarInit.rightMonth}
          year={calendarInit.rightMonthYear}
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
