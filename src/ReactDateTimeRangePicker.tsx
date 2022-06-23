import React, { useState } from "react";

import { DateTime } from "luxon";

import "./ReactDateTimeRangePicker.css";
import CalendarLayout from "./components/CalendarLayout/Index";
import DisplayPanel from "./components/DisplayPanel/Index";
import { SelectedRange } from "./types/SelectedRange";

type ReactDateTimeRangePickerProps = {
  dateFormat: string;
  width: number;
  dateRangePicker: boolean;
  selectedDate: DateTime;
  onChange: (dateTimeRange: SelectedRange) => any;
};

function ReactDateTimeRangePicker(props: ReactDateTimeRangePickerProps) {
  const [showPopup, setShowPopup] = useState(false);
  const [selectedRange, setSelectedRange] = useState<SelectedRange>();

  function onRangeChange(range: SelectedRange) {
    setSelectedRange(range);
    props.onChange(range);
  }

  return (
    <div className="rdtrp-container">
      <DisplayPanel
        selectedRange={selectedRange}
        setShowPopup={setShowPopup}
        selectedDate={props.selectedDate}
        dateFormat={props.dateFormat}
      />
      {showPopup && (
        <div className="calendar-popup">
          <CalendarLayout
            dateFormat={props.dateFormat}
            closeFn={setShowPopup}
            width={props.width}
            selectedDate={props.selectedDate}
            setSelectedRange={onRangeChange}
          />
        </div>
      )}
    </div>
  );
}

export default ReactDateTimeRangePicker;
