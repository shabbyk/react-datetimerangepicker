import React, { useState } from "react";

import { DateTime } from "luxon";

import "./ReactDateTimeRangePicker.css";
import CalendarLayout from "./components/CalendarLayout/Index";

type ReactDateTimeRangePickerProps = {
  dateFormat: string;
  width: number;
  dateRangePicker: boolean;
};

function ReactDateTimeRangePicker(props: ReactDateTimeRangePickerProps) {
  const [showPopup, setShowPopup] = useState(false);
  const [selectedDate, setDate] = useState(DateTime.now());
  return (
    <div className="rdtrp-container">
      <input
        type="text"
        name="dates"
        className=""
        title="left-calendar-input"
        placeholder="selected date..."
        value={selectedDate.toFormat(props.dateFormat)}
        onFocus={(e) => setShowPopup(true)}
        style={{ width: props.width }}
      />
      {
        showPopup &&
        <div className="calendar-popup">
          <CalendarLayout
            closeFn={setShowPopup}
            width={props.width}
            selectedDate={selectedDate}
            setDate={setDate}
          />
        </div>
      }
    </div>
  );
}

export default ReactDateTimeRangePicker;
