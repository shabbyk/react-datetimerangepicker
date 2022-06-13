import * as React from 'react';

type MinutesPickerProps = {
    increment: number;
}

function MinutesPicker(props: MinutesPickerProps) {
    let options = [];
    for (var i = 0; i < 60; i += props.increment) {
        options.push(<option key={i} value={i}>{i}</option>)
    }
    return (<div className="minutes-picker-container">
        <label>mm:</label>
        <select>{options}</select>
    </div>);
}

export default MinutesPicker;