import React from 'react';

type HourPickerProps = {
    is24Format: boolean;
}

function HourPicker(props: HourPickerProps) {
    var start = props.is24Format ? 0 : 1;
    var end = props.is24Format ? 23 : 12;

    let options = [];
    for (var i = start; i <= end; i++) {
        options.push(<option key={i} value={i}>{i}</option>)
    }

    return (<div className="hour-picker-container">
        <label>HH:</label>
        <select className="hour-picker">{options}</select>
    </div>);
}

export default HourPicker;
