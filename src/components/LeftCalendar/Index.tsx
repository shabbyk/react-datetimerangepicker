import React, { useState } from "react";

import { DateTime } from "luxon";

import "./LeftCalendar.css";
import CalendarLayout from "../CalendarLayout/Index";

type LeftCalendarProps = {
  dateFormat: string;
  width: number;
};

function LeftCalendar(props: LeftCalendarProps) {
  const [showPopup, setShowPopup] = useState(false);
  const [selectedDate, setDate] = useState(DateTime.now());

  return (
    <div className="left-calendar">
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

export default LeftCalendar;
