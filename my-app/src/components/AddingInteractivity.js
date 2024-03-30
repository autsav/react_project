import React from 'react'
import { Link } from 'react-router-dom';


function AddingInteractivity (){
    return (
        <Toolbar
            onOpeningImage={()=> alert('opening Image')}
            onSendingFile={()=> alert('Sending File')}
         />
    )
}

function Button ({ onClick, children}){
    return(
        <button onClick={onClick}>
            {children}
        </button>
    )
}
function AlertButton ({message, children}){
    return(
        <button onClick={()=> alert(message)} >
            {children}
        </button>
    )
}

function PlayButton ({movieName}){
    function handlePlayClick (){
        alert(`Playing ${movieName}!`);
    }
    return(
        <Button onClick={handlePlayClick}>
        Play "{movieName}"
        </Button>
    )
}
function UploadMovieButton(){
    return(
        <Button onClick={() => alert('Uploading!')} >
            Upload Image
        </Button>
    )
}

function SignUp(){
    return(
        <>
            <form onSubmit={(e)=>{
                e.preventDefault();
                alert('Submitting')
            }
             }>
               <input />
               <Button >Submit</Button>
            
            </form>
        </>
     
    )
}
function Toolbar({onOpeningImage,onSendingFile}){
    return(
        <div>
                <p>Button Created using AlertButton</p>
                <AlertButton  message="Playing" >
                    Play Movie
                </AlertButton>
                <AlertButton message="Uploading!">
                    Upload Image
                </AlertButton>
                <br></br>
                <p>Button Created using by passing event handlers as props </p>
                <PlayButton movieName= "Race forever" />
                <UploadMovieButton />
                <br></br>
                <p>
                    Naming Event Handler Props:
                </p>
                <Button onClick={onOpeningImage}>
                 Open Image</Button>
                <Button onSendingFile={onSendingFile} >
                 Send File </Button>
                 <br></br>
                     <p>Preventing Browser Default Behaviour</p>
                 <SignUp />
                 <br></br>
                 <Link to="/gallery">Gallery </Link>
                 <br></br>
                 <Link to="/Form">Form</Link>

        </div>
      
    )
}


export default AddingInteractivity