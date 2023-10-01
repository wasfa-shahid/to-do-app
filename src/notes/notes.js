// Notes.js
import React from "react";
import "./Notes.css"; // Import your CSS file

function Notes({ notes, onDelete }) {
  return (
    <div>
      {notes.map((note, index) => (
        <div key={index} className="NoteItem">
          {note}
          <button onClick={() => onDelete(index)} className="DeleteButton">
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default Notes;
