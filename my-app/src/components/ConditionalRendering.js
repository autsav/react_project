import React from 'react'

function Item({ name, isPacked }) {
    return <li className="item" >
    
    {isPacked ? name + ' ✔' : name }
    
    </li>;
}

function PackingList(){
    return (
        <section>
        <h1>Utsab Ride's Packing List</h1>
        <ul>
        <Item 
            isPacked={true}
            name="Bag"
        />
        <Item
            isPacked={true}
            name="Tent" />
        <Item
            isPacked={false}
            name="Pillow"
         />
         <Item 
            isPacked={false}
            name="Books"
         />

        </ul>
    </section>
    )
}

function ConditionalRendering() {
  return (
   <PackingList />
  )
}

export default ConditionalRendering