import React, { useState } from "react";
import { DateTime } from "luxon";
import ReactDateTimeRangePicker from "./ReactDateTimeRangePicker";
import { SelectedRange } from "./types/SelectedRange";

function App() {
  const [startDate, setStartDate] = useState(DateTime.now());
  const [selectedRange, setSelectedRange] = useState<SelectedRange>();

  return (
    <>
      <ReactDateTimeRangePicker
        dateFormat="dd/MM/yyyy hh:mm:ss"
        width={200}
        selectedDate={startDate}
        onChange={setSelectedRange}
        dateRangePicker
      />
      <div className="capture-panel">
        {selectedRange &&
          `${selectedRange?.startDate.toFormat(
            "dd/MM/yyyy hh:mm:ss"
          )}-${selectedRange?.endDate?.toFormat("dd/MM/yyyy hh:mm:ss")}`}
      </div>
    </>
  );
}

export default App;
