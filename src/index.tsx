import React from 'react';
import ReactDOM from 'react-dom/client';

import LeftCalendar from './components/LeftCalendar/Index';
import './index.css';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <LeftCalendar dateFormat='dd/MM/yyyy hh:mm:ss'/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
