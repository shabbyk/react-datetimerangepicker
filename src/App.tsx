import React from "react";
import "./App.css";
import Week from "./components/Week/Index";

function App() {
  return (
    <div className="App">
      <input type="text" name="dates" className="" />
      <Week />
    </div>
  );
}

export default App;
