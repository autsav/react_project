import React, { useState, useEffect } from 'react';
import '../styles/clock.css'
import Panel from './Panel';

import { getImageUrl } from '../utils/utils';


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

function Profile({person}){
    return (
        <Panel person={person} >
            <Header person={person}  />
            <Avatar person={person}  />
        </Panel>
    )
}

function Header({person}){
    return(
        <h1>{person.name}</h1>
    )
}
function Avatar({person}){
    return(
        <img
            className='avatar'
            src={getImageUrl(person)}
            alt={person.name}
            width={50}
            height={50} 
        />
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
        <Profile person={{
            imageId: 'lrWQx8l',
            name: 'Subrahmanyan Chandrasekhar',
        }} />

        <Profile person={{
            imageId: 'MK3eW3A',
            name: 'Creola Katherine Johnson',
        }} />
    </div>
  );
}

export default KeepingComponentPure;
    