import React from 'react'
import { useState } from 'react';



const initialList = [
    { id: 0, title: 'Big Bellies', seen: false },
    { id: 1, title: 'Lunar Landscape', seen: false },
    { id: 2, title: 'Terracotta Army', seen: true },
  ];

  function BucketList() {
    const [list, setList] = useState(
      initialList
    );
  
    function handleToggle(artworkId, nextSeen) {
      setList(list.map(artwork => {
        if (artwork.id === artworkId) {
          return { ...artwork, seen: nextSeen };
        } else {
          return artwork;
        }
      }));
    }
  
    return (
      <>
        <h1>Art Bucket List</h1>
        <h2>My list of art to see:</h2>
        <ItemList
          artworks={list}
          onToggle={handleToggle} />
      </>
    );
  }
  
  function ItemList({ artworks, onToggle }) {
    return (
      <ul>
        {artworks.map(artwork => (
          <li key={artwork.id}>
            <label>
              <input
                type="checkbox"
                checked={artwork.seen}
                onChange={e => {
                  onToggle(
                    artwork.id,
                    e.target.checked
                  );
                }}
              />
              {artwork.title}
            </label>
          </li>
        ))}
      </ul>
    );
  }

//Adding to an array
let nextId = 0;

function List() {
  const [name, setName] = useState('');
  const [artists, setArtists] = useState([]);

  return (
    <>
      <h1>Inspiring sculptors:</h1>
      <input
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <button onClick={() => {
        setArtists([
          ...artists,
          { id: nextId++, name: name }
        ]);
      }}>Add</button>
      <ul>
        {artists.map(artist => (
          <li key={artist.id}>{artist.name}</li>
        ))}
      </ul>
    </>
  );
}
//Removing from an array


