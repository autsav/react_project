import React from 'react'
import Avatar from './Avatar'


function Card({ children }){
    return(
        <div className='card'
            style={{
                width:400,
                height:400,
                border: '1px solid rgba(0, 0, 0, 0.2)', 
                borderRadius:'10px',
                display:'flex',
                justifyContent:'center',
                alignItems:'center',
                height:'60vh'

                }}
        >
            {children}
        </div>
    )
}

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
        <Card>
            <Avatar
                    person = {{name:'Avatrar poster', imageId:'MV5BZDA0OGQxNTItMDZkMC00N2UyLTg3MzMtYTJmNjg3Nzk5MzRiXkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_'}}
                    size={{width:200, height:300}}
                />
        </Card>
        <Card>
            <h1>Hello Card</h1>
        </Card>
       
    </div>

  </>
  )
}

export default Movie