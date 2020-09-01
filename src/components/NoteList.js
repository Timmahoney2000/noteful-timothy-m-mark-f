import React from 'react'
import Note from './Note'

export default function NoteList(props) {
    return (
        <div className="main-list">
            <ul>
                {props.notes.map(note =>
                    <li key={note.id} >
                        <Note 
                        id={note.id}
                        name={note.name}
                        modified={note.modified}
                        />
                    </li>
                )}
            </ul>
        </div>
    )
}