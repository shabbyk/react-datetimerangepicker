import React, { useState } from "react";

import { DateTime } from "luxon";

import "./RightCalendar.css";
import CalendarLayout from "../CalendarLayout/Index";

type RightCalendarProps = {
  dateFormat: string;
  width: number;
};

function RightCalendar(props: RightCalendarProps) {
  const [showPopup, setShowPopup] = useState(false);
  const [selectedDate, setDate] = useState(DateTime.now());

  return (
    <div className="right-calendar">
      <input
        type="text"
        name="dates"
        className=""
        title="right-calendar-input"
        placeholder="selected date..."
        style={{ width: props.width }}
        value={selectedDate.toFormat(props.dateFormat)}
        onFocus={(e) => setShowPopup(true)}
      />
      {showPopup && (
        <CalendarLayout
          closeFn={setShowPopup}
          width={props.width}
          selectedDate={selectedDate}
          setDate={setDate}
        />
      )}
    </div>
  );
}

export default RightCalendar;
