import React from 'react'
//using curly bracket
const today = new Date().getDate();

function formatDate(date) {
    return new Intl.DateTimeFormat(
      'en-UK',
      { weekday: 'long' }
    ).format(date);
  }

function dateSuffix(date){
     if ( date >= 11 && date <= 13){
        return 'th'
     }
       
        switch(date % 10 ){
            case 1:
                return 'st'
            case  2:
                return 'nd'
            case  3:
                return 'rd'
            default:
                return 'th' 
            
        }            
}

function Avatar( {person, size}) {
    const source = "https://m.media-amazon.com/images/M/"
    const description = "Avatar image"
  return (
    <div>
        <h1>AVATAR</h1>
        <img
            className='avatar'
            src={ source + person.imageId + '.jpg' }
            alt={ person.name }
            width={size.width}
            height={size.height}

        />
        <br />
        Going to watch this move on { today }{ dateSuffix(today) } , { formatDate(today) }
        {/* Going to watch this move on { today }, { formatDate(today) } */}

    </div>

  )
}

export default Avatar   