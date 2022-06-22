import React from "react";

import { DateTime } from "luxon";

import "./SelectionPanel.css";

type SelectionPanelProps = {
  startDate: DateTime;
  endDate?: DateTime;
  format: string;
  applyDateRange: (startDate: DateTime, endDate: DateTime) => any;
  closeFn: (show: boolean) => any;
};

function SelectionPanel(props: SelectionPanelProps) {
  return (
    <div className="selection-panel">
      <div className="display-section">
        <span className="start-date-label">
          {props.startDate.toFormat(props.format)}
        </span>
        <span className="start-date-label">
          {props.endDate ? props.endDate.toFormat(props.format) : ""}
        </span>
      </div>
      <div className="control-section">
        <input
          type="button"
          className="cancel-button"
          value="Cancel"
          onClick={(e) => {
            e.preventDefault();
            props.closeFn(false);
          }}
        />
        <input
          type="button"
          className="range-selection-button"
          value="Apply"
          onClick={(e) => {
            e.preventDefault();
            props.applyDateRange(props.startDate, props.endDate!);
            props.closeFn(false);
          }}
        />
      </div>
    </div>
  );
}

export default SelectionPanel;
