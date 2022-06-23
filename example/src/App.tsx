import React from 'react';

import ReactDateTimeRangePicker from '@shabbyk/react-datetimerangepicker';

import '@shabbyk/react-datetimerangepicker/ReactDateTimeRangePicker.css';
import './App.css';
import { DateTime } from 'luxon';

function App() {
  return (
    <div className="App">
      <ReactDateTimeRangePicker dateFormat='dd/MM/yyyy hh:mm:ss' width={200} dateRangePicker selectedDate={DateTime.now()}/>
    </div>
  );
}

export default App;
