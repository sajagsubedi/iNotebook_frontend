import React, { useContext } from "react";
import { Header, Home, Alert, About,Login, Signup } from "./components/index";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { GlobalContext } from "./context/index";
import { theme } from "./styles/theme.jsx";
import LoadingBar from "react-top-loading-bar";

export default function App() {
  const { progress } = useContext(GlobalContext);
  return (
    <BrowserRouter>
      <LoadingBar
        height={3}
        color={theme.colors.secondaryTheme}
        progress={progress}
      />
      <Header />
      <Alert />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
}