let initialArtists = [
  { id: 0, name: 'Marta Colvin Andrade' },
  { id: 1, name: 'Lamidi Olonade Fakeye'},
  { id: 2, name: 'Louise Nevelson'},
];

 function List1() {
  const [artists, setArtists] = useState(
    initialArtists
  );

  return (
    <>
      <h1>Inspiring sculptors:</h1>
      <ul>
        {artists.map(artist => (
          <li key={artist.id}>
            {artist.name}{' '}
            <button onClick={() => {
              setArtists(
                artists.filter(a =>
                  a.id !== artist.id
                )
              );
            }}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}

//Tranforming an array

let initialShapes = [
  { id: 0, type: 'circle', x: 50, y: 100 },
  { id: 1, type: 'square', x: 150, y: 100 },
  { id: 2, type: 'circle', x: 250, y: 100 },
];

function ShapeEditor() {
  const [shapes, setShapes] = useState(
    initialShapes
  );

  function handleClick() {
    const nextShapes = shapes.map(shape => {
      if (shape.type === 'square') {
        // No change
        return shape;
      } else {
        // Return a new circle 50px below
        return {
          ...shape,
          y: shape.y + 50,
        };
      }
    });
    // Re-render with the new array
    setShapes(nextShapes);
  }

  return (
    <>
      <button onClick={handleClick}>
        Move circles down!
      </button>
      {shapes.map(shape => (
        <div
          key={shape.id}
          style={{
          background: 'purple',
          position: 'absolute',
          left: shape.x,
          top: shape.y,
          borderRadius:
            shape.type === 'circle'
              ? '50%' : '',
          width: 20,
          height: 20,
        }} />
      ))}
    </>
  );
}


//---------------------------CounterList ----------------------------
let initialCounters = [
    0, 0, 0
  ];
  
 function CounterList() {
    const [counters, setCounters] = useState(
      initialCounters
    );
  
    function handleIncrementClick(index) {
      const nextCounters = counters.map((c, i) => {
        if (i === index) {
          // Increment the clicked counter
          return c + 1;
        } else {
          // The rest haven't changed
          return c;
        }
      });
      setCounters(nextCounters);
    }
  
    return (
      <ul>
        {counters.map((counter, i) => (
          <li key={i}>
            {counter}
            <button onClick={() => {
              handleIncrementClick(i);
            }}>+1</button>
          </li>
        ))}
      </ul>
    );
  }

  //-------List 3 -----------------------------------


let nextId3 = 3;
const initialArtists3 = [
  { id: 0, name: 'Marta Colvin Andrade' },
  { id: 1, name: 'Lamidi Olonade Fakeye'},
  { id: 2, name: 'Louise Nevelson'},
];

function List3() {
  const [name, setName] = useState('');
  const [artists, setArtists] = useState(
    initialArtists3
  );

  function handleClick() {
    const insertAt = 1; // Could be any index
    const nextArtists3 = [
      // Items before the insertion point:
      ...artists.slice(0, insertAt),
      // New item:
      { id: nextId3++, name: name },
      // Items after the insertion point:
      ...artists.slice(insertAt)
    ];
    setArtists(nextArtists3);
    setName('');
  }

  return (
    <>
      <h1>Inspiring sculptors:</h1>
      <input
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <button onClick={handleClick}>
        Insert
      </button>
      <ul>
        {artists.map(artist => (
          <li key={artist.id}>{artist.name}</li>
        ))}
      </ul>
    </>
  );
}

//------------------------Bucket list ----------------------
let nextId4 = 3;
const initialList4 = [
  { id: 0, title: 'Big Bellies', seen: false },
  { id: 1, title: 'Lunar Landscape', seen: false },
  { id: 2, title: 'Terracotta Army', seen: true },
];

function BucketList2() {
  const [myList, setMyList] = useState(initialList4);
  const [yourList, setYourList] = useState(
    initialList4
  );

  function handleToggleMyList(artworkId, nextSeen) {
    setMyList(myList.map(artwork => {
      if (artwork.id === artworkId) {
        // Create a *new* object with changes
        return { ...artwork, seen: nextSeen };
      } else {
        // No changes
        return artwork;
      }
    }));
  }

  function handleToggleYourList(artworkId, nextSeen) {
    setYourList(yourList.map(artwork => {
      if (artwork.id === artworkId) {
        // Create a *new* object with changes
        return { ...artwork, seen: nextSeen };
      } else {
        // No changes
        return artwork;
      }
    }));
  }

  return (
    <>
      <h1>Art Bucket List</h1>
      <h2>My list of art to see:</h2>
      <ItemList2
        artworks={myList}
        onToggle={handleToggleMyList} />
      <h2>Your list of art to see:</h2>
      <ItemList2
        artworks={yourList}
        onToggle={handleToggleYourList} />
    </>
  );
}

function ItemList2({ artworks, onToggle }) {
  return (
    <ul>
      {artworks.map(artwork => (
        <li key={artwork.id}>
          <label>
            <input
              type="checkbox"
              checked={artwork.seen}
              onChange={e => {
                onToggle(
                  artwork.id,
                  e.target.checked
                );
              }}
            />
            {artwork.title}
          </label>
        </li>
      ))}
    </ul>
  );
}
//-------------------------End of Bucket list-------------------------
  //-------start of shopping cart-------/
const initialProducts = [{
  id: 0,
  name: 'Baklava',
  count: 1,
}, {
  id: 1,
  name: 'Cheese',
  count: 5,
}, {
  id: 2,
  name: 'Spaghetti',
  count: 2,
}];

function ShoppingCart() {
  const [
    products,
    setProducts
  ] = useState(initialProducts)

  function handleIncreaseClick(productId) {
     setProducts(products.map(product =>{
       if (product.id === productId){
         return { ...product,
                count: product.count+1}
       }else{
         return product
       }
     }))
  
  }

  return (
    <ul>
      {products.map(product => (
        <li key={product.id}>
          {product.name}
          {' '}
          (<b>{product.count}</b>)
          <button onClick={() => {
            handleIncreaseClick(product.id);
          }}>
            +
          </button>
        </li>
      ))}
    </ul>
  );
}


//----------end of shopping cart 




import AddTodo from './AddTodo.js';
import TaskList from './TaskList.js';

let nextId = 3;
const initialTodos = [
  { id: 0, title: 'Buy milk', done: true },
  { id: 1, title: 'Eat tacos', done: false },
  { id: 2, title: 'Brew tea', done: false },
];

function TaskApp() {
  const [todos, setTodos] = useState(
    initialTodos
  );

  function handleAddTodo(title) {
    setTodos([
      ...todos,
      {
        id: nextId++,
        title: title,
        done: false
      }
    ]);
  }

  function handleChangeTodo(nextTodo) {
    setTodos(todos.map(t => {
      if (t.id === nextTodo.id) {
        return nextTodo;
      } else {
        return t;
      }
    }));
  }

  function handleDeleteTodo(todoId) {
    setTodos(
      todos.filter(t => t.id !== todoId)
    );
  }

  return (
    <>
      <AddTodo
        onAddTodo={handleAddTodo}
      />
      <TaskList
        todos={todos}
        onChangeTodo={handleChangeTodo}
        onDeleteTodo={handleDeleteTodo}
      />
    </>
  );
}



function UpdatingArrayInState() {
  return (
    <div>UpdatingArrayInState
    <h2>BucketList</h2>
    <BucketList />
    <br></br>
    <h2>List</h2>
    <List  />
    <br></br>
    <h2>List 2</h2>
    <List1 />
    <br></br>
    <h2>Transforming an array </h2>
    <ShapeEditor />
    <br></br>
    <h2>Counter List </h2>
    <CounterList />
    <br></br>
    <h2> List3 </h2>
    <List3 />

    <br></br>
    <h2> BucketList </h2>
    <BucketList2 />

    <br></br>
    <h2> shopping cart </h2>
      <ShoppingCart />
    <br></br>

      <h2> Task App</h2>
      <TaskApp />
    </div>

  )
}

export default UpdatingArrayInState
