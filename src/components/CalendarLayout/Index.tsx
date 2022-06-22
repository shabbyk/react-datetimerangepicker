import { useEffect, useRef, useState } from "react";

import { DateTime } from "luxon";

import Calendar from "../Calendar/Index";
import TimePicker from "../TimePicker/Index";
import CalendarControlLeft from "../CalendarControls/Left/Index";
import CalendarControlRight from "../CalendarControls/Right/Index";
import "./CalendarLayout.css";
import { HoverProps } from "../../types/HoverProps";
import SelectionPanel from "../SelectionPanel/Index";
import { SelectedRange } from "../../types/SelectedRange";

type CalendarLayoutProps = {
  width: number;
  selectedDate: DateTime;
  dateFormat: string;
  setSelectedRange: (range: SelectedRange) => any;
  closeFn: (show: boolean) => any;
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
  const [startDate, setStartDate] = useState<DateTime>(
    props.selectedDate.minus({ days: 1 })
  );
  const [endDate, setEndDate] = useState<DateTime | undefined>(
    props.selectedDate.plus({ days: 1 })
  );
  const [hoverProps, setHoverProps] = useState({
    hovering: false,
  } as HoverProps);

  useEffect(() => {
    document.addEventListener("mousedown", (e) =>
      handleOutsideClick(appRef, e, props.closeFn)
    );
    return () =>
      document.removeEventListener("mousedown", (e) =>
        handleOutsideClick(appRef, e, props.closeFn)
      );
  });

  function setDateRange(startDate: DateTime, endDate?: DateTime) {
    setStartDate(startDate);
    setEndDate(endDate);
  }

  function applySelectedDateRange(startDate: DateTime, endDate: DateTime) {
    props.setSelectedRange({
      startDate: startDate,
      endDate: endDate
    });
  }

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
      className="calendar-layout"
      ref={appRef}
      onMouseOver={handleHoverOn}
      onMouseOut={handleHoverOff}
    >
      <div className="calendars">
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
            selectedDate={startDate!.startOf("day")}
            startDate={startDate!.startOf("day")}
            endDate={endDate ? endDate.startOf("day") : undefined}
            hoverProps={hoverProps}
            setHoverProps={setHoverProps}
            selectDateRange={setDateRange}
          />
          <TimePicker
            selectedDate={startDate!}
            selectedHour={startDate!.hour}
            selectedMinute={startDate!.minute}
            selectedSecond={startDate!.second}
            setDate={setStartDate}
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
            selectedDate={endDate ? endDate.startOf("day") : undefined}
            startDate={startDate!.startOf("day")}
            endDate={endDate ? endDate.startOf("day") : undefined}
            hoverProps={hoverProps}
            setHoverProps={setHoverProps}
            selectDateRange={setDateRange}
          />
          <TimePicker
            selectedDate={endDate}
            selectedHour={endDate ? endDate.hour : 12}
            selectedMinute={endDate ? endDate.minute : 0}
            selectedSecond={endDate ? endDate.second : 0}
            setDate={setEndDate}
          />
        </div>
      </div>
      <div className="selection-panel-container">
        <SelectionPanel 
          startDate={startDate} 
          endDate={endDate} 
          format={props.dateFormat} 
          applyDateRange={applySelectedDateRange}
          closeFn={props.closeFn}
          />
      </div>
    </div>
  );
}

export default CalendarLayout;
