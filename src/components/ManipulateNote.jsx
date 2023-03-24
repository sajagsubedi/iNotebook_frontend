import { useState, useContext } from "react";
import { ManipulateNoteSection } from "../styles/ComponentStyles";
import { NoteContext, GlobalContext } from "../context/index";

export default function ManipulateNote(props) {
  const { addNote, updateNote } = useContext(NoteContext);
  const { manipulateboxtype, noteboxValue, setManipulatebox } =
    useContext(GlobalContext);
  const [note, setNote] = useState(noteboxValue);
  //Function to change the state of input
  const handleChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const newNote = JSON.parse(JSON.stringify(note));
    if (newNote.tag.length == 0) {
      newNote.tag = "General";
    }
    //adding or updatting note using the manipulateboxtype
    if (manipulateboxtype == "Add") {
      addNote(newNote);
    } else {
      updateNote(note._id, newNote);
    }
    setManipulatebox(false);
  };

  return (
    <ManipulateNoteSection id="wholesection">
      <div className="Close">
        <button
          onClick={() => {
            setManipulatebox(false);
          }}
          className="CloseBtn"
        >
          ×
        </button>
      </div>
      <h1 className="mainText sm">{manipulateboxtype} Note</h1>
      <form className="globalForm">
        <label htmlFor="Title">Title</label>
        <input
          className="PrimaryInput title"
          name="title"
          value={note.title}
          onChange={handleChange}
          minLength="3"
          required
        />
        <label htmlFor="Description">Description</label>
        <textarea
          onChange={handleChange}
          name="description"
          value={note.description}
          className="PrimaryInput description"
          minLength="5"
          required
        ></textarea>
        <label htmlFor="Tag">Tag</label>
        <input
          onChange={handleChange}
          name="tag"
          value={note.tag}
          className="PrimaryInput tag"
        />

        <button
          disabled={note.description.length < 5 || note.title.length < 3}
          onClick={handleSubmit}
          className="PrimaryButton"
        >
          {manipulateboxtype} Note
        </button>
      </form>
    </ManipulateNoteSection>
  );
}
