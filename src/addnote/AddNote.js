import { useState } from "react";

function AddNote({ onAdd }) {
  const [addedNote, setAddedNote] = useState("");

  const onSubmitHandler = (event) => {
    event.preventDefault();
    onAdd(addedNote);
    setAddedNote(""); // Clear the input field after adding the note
  }
    
  const onInputHandler = (event) => {
    setAddedNote(event.target.value);
  }

  return (
    <form onSubmit={onSubmitHandler}>
      <div>
        <input type="text" placeholder="Type a note" onChange={onInputHandler} value={addedNote} /><br/>
        <button type="submit">Add Note</button>
      </div>
    </form>
  )
}

export default AddNote;
