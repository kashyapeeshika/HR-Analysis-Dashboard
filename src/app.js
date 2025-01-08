import React from "react";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { useMode, ColorModeContext } from "./themes/useMode";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./sidebar";
import Home from "./screens/";
import About from "./screens/About";
import Contacts from "./screens/Contacts";
import Graphs from "./screens/Graphs";

function App() {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Router>
          <Sidebar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/About" element={<About />} />
            <Route path="/Contacts" element={<Contacts />} />
            <Route path="/Graphs" element={<Graphs />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
    