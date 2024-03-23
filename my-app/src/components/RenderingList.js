import React, { Fragment } from 'react'
import { getImageUrl } from '../utils/utils';
import { recipes } from '../constants/recipes';

export const people = [{
  id: 0,
  name: 'Creola Katherine Johnson',
  profession: 'mathematician',
  accomplishment: 'spaceflight calculations',
  imageId: 'MK3eW3A'
}, {
  id: 1,
  name: 'Mario José Molina-Pasquel Henríquez',
  profession: 'chemist',
  accomplishment: 'discovery of Arctic ozone hole',
  imageId: 'mynHUSa'
}, {
  id: 2,
  name: 'Mohammad Abdus Salam',
  profession: 'physicist',
  accomplishment: 'electromagnetism theory',
  imageId: 'bE7W1ji'
}, {
  id: 3,
  name: 'Percy Lavon Julian',
  profession: 'chemist',
  accomplishment: 'pioneering cortisone drugs, steroids and birth control pills',
  imageId: 'IOjWm71'
}, {
  id: 4,
  name: 'Subrahmanyan Chandrasekhar',
  profession: 'astrophysicist',
  accomplishment: 'white dwarf star mass calculations',
  imageId: 'lrWQx8l'
}];

function ListingAll(){
    const listItems = people.map(person => {
      return(
        <li key={person.id}>
          <img
              src={getImageUrl(person.imageId)}
              alt={person.name}
           />
           <p>
            <b>{person.name}</b>
            {' ' + person.profession + ' '}known for {person.accomplishment}
           </p>

        </li>
      )
    })
    return(
      <ul>{listItems}</ul>
    )

}

function List() {

  const chemists = people.filter(person =>{ 
    return( 
            person.profession === 'chemist'
          )
        }
      );

  const listItems = chemists.map(person =>{
    return (<>
            <li key={person.id}>
              <img
                src={getImageUrl(person.imageId)}
                alt={person.name}
              />
              <p>
                <b>{person.name}:</b>
                {' ' + person.profession + ' '}
                known for {person.accomplishment}
              </p>
            </li>

    </>
             
            )
    } );

  return (
    <ul>{listItems}</ul>
  );
}
// Make a list of recipes from this array! For each recipe in the array, display its name as an <h2>
//  and list its ingredients in a <ul>.

function Recipe({id, name, ingredients}){
  return(
    <div >            
    <h2>{name}</h2>

    <ul>
      {ingredients.map(ingredient => {
        return(
          <li key={ingredient} >
          {ingredient}
        </li>
        )
         
     })} 
    </ul>
    </div>

  )
}

function RecipeList(){
    const recipeLists = recipes.map(recipe => {
      return(
        <Recipe {...recipe} key={recipe.id} />
      )
    })
  return(
    <div>
      <h1>Recipes</h1>
      <ul>{recipeLists}</ul>

    </div>
  )
}

const poem = {
  lines: [
    'I write, erase, rewrite',
    'Erase again, and then',
    'A poppy blooms.'
  ]
};

function Poem() {
  return(
    <article>
      {poem.lines.map((line, i) =>
        <Fragment key={i}>
          {i > 0 && <hr />}
          <p>{line}</p>
        </Fragment>
      )}
    </article>
  )
}

function RenderingList() {

  return (
    <>
        <div>RenderingList</div>
        <h1>Filtering the data </h1>
        <h2>Only the chemist</h2>
        <List />  
        <h1>Rendering all the data</h1>
        <ListingAll />
        <h1>Rendering RecipeList</h1>
        <RecipeList />
        <h1>Poem with hr </h1>
        <Poem />

    </>
   
  )
}


export default RenderingList