import { DateTime } from "luxon";
import React, { useState } from "react";

import "./App.css";
import CalendarControls from "./components/CalendarControls/Index";
import Calendar from "./components/Calendar/Index";

function init() {
  return {
    year: +DateTime.now().toFormat("yyyy"),
    month: +DateTime.now().toFormat("MM"),
    monthName: DateTime.now().monthShort,
  };
}

function App() {
  const [currDateDetails, setCurrDate] = useState(init());
  const [selectedDate, setSelectedDate] = useState(
    DateTime.now().startOf("day")
  );

  return (
    <div className="App">
      <input type="text" name="dates" className="" />
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
    </div>
  );
}

export default App;
