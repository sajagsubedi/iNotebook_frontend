import AuthContext from "./AuthContext";
import { GlobalContext, AlertContext } from "../index";
import { useContext } from "react";

export default function AuthState(props) {
  const { showAlert } = useContext(AlertContext);
  const { host } = useContext(GlobalContext);
  //function to login
  const login = async (user) => {
    const data = await fetch(`${host}/api/auth/login`, {
      method: "POST",
      body: JSON.stringify(user),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    const response = await data.json();
    if (!response.success) {
      showAlert(response.error, "error");
      return false;
    } 
      localStorage.setItem("authToken", response.authToken);
      showAlert("Logged in successfully", "success");
      return true;
   
  };

  //function to signup
  const signup = async (user) => {
    const data = await fetch(`${host}/api/auth/signup`, {
      method: "POST",
      body: JSON.stringify(user),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    const response = await data.json();
    if (!response.authToken) {
      if (response.errors) {
        showAlert(response.errors[0].msg, "error");
      } else {
        showAlert(response.message, "error");
      }
      return false;
    } 
      localStorage.setItem("authToken", response.authToken);
      showAlert("Created a new accound and logged in successfully", "success");
      return true;
   
  };
  return (
    <AuthContext.Provider value={{ login, signup }}>
      {props.children}
    </AuthContext.Provider>
  );
}
