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
        <Avatar
            person = {{name:'Avatrar poster', imageId:'MV5BZDA0OGQxNTItMDZkMC00N2UyLTg3MzMtYTJmNjg3Nzk5MzRiXkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_'}}
            size={{width:200, height:300}}
         />
    </div>

  </>
  )
}

export default Movie