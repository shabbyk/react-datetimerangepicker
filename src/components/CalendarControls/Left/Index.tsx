function CalendarControlsLeft() {
    return <>
        <div
            className="left"
            onClick={() => decreaseMonth(props.month, props.year, props.navigate)}
        ></div>
        <div className="centre">
            {props.monthName}/{props.year}
        </div>
    </>;
}

export default CalendarControlsLeft;