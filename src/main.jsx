import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { NoteState, AlertState, GlobalState, AuthState } from "./context/index";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme.jsx";
import GlobalStyle from "./styles/GlobalStyles";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
  <GlobalState>
    <AlertState>
  <AuthState>
      <NoteState>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <App />
        </ThemeProvider>
      </NoteState>
      </AuthState>
    </AlertState>
    </GlobalState>
  </React.StrictMode>
);
