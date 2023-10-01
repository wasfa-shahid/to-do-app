// App.js
import './App.css';
import { useState, useEffect } from 'react';
import Notes from './notes/notes';
import AddNote from './addnote/AddNote';

function App() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const storedNotes = JSON.parse(localStorage.getItem('notes'));
    if (storedNotes) {
      setNotes(storedNotes);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes));
  }, [notes]);

  const addNoteHandler = (newNote) => {
    setNotes([...notes, newNote]);
  }

  const deleteNoteHandler = (index) => {
    const newNotes = [...notes];
    newNotes.splice(index, 1);
    setNotes(newNotes);
  }

  return (
    <div className="App">
      <h1>To-Do App</h1>
      <div className="Notes">
        <Notes notes={notes} onDelete={deleteNoteHandler} />
      </div>
      <div className="AddNote">
        <AddNote onAdd={addNoteHandler} />
      </div>
    </div>
  );
}

export default App;
