// App.js
import React, { useState } from 'react';
import NotesList from './NoteList';
import AddNoteForm from './AddNoteForm';

const App = () => {
  const [notes, setNotes] = useState([]);

  const addNote = (newNote) => {
    setNotes([...notes, newNote]);
  };

  const deleteNote = (id) => {
    setNotes(notes.filter((note) => note.id !== id));
  };

  return (
    <div className="app">
      <h1>Notes App</h1>
      <AddNoteForm onAddNote={addNote} />
      <NotesList notes={notes} onDeleteNote={deleteNote} />
    </div>
  );
};

export default App;
