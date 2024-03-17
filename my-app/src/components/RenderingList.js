import React from 'react'

const people = [
    'Creola Katherine Johnson: mathematician',
    'Mario José Molina-Pasquel Henríquez: chemist',
    'Mohammad Abdus Salam: physicist',
    'Percy Lavon Julian: chemist',
    'Subrahmanyan Chandrasekhar: astrophysicist'
  ];
 function List() {
    const ListItem = people.map(person => 
        <li>{person}</li>
    );
    return(<ul>{ListItem}</ul>
    )
 }  

function RenderingList() {

  return (
    <>
        <div>RenderingList</div>
        <List />  
    </>
   
  )
}

export default RenderingList