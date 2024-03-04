import React from 'react'
import Avatar from './Avatar'
const Movie = () => {
    const theme = {
        theme : {
        backgroundColor: 'black',
        color: 'pink'
      }}
  return (
    <>
    <div style={theme.theme}>
        <h1>Hedy Lamarr's Todos</h1>
        <img 
        src="https://i.imgur.com/yXOvdOSs.jpg" 
        alt="Hedy Lamarr" 
        className="photo" 
        />
        <ul>
        <li>Invent new traffic lights</li>
        <li>Rehearse a movie scene</li>
        <li>Improve the spectrum technology</li>
        </ul>
    </div>
   
    <div>
        <Avatar />
    </div>
    
  </>
  )
}

export default Movie