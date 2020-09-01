import React from 'react';
import './App.css';
import { Route } from 'react-router'
import STORE from './dummy-store'
import HomePage from './components/homePage'
import FolderNav from './components/FolderNav'

export default class App extends React.Component {
    state = {
      store: STORE,
      folders: [],
      notes: [],
      error: null,
    }

    //map the folders to the folder state?
    //map the notes to the note state?


  render() {
  return (
    <main>
      <div className="folder__nav">
          <Route path="/" component={HomePage} />
          <Route path="/" render={() =>
              <FolderNav
                props={this.state} />} />
        </div>
        <div className="list"> 
          
        </div>
    </main>
    )
  }
}
