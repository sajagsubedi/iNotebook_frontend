import { useContext } from "react";
import {
  NoteItem,
  NoteHead,
  TagBox,
  ManipulateBox,
  NoteBody,
} from "../styles/ComponentStyles";
import { CiEdit } from "react-icons/ci";
import { NoteContext, GlobalContext } from "../context/index";
import { MdDelete } from "react-icons/md";

export default function NoteComponent(props) {
  const {deleteNote} = useContext(NoteContext);
  const {  changeManipulatebox } = useContext(GlobalContext);
  return (
    <NoteItem>
      <NoteHead>
        <TagBox>{props.note.tag}</TagBox>
        <ManipulateBox>
          <CiEdit
            onClick={() => {
              changeManipulatebox(true, "Update", props.note);
            }}
          />
          <MdDelete
            onClick={() => {
              deleteNote(props.note._id);
            }}
          />
        </ManipulateBox>
      </NoteHead>
      <NoteBody>
        <h3>{props.note.title}</h3>
        <p>-{props.note.description}</p>
      </NoteBody>
    </NoteItem>
  );
}
