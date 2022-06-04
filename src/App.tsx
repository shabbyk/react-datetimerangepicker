import { DateTime } from "luxon";
import React from "react";

import "./App.css";
import CalendarControls from "./components/Calendar-controls/Index";
import Calendar from "./components/Calendar/Index";

function init() {
  return {
    year: +DateTime.now().toFormat("yyyy"),
    month: +DateTime.now().toFormat("MM"),
    monthName: DateTime.now().monthShort,
  };
}

function App() {
  var initVals = init();
  return (
    <div className="App">
      <input type="text" name="dates" className="" />
      <CalendarControls
        month={initVals.month}
        year={initVals.year}
        monthName={initVals.monthName}
      />
      <Calendar month={initVals.month} year={initVals.year} />
    </div>
  );
}

export default App;
