import {AlertContext} from "../index";
import { useState } from "react";
import { theme } from "../../styles/theme";

export default function AlertState(props) {
  const [alertState, setAlertState] = useState(false);
  const [alertmsg, setAlertmsg] = useState();
  const [alertColor, setAlertColor] = useState("");
  const [alertType, setAlertType] = useState("");
  const removeAlert = () => {
    setTimeout(() => {
      setAlertState(false);
      setAlertmsg("");
      setAlertColor("");
    }, 1000);
  };
  const showAlert = (msg, type) => {
    if (type == "success") {
      setAlertColor(theme.colors.success);
    } else {
      setAlertColor(theme.colors.error);
    }
    setAlertState(true);
    setAlertmsg(msg);
    setAlertType(type);
    removeAlert();
  };
  return (
    <AlertContext.Provider
      value={{
        alertState,
        alertmsg,
        alertColor,
        alertType,
        showAlert,
      }}
    >
      {props.children}
    </AlertContext.Provider>
  );
}
