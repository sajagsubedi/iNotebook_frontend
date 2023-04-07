import NoteContext from "./NoteContext.jsx";
import { useState, useContext } from "react";
import { AlertContext, GlobalContext } from "../index";

export default function NoteState(props) {
  const initialNote = { note: [] };
  const [notes, setNotes] = useState(initialNote);
  const { showAlert } = useContext(AlertContext);
  const { setProgress, host } = useContext(GlobalContext);

  //function to fetch all notes
  const getNotes = async () => {
    if (notes.note.length == 0) {
      setProgress(10);
      const response = await fetch(`${host}/api/notes/fetchallnotes`, {
        method: "GET",
        headers: {
          auth_token: localStorage.getItem("authToken"),
        },
      });
      setProgress(50);
      let myNotes = await response.json();
      setProgress(80);
      setNotes(myNotes);
      setProgress(100);
      showAlert("Note loaded Successfully", "success");
    }
  };

  //function to add note
  const addNote =async (note) => {
    showAlert("Added note sucessfully", "success");
   let response=await fetch(`${host}/api/notes/addnote`, {
      method: "POST",
      body: JSON.stringify(note),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        auth_token: localStorage.getItem("authToken"),
      },
    });
    response=await response.json()
    let newNotes = notes.note.concat(response);
    setNotes({...notes,note:newNotes});
  };

  //Function to update Note
  const updateNote = async (id, note) => {
    let responseNote = await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: "PUT",
      body: JSON.stringify(note),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        auth_token: localStorage.getItem("authToken"),
      },
    });
    let { newNote } = await responseNote.json();
    let newNotes = notes.note;
    let updateNotes = newNotes.map((myNote) => {
      if (myNote._id == id) {
        myNote.title = newNote.title;
        myNote.description = newNote.description;
        myNote.tag = newNote.tag;
      }
      return myNote;
    });
    setNotes({ ...notes, note: updateNotes });
    showAlert("Note Upadated Successfully", "success");
  };
  const deleteNote = (id) => {
    fetch(`${host}/api/notes/deletenote/${id}`, {
      method: "DELETE",
      headers: {
        auth_token: localStorage.getItem("authToken"),
      },
    });
    let newNotes = notes.note.filter((element) => {
      return element._id !== id;
    });
    setNotes({ ...notes, note: newNotes });
    showAlert("Note Deleted Successfully", "Deleted");
  };
  return (
    <NoteContext.Provider
      value={{
        notes,
        getNotes,
        addNote,
        updateNote,
        deleteNote,
      }}
    >
      {props.children}
    </NoteContext.Provider>
  );
}
