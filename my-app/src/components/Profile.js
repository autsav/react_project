import React  from "react";
import { getImageUrl } from "../utils/utils";

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
              height:'60vh',
              backgroundColor:'#35626e'
              

              }}
      >
          {children}
      </div>
  )
}

function ProfileCard({name,imageUrl, profession, awards,discovered}) {
  return (
    <>
    <section >
    <h2>{name}</h2>
      <img
        className="profile"
        src={getImageUrl(imageUrl)}
        alt="linking park"
        style={{ width: '200px', height: '150px' }}
      />
      <ul>
        <li>
          <b>Profession: </b>
          {profession}
        </li>
        <li>
          <b>Awards: {awards.length} </b>
          ({awards.join(", ")})
        </li>
        <li>
          <b>Discovered: </b>
          {discovered}
        </li>
      </ul>
    </section>
    </>
  
  );
}

export default function Profile() {
  return (
    <>
      <h1>Hello</h1>
      <Card>
      <ProfileCard
        name = "Maria Sklduska-Curie" 
        imageUrl = "szV5sdG"
        profession = "physicist and chemist"
        awards = {[
          "Nobel Prize in Physics",
          "Nobel Prize in Chemistry",
          "Davy Medal",
          "Matteucci Medal",
        ]}
        
        discovered = "polonium (chimical element"
       />

      </Card>
     
       <Card>
       <ProfileCard
        name = "Maria Sklduska-Curie" 
        imageUrl = "YfeOqp2"
        profession = "geochemist"
        awards = {[
         " Miyake Prize for geochemistry", 
         "Tanaka Prize"

        ]}
        
        discovered = "a method for measuring carbon dioxide in seawater"
       />
       </Card>
      
  
    </>
    
  );
}