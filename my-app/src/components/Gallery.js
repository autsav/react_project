import { useState } from 'react';
import { sculptureList } from "../constants/data";

import React from 'react'

function Gallery() {
    const [index, setIndex] = useState(0); //Function starting from the use is called Hook
    const [showMore, setShowMore] = useState(false);

    
    function handelClick(){
        setIndex(index + 1);
    }
    function handelClickMore(){
        setShowMore(!showMore);
    }
let sculpture = sculptureList[index];
  return (
        <>
            <button onClick={handelClick}>
                Next
            </button>
            <h2>
                <i>{sculpture.name}</i>
                by {sculpture.artist}
            </h2>
            <h3>
                ({index + 1} of {sculptureList.length})
            </h3>

            <button onClick={handelClickMore}>
                {showMore ? 'Hide': 'Show'} details
            </button>
            {showMore && <p>{sculpture.description}</p>}
            
            <img 
                src={sculpture.url}
                alt={sculpture.alt}
            />
            <p>
            </p>
        </>
    )
}

export default Gallery