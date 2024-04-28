// components/NotesList.js
import React from 'react';

const NotesList = ({ notes, onDeleteNote }) => {
  return (
    <div className="notes-list">
      {notes.map((note) => (
        <div key={note.id} className="note">
          <h2>{note.title}</h2>
          <p>{note.content}</p>
          <button onClick={() => onDeleteNote(note.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default NotesList;
