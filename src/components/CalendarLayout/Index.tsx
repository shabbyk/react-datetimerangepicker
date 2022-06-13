import { useEffect, useRef, useState } from "react";

import { DateTime } from "luxon";

import Calendar from "../Calendar/Index";
import CalendarControls from "../CalendarControls/Index";
import TimePicker from "../TimePicker/Index";

type CalendarLayoutProps = {
  width: number;
  selectedDate: DateTime;
  closeFn: (show: boolean) => any;
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
        selectedDate={selectedDate}
        selectDate={setSelectedDate}
      />
      <TimePicker selectedHour={props.selectedDate.hour} selectedMinute={props.selectedDate.minute} selectedSecond={props.selectedDate.second} />
    </div>
  );
}

export default CalendarLayout;
