import React from 'react'
import { useState } from 'react'

function Counter (){
    const [number, setNumber] = useState(0);
    const [score, setScore] = useState(0);

    function increment(){
        setScore(s => s +1)
    }
    return(
        <>
            <h1>Counter</h1>
            <h2>Counter:{number}</h2>
                <button
                onClick={e => {
                    setNumber(number + 2)
                
                }}
                > +2 </button>
            <h1>Score Board</h1>
            <h2>Score:{score}</h2>
                <button 
                    onClick={()=>{
                        increment();
                    }}
                >+1</button>
                <button
                    onClick={()=>{
                        increment();
                        increment();
                        increment();    
                    }}
                >+3</button>
        </>
    )
}

function TrafficLight() {
    const [walk, setWalk] = useState(true);
    const [message, setMessage] = useState('Stop is next');
  
    function handleClick(e) {
      e.preventDefault();
        setTimeout(()=>{
        alert(walk ? 'Stop is next' : 'Walk is next')
      })
      setWalk(!walk);
  
    
      
    }
  
    return (
      <>
        <button onClick={handleClick}>
          Change to {walk ? 'Stop' : 'Walk'}
        </button>
        <h1 style={{
          color: walk ? 'darkgreen' : 'darkred'
        }}>
          {walk ? 'Walk' : 'Stop'}
        </h1>
      </>
    );
  }

  //--------------------Request Tracker ----------------------

  function RequestTracker(){

    const [pending, setPending] = useState(0);
    const [completed, setCompleted] = useState(0);

    async function handleClick() {
        setPending(p => p + 1);
        await delay(3000);
        setPending(p => p - 1);
        setCompleted(c => c + 1);
      }
   
    return(
        <>
            <h3>
                Pending: {pending}
            </h3>
            <h3>
                Completed: {completed}
            </h3>
            <button onClick={handleClick}>
                Buy
            </button>
        </>
    );
  }
  function delay(ms){
    return new Promise(resolve => {
        setTimeout(resolve , ms);
    });
}

function Form() {
    const [to, setTo] = useState('Gwan')
    const [message, setMessage] = useState("HI!")
    const [isSent, setIsSent] = useState(false)

    if(isSent){
        return <h1>Your Message is on its way !</h1>
    }

    function handleSubmit(e){
            e.preventDefault();
            setTimeout(() =>{
                alert(`You send ${message} to ${to}`);
            },3000)
    }

   return (
    <>
         <form onSubmit={handleSubmit}>
         <label>
            To:{''}
            <select
                value={to}
                onChange={e => setTo(e.target.value)}
            >
            <option value='Gwan'>Gwan</option>
            <option value='Suraj'>Suraj</option>
            <option value='Utsab'>Utsab</option>
            </select>
         </label>
            <textarea 
                placeholder="message"
                value={message}
                onChange={e => setMessage(e.target.value)}
            />
            <button type='submit'>send</button>
        </form>
        <h2>----------------------------------------------------------------------</h2>
        <h2>Counter</h2>
        <Counter />
        <h2>----------------------------------------------------------------------</h2>
        <h2>TrafficLight</h2>
        <TrafficLight />
        <h2>----------------------------------------------------------------------</h2>
        <h2>Request Tracker</h2>
        <RequestTracker />
    </>
   
   )
}

function sendMessage(message){
    //.....
}

export default Form