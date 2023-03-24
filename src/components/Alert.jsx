import React, { useContext } from "react";
import {AlertContext} from "../context/index";
import { AlertSection } from "../styles/ComponentStyles";

export default function Alert() {
  const { alertState, alertmsg, alertColor, alertType } =
    useContext(AlertContext);
  return (
    <AlertSection color={alertColor}>
      {alertState && <div>{alertType[0].toUpperCase()+alertType.slice(1).toLowerCase() + ":" + alertmsg}</div>}
    </AlertSection>
  );
}
