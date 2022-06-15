import React from 'react';

import ReactDateTimeRangePicker from '@shabbyk/react-datetimerangepicker';

import '@shabbyk/react-datetimerangepicker/ReactDateTimeRangePicker.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <ReactDateTimeRangePicker dateFormat='dd/MM/yyyy hh:mm:ss' width={200} dateRangePicker/>
    </div>
  );
}

export default App;
