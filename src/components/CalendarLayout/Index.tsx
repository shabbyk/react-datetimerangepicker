import { useEffect, useRef, useState } from "react";

import { DateTime } from "luxon";

import Calendar from "../Calendar/Index";
import CalendarControls from "../CalendarControls/Index";
import TimePicker from "../TimePicker/Index";

type CalendarLayoutProps = {
  closeFn: (show: boolean) => any;
};

function init() {
  return {
    year: +DateTime.now().toFormat("yyyy"),
    month: +DateTime.now().toFormat("MM"),
    monthName: DateTime.now().monthShort,
  };
}

function handleOutsideClick(ref: any, e: any, closeFn: (show: boolean) => any) {
  debugger;
  if (ref.current && !ref.current.contains(e.target)) {
    closeFn(false);
  }
}

function CalendarLayout(props: CalendarLayoutProps) {
  const [currDateDetails, setCurrDate] = useState(init());
  const [selectedDate, setSelectedDate] = useState(
    DateTime.now().startOf("day")
  );
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
      ref={appRef}
      style={{
        width: 200,
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
        selectedDate={selectedDate}
        selectDate={setSelectedDate}
      />
      <TimePicker />
    </div>
  );
}

export default CalendarLayout;
