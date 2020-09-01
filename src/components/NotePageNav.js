import React from 'react'

export default function NotePageNave(props){
    return(
        <div className='noteNav'>
     <button type= "button" role="link" onClick={()=> props.history.goBack()}>Back</button>
     {
         props.folder && (<h3>{props.folder.name}</h3>)
     }
          </div>
    )
}