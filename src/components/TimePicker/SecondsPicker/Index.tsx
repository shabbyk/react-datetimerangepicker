import React from 'react';

function SecondsPicker() {
    let options = [];
    for (var i = 0; i < 60; i++) {
        options.push(<option key={i} value={i}>{i}</option>)
    }
    return (<div className="seconds-picker-container">
        <label>ss:</label>
        <select>{options}</select>
    </div>);
}

export default SecondsPicker;