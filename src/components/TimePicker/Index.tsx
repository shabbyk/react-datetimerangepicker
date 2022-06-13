import React from 'react';
import HourPicker from './HoursPicker/Index';
import MinutesPicker from './MinutesPicker/Index';
import SecondsPicker from './SecondsPicker/Index';

type TimePickerProps = {
    selectedHour: number;
    selectedMinute: number;
    selectedSecond: number;
}

function TimePicker(props: TimePickerProps) {
    return ( <div className='timepicker'>
        <HourPicker is24Format selected={props.selectedHour}/>
        <MinutesPicker increment={1} selected={props.selectedMinute}/>
        <SecondsPicker selected={props.selectedSecond}/>
    </div> );
}

export default TimePicker;