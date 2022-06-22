import { DateTime } from "luxon";
import React from "react";
import { SelectedRange } from "../../types/SelectedRange";

type DisplayPanelProps = {
  dateFormat: string;
  selectedDate: DateTime;
  selectedRange?: SelectedRange;
  setShowPopup: (show: boolean) => any;
};

function DisplayPanel(props: DisplayPanelProps) {
  function setInputValue() {
    return props.selectedRange
      ? `${props.selectedRange?.startDate.toFormat(
          props.dateFormat
        )}-${props.selectedRange?.endDate?.toFormat(props.dateFormat)}`
      : `${props.selectedDate
          .minus({ day: 1 })
          .toFormat(props.dateFormat)}-${props.selectedDate
          .plus({ day: 1 })
          .toFormat(props.dateFormat)}`;
  }
  return (
    <div className="display-panel">
      <input
        type="text"
        name="dates"
        className="selection-display"
        placeholder="selected date..."
        value={setInputValue()}
        readOnly
        onFocus={(e) => props.setShowPopup(true)}
      />
    </div>
  );
}

export default DisplayPanel;
