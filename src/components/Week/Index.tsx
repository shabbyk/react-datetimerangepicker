import React, { useRef } from "react";
import Day from "../Day/Index";
import "./Week.css";

const weekDays = [1, 2, 3, 4, 5];
const weekEnds = [0, 6];
const weekInNumbers = [weekEnds[0], ...weekDays, weekEnds[1]];

function Week() {
  const eleRef = useRef(null);

  return (
    <div ref={eleRef}>
      {weekInNumbers.map((value) => {
        return <Day dayNumber={value} />;
      })}
    </div>
  );
}

export default Week;
