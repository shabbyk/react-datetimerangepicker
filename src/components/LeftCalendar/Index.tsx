import React, { useState } from "react";

import { DateTime } from "luxon";

import "./LeftCalendar.css";
import CalendarLayout from "../CalendarLayout/Index";

type AppProps = {
  dateFormat: string;
};

function LeftCalendar(props: AppProps) {
  const [showPopup, setShowPopup] = useState(false);
  const [selectedDate, setSelectedDate] = useState(DateTime.now());

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
      />
      {showPopup && <CalendarLayout closeFn={setShowPopup} width={200} selectedDate={selectedDate}/>}
    </div>
  );
}

export default LeftCalendar;
