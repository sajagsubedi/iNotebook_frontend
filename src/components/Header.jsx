import React, { useEffect,useContext } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import {NoteContext} from "../context/index"

const Header = () => {
const {setNotes}=useContext(NoteContext)
  const navigate = useNavigate();
  const offFunc = () => {
    const navigation = document.getElementById("navigation");
    navigation.classList.remove("active");
  };
  const HeaderOff = () => {
    const anchorTags = document.querySelectorAll(".menu li a");
    for (let i = 0; i < anchorTags.length; i++) {
      anchorTags[i].addEventListener("click", offFunc);
    }
  };
  const ToggleMenu = () => {
    const navigation = document.getElementById("navigation");
    navigation.classList.toggle("active");
  };
  useEffect(HeaderOff, []);

  const logout = () => {
    localStorage.removeItem("authToken");
    offFunc();
    navigate("/login");
    setNotes({note:[]})
  };
  return (
    <header>
      <nav>
        <div id="navigation" className="navigation">
          <div className="phoneVisible">
            <div className="appnameBx">
              <p className="appname">iNotebook</p>
            </div>
            <div
              id="menuToggle"
              className="menuToggle"
              onClick={ToggleMenu}
            ></div>
          </div>
          <div className="nav-links">
            <ul className="menu">
              <div className="firstMenuHalf">
                <li>
                  <Link
                    className={useLocation().pathname == "/" ? "active" : ""}
                    to="/"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    className={
                      useLocation().pathname == "/about" ? "active" : ""
                    }
                    to="/about"
                  >
                    About
                  </Link>
                </li>
              </div>
              <div className="secondHalf">
                {localStorage.getItem("authToken") ? (
                  <li>
                    <button onClick={logout} className="PrimaryButton">
                      Logout
                    </button>
                  </li>
                ) : (
                  <>
                    <li>
                      <Link to="/login" className="PrimaryButton">
                        Login
                      </Link>
                    </li>
                    <li>
                      <Link to="/signup" className="PrimaryButton">
                        Signup
                      </Link>
                    </li>
                  </>
                )}
              </div>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
