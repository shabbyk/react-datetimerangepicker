import React from "react";
import "./App.css";
import Calendar from "./components/Calendar/Index";
import Week from "./components/Week/Index";

function App() {
  return (
    <div className="App">
      <input type="text" name="dates" className="" />
      <Calendar month={5} year={2022} />
    </div>
  );
}

export default App;
