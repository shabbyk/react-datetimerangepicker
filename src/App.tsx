import React, { useEffect, useRef, useState } from "react";

import { DateTime } from "luxon";

import "./App.css";
import CalendarLayout from "./components/CalendarLayout/Index";

function App() {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <div className="date-range-picker">
      <input
        type="text"
        name="dates"
        className=""
        onFocus={(e) => setShowPopup(true)}
      />
      {showPopup && <CalendarLayout closeFn={setShowPopup} />}
    </div>
  );
}

export default App;
