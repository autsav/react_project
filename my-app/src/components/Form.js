import React from 'react'
import { useState } from 'react'

function Counter (){
    const [number, setNumber] = useState(0)
    return(
        <>
            <h1>{number}</h1>
            <button
            onClick={e => {
                setNumber(number + 2)
                setTimeout(() => {
                    alert(number)
                },2000)
            }}
            > +2 </button>
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
    </>
   
   )
}

function sendMessage(message){
    //.....
}

export default Form