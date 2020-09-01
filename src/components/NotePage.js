import React from 'react'
import Note from './Note'


export default function NotePage(props) {
    return (
        <div className="notePage">
            <Note 
            id={props.note.id}
            name={props.note.name}
            modified={props.note.modified} 
            />
            <div className="note__content">
                {props.note.content.split(/\n \r|\n/).map((info, i) => 
                    <p key={i}>{info}</p>

                )}
            </div>
        </div>
    )
}