import React from 'react'

import { useState } from 'react';

function Form() {
  const [person, setPerson] = useState({
    name:'Nikki Minaj',
    artwork:{
      title:'Blue Nana',
      city:'Hamburg',
      image:'https://i.imgur.com/Sd1AgUOm.jpg',
    }
  })

  function handleNameChange(e){
    setPerson({
      ...person,
      name: e.target.value
    });
  }
  function handleTitleChange(e){
    setPerson({
      ...person,
      artwork: {
        ...person.artwork,
        title: e.target.value
      }

    });
  }
 function  handleCityChange(e){
    setPerson({
      ...person,
      artwork: {
        ...person.artwork,
        city: e.target.value
      }
    })
 }
 function handleImageChange(e){
  setPerson({
    ...person,
    artwork:{
      ...person.artwork,
      image: e.target.value
    }
  })
 }
   
return(
  <>
    <label>
      Name:
      <input
        value={person.name}
        onChange={handleNameChange}
       />
    </label>
    <label>
      Title:
      <input
        value={person.artwork.title}
        onChange={handleTitleChange}
         />
    </label>
    <label>
      City:
      <input 
        value={person.artwork.city}
        onChange={handleCityChange}
      />
    </label>
    <label>
      Image:
      <input 
        value={person.artwork.image}
        onChange={handleImageChange}
      />
    </label>
    <p>
      <i>{person.artwork.title}</i>
      {' by '}
      {person.name}
      <br />
      (located in {person.artwork.city})
    </p>
    <img 
      src={person.artwork.image}
    />
  </>
)
}

function MovingDot(){
  const [position, setPosition] = useState({
    x:0,
    y:0
  });
  return(
    <div
      onPointerMove={e=>{
        setPosition({
          x: e.clientX,
          y: e.clientY
        });
      }}

      style={{
        position:'relative',
        width:'50vw',
        height:'50vh',
      }}>
      <div 
        style={{
          position:'absolute',
          backgroundColor:'blue',
          borderRadius:'50%',
          transform:`translate(${position.x}px, ${position.y}px)`,
          left: -10,
          top: -10,
          width: 20,
          height:20,
        }}
      />

    </div>
  )
}


function UpdatingObjectInState() {
  return (
    <div>
    <h1>UpdatingObjectInState</h1>
        <h2>Moving Dot</h2>
        <MovingDot />
        <h2>Form</h2>
        <Form />
     </div>
  )
}

export default UpdatingObjectInState