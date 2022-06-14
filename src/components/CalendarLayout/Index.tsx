import { useEffect, useRef, useState } from "react";

import { DateTime } from "luxon";

import Calendar from "../Calendar/Index";
import CalendarControls from "../CalendarControls/Index";
import TimePicker from "../TimePicker/Index";

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
  const [currDateDetails, setCurrDate] = useState({
    year: +props.selectedDate.toFormat("yyyy"),
    month: +props.selectedDate.toFormat("MM"),
    monthName: props.selectedDate.monthShort,
  });
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
      <CalendarControls
        month={currDateDetails.month}
        year={currDateDetails.year}
        monthName={currDateDetails.monthName}
        navigate={setCurrDate}
      />
      <Calendar
        month={currDateDetails.month}
        year={currDateDetails.year}
        selectedDate={props.selectedDate.startOf("day")}
        selectDate={props.setDate}
      />
      <TimePicker
        selectedHour={props.selectedDate.hour}
        selectedMinute={props.selectedDate.minute}
        selectedSecond={props.selectedDate.second}
        setDate={props.setDate}
      />
    </div>
  );
}

export default CalendarLayout;
