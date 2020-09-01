import React from 'react'
import { NavLink, Link } from 'react-router-dom'

export default function FolderNav(props) {

    
        
        return (
            <div className="folder-nav">
                <ul>
                    {props.folders.map((folder) => 
                        // const folderId = folder.id
                        
                            <li key={folder.id}>
                                <NavLink className="Folder__folder-link"
                                to={`/folder/${folder.id}`}>
                                    {folder.name}
                                </NavLink>
                            </li>
                        
                    )
                    }</ul>
                <div className="addButton">
                    <button type="button">Add a folder</button>
                </div>
            </div>
        )
    }
