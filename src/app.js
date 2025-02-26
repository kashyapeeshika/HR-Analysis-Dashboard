import React from "react";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { useMode, ColorModeContext } from "./style/theme";
import { Routes, Route } from "react-router-dom";
import Sidebar from "./global/Sidebar";
import Home from "./screens/Home";
import About from "./screens/About";
import Contacts from "./screens/Contacts";
import Graphs from "./screens/Graphs";
import Auth from "./screens/Auth";

function App() {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Sidebar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/graphs" element={<Graphs />} />
          <Route path="/auth" element={<Auth />} />
        </Routes>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
