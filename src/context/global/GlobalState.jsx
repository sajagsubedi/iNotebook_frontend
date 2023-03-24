import GlobalContext from "./GlobalContext";
import { useState } from "react";

export default function GlobalState(props) {
  const host = "https://inotebook-backend-chi.vercel.app";
  const [progress, setProgress] = useState(0);
  const initialValue = { title: "", description: "", tag: "" };
  const [noteboxValue, setNoteBoxValue] = useState(initialValue);
  const [manipulateboxtype, setManipulateboxtype] = useState();
  const [loading, setLoading] = useState(true);
  const [manipulatebox, setManipulatebox] = useState(false);

  //to hide manipulatebox
  const changeManipulatebox = (state, type, value) => {
    const { _id, title, description, tag } = value;
    setManipulatebox(state);
    setManipulateboxtype(type);
    setNoteBoxValue({ _id, title, description, tag });
  };

  return (
    <GlobalContext.Provider
      value={{
        host,
        manipulatebox,
        changeManipulatebox,
        manipulateboxtype,
        noteboxValue,
        initialValue,
        setManipulatebox,
        progress,
        setProgress,
        loading,
        setLoading,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
}
