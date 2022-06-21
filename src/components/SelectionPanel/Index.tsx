import React from 'react';
import { DateTime } from 'luxon';

type SelectionPanelProps = {
    startDate: DateTime;
    endDate?: DateTime;
    format: string;
    selectDateRange: (startDate: DateTime, endDate: DateTime) => any;
}

function SelectionPanel(props: SelectionPanelProps) {
    return (<div className='selection-panel'>
        <div className='display-section'><span className='start-date-label'>{props.startDate.toFormat(props.format)}</span> -
        <span className='start-date-label'>{props.endDate ? props.endDate.toFormat(props.format) : ""}</span></div>
        <div className='control-section'>
            <input type="button" onClick={props.selectDateRange(props.startDate, props.endDate!)}/>
        </div>
    </div>);
}

export default SelectionPanel;