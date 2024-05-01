import React, { useState } from 'react';

function TimeTracker() {
  const [workStartTime, setWorkStartTime] = useState({ hour: '', minute: '' });
  const [breakStartTime, setBreakStartTime] = useState({ hour: '', minute: '' });
  const [breakEndTime, setBreakEndTime] = useState({ hour: '', minute: '' });
  const [workEndTime, setWorkEndTime] = useState({ hour: '', minute: '' });
  const [month, setMonth] = useState('');
  const [date, setDate] = useState('');
  const [totalHours, setTotalHours] = useState(0);
  const [totalMinutes, setTotalMinutes] = useState(0);

  // Function to calculate total hours
  const calculateTotalHours = () => {
    // Convert time strings to Date objects
    const startTime = new Date(`2024-${month}-${date}T${workStartTime.hour}:${workStartTime.minute}`);
    const breakStart = new Date(`2024-${month}-${date}T${breakStartTime.hour}:${breakStartTime.minute}`);
    const breakEnd = new Date(`2024-${month}-${date}T${breakEndTime.hour}:${breakEndTime.minute}`);
    const endTime = new Date(`2024-${month}-${date}T${workEndTime.hour}:${workEndTime.minute}`);

    // Calculate time differences in milliseconds
    const workTime = (breakStart - startTime) + (endTime - breakEnd);
    
    // Convert milliseconds to hours and minutes
    const hours = Math.floor(workTime / (1000 * 60 * 60));
    const minutes = Math.floor((workTime % (1000 * 60 * 60)) / (1000 * 60));

    // Update total hours and minutes state
    setTotalHours(hours);
    setTotalMinutes(minutes);
  };

  // Function to handle changes in month
  const handleMonthChange = (event) => {
    setMonth(event.target.value);
  };

  // Function to handle changes in date
  const handleDateChange = (event) => {
    setDate(event.target.value);
  };

  // Function to handle changes in time
const handleTimeChange = (type, value, setTime) => {
    setTime({ ...setTime, [type]: value });
  };
  

  return (
    <div>
      <select value={month} onChange={handleMonthChange}>
        <option value="">Choose Month</option>
        {Array.from({ length: 12 }, (_, i) => (
          <option key={i + 1} value={i + 1}>{new Date(2024, i, 1).toLocaleString('default', { month: 'long' })}</option>
        ))}
      </select>
      <select value={date} onChange={handleDateChange}>
        <option value="">Choose Date</option>
        {Array.from({ length: 31 }, (_, i) => (
          <option key={i + 1} value={i + 1}>{i + 1}</option>
        ))}
      </select>
      <div>
        <select value={workStartTime.hour} onChange={(e) => handleTimeChange('hour', e.target.value, setWorkStartTime)}>
          <option value="">Hour</option>
          {Array.from({ length: 24 }, (_, i) => (
            <option key={i} value={i}>{i}</option>
          ))}
        </select>
        <select value={workStartTime.minute} onChange={(e) => handleTimeChange('minute', e.target.value, setWorkStartTime)}>
          <option value="">Minute</option>
          {Array.from({ length: 60 }, (_, i) => (
            <option key={i} value={i}>{i}</option>
          ))}
        </select>
    
      </div>
    
      <div>
        <select value={breakStartTime.hour} onChange={(e) => handleTimeChange('hour', e.target.value, setBreakStartTime)}>
          <option value="">Hour</option>
          {Array.from({ length: 24 }, (_, i) => (
            <option key={i} value={i}>{i}</option>
          ))}
        </select>
        <select value={breakStartTime.minute} onChange={(e) => handleTimeChange('minute', e.target.value, setBreakStartTime)}>
          <option value="">Minute</option>
          {Array.from({ length: 60 }, (_, i) => (
            <option key={i} value={i}>{i}</option>
          ))}
        </select>
    
      </div>
      <div>
        <select value={breakEndTime.hour} onChange={(e) => handleTimeChange('hour', e.target.value, setBreakEndTime)}>
          <option value="">Hour</option>
          {Array.from({ length: 24 }, (_, i) => (
            <option key={i} value={i}>{i}</option>
          ))}
        </select>
        <select value={breakEndTime.minute} onChange={(e) => handleTimeChange('minute', e.target.value, setBreakEndTime)}>
          <option value="">Minute</option>
          {Array.from({ length: 60 }, (_, i) => (
            <option key={i} value={i}>{i}</option>
          ))}
        </select>
    
      </div>
      <div>
        <select value={workEndTime.hour} onChange={(e) => handleTimeChange('hour', e.target.value, setWorkEndTime)}>
          <option value="">Hour</option>
          {Array.from({ length: 24 }, (_, i) => (
            <option key={i} value={i}>{i}</option>
          ))}
        </select>
        <select value={workEndTime.minute} onChange={(e) => handleTimeChange('minute', e.target.value, setWorkEndTime)}>
          <option value="">Minute</option>
          {Array.from({ length: 60 }, (_, i) => (
            <option key={i} value={i}>{i}</option>
          ))}
        </select>
    
      </div>
      <table>
        {/* Table to display time entries */}
      </table>
      <div>Total Hours: {totalHours} hours {totalMinutes} minutes</div>
      <button onClick={calculateTotalHours}>Calculate Total Hours</button>
    </div>
  );
}

export default TimeTracker;
