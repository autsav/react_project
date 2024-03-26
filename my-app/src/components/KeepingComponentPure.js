import React, { useState, useEffect } from 'react';
import '../styles/clock.css'


function Clock({ time }) {
   

  let hours = time.getHours();
  let className;

  if (hours >= 0 && hours <= 6) {
    className = 'night';
  } else {
    className = 'day';
  }

  return (
    <h1 className={className}>
      {time.toLocaleTimeString()}
    </h1>
  );
}

function KeepingComponentPure() {
    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
        const timerID = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000); // Update time every second

        return () => {
            clearInterval(timerID); // cleanup the timer when the component unmounts
        };
    }, []);


  return (
    <div>
      <h1>KeepingComponentPure</h1>
      <Clock time={currentTime} />
    </div>
  );
}

export default KeepingComponentPure;
    