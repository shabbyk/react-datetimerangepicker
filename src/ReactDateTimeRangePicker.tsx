import React, { useState } from "react";

import { DateTime } from "luxon";

import "./ReactDateTimeRangePicker.css";
import CalendarLayout from "./components/CalendarLayout/Index";

type ReactDateTimeRangePickerProps = {
  dateFormat: string;
  width: number;
  dateRangePicker: boolean;
  selectedDate: DateTime;
};

function ReactDateTimeRangePicker(props: ReactDateTimeRangePickerProps) {
  const [showPopup, setShowPopup] = useState(false);
  const [selectedRange, setSelectedRangeDisplay] = useState<string | undefined>();
  return (
    <div className="rdtrp-container">
      <input
        type="text"
        name="dates"
        className="selection-display"
        placeholder="selected date..."
        value={selectedRange}
        onFocus={(e) => setShowPopup(true)}
      />
      {
        showPopup &&
        <div className="calendar-popup">
          <CalendarLayout
            dateFormat={props.dateFormat}
            closeFn={setShowPopup}
            width={props.width}
            selectedDate={props.selectedDate}
            setSelectedRangeDisplay={setSelectedRangeDisplay}
          />
        </div>
      }
    </div>
  );
}

export default ReactDateTimeRangePicker;
