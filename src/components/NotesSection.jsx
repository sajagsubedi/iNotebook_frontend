import React, { useContext, useEffect } from "react";
import { NotesBlock, AddNoteBlock } from "../styles/ComponentStyles";
import { NoteContext, GlobalContext } from "../context/index";
import { useNavigate } from "react-router-dom";
import { NoteComponent, ManipulateNote, Spinner } from "./index";

export default function NotesSection() {
  const { notes, getNotes } = useContext(NoteContext);
  const { loading, setLoading, changeManipulatebox, manipulatebox ,initialValue} =
    useContext(GlobalContext);
  const navigate = useNavigate();
  //fetching notes
  useEffect(() => {
    const fetchFunc = async () => {
      let token = localStorage.getItem("authToken");
      if (!token) {
        return navigate("/login");
      }
      await getNotes();
      setLoading(false);
    };
    fetchFunc();
  }, []);
  return (
    <section className="Container">
      <AddNoteBlock>
        <button
          className="PrimaryButton"
          onClick={() => {
            changeManipulatebox(true, "Add", initialValue);
          }}
        >
          Add a note +
        </button>
      </AddNoteBlock>
      {manipulatebox && <ManipulateNote />}
      <h1 className="mainText"> Your Notes</h1>
      {loading && <Spinner />}
      <NotesBlock>
        {notes.note.length == 0 && !loading ? (
          <h5 className="sm">Welcome to iNotebook. Add notes to view</h5>
        ) : (
          notes.note.map((element, i) => {
            return <NoteComponent key={i} note={element} />;
          })
        )}
      </NotesBlock>
    </section>
  );
}
