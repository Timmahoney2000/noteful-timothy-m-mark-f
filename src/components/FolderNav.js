import React from 'react'
import { NavLink, Link } from 'react-router-dom'

export default class FolderNav extends React.Component {

    render() {
        console.log(this.props.props.store.folders);
        return (
            <div className="folder-nav">
                <ul>
                    {this.props.props.store.folders.map((folder) => {
                        const folderId = folder.id
                        return (
                            <li key={folderId}>
                                <NavLink className="Folder__folder-link"
                                to={`/folder/${folder.id}`}>
                                    {folder.name}
                                </NavLink>
                            </li>
                        )
                    })}
                </ul>
                <div className="addButton">
                    <button type="button">Add a folder</button>
                </div>
            </div>
        )
    }
}