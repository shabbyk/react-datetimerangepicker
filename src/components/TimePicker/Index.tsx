import React from 'react';
import HourPicker from './HoursPicker/Index';
import MinutesPicker from './MinutesPicker/Index';
import SecondsPicker from './SecondsPicker/Index';

function TimePicker() {
    return ( <div className='timepicker'>
        <HourPicker is24Format />
        <MinutesPicker increment={5} />
        <SecondsPicker />
    </div> );
}

export default TimePicker;