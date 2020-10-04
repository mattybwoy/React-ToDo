import React from 'react';
import './App.css';
import NoteList from './NoteList'
import NoteListHook from './NoteListHook'

function App() {
  return (
    <div className="App">
        <h1>My To Do List</h1>
        {/* < NoteList/> */}
        < NoteListHook/>
    </div>
  );
}

export default App;
