import React from 'react'

  function Toolbar({ onPlayMovie, onUploadImage }) {
    return (
      <div >
        <Button onClick={onPlayMovie}>
          Play Movie
        </Button>
        <Button onClick={onUploadImage}>
          Upload Image
        </Button>
      </div>
    );
  }
  
  function Button({ onClick, children }) {
    return (
      <button onClick={onClick}>
        {children}
      </button>
    );
  }


function AddingInteractivity() {
  return (
    <div><h3>AddingInteractivity</h3>
    
    <Toolbar
        onPlayMovie={() => alert('Playing!')}
        onUploadImage={() => alert('Uploading!')}
      />
      </div>

  )
}

export default AddingInteractivity