import React from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";

const Footer = () => {
  const theme = useTheme(); // Access the theme

  // Defensive check for theme properties
  const backgroundColor = theme?.palette?.neutral?.light || "#f5f5f5"; 
  const textColor = theme?.palette?.primary?.main || "#000"; 
  const borderColor = theme?.palette?.neutral?.main || "#ddd"; 

  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor, 
        color: textColor, 
        position: "sticky",
        bottom: 0,
        mt: "auto",
        boxShadow: "none", 
        borderTop: `1px solid ${borderColor}`,
      }}
    >
      <Toolbar>
        <Typography
          variant="body1"
          align="center"
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexGrow: 1,
            fontFamily: theme?.typography?.fontFamily || "Arial, sans-serif", 
            fontSize: theme?.typography?.fontSize || 12, 
          }}
        >
          © {new Date().getFullYear()}, Made by Covert Works
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Footer;
