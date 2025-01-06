import { createContext, useContext, useMemo, useState } from "react";
import { createTheme } from "@mui/material/styles";

// Color tokens used in the project
export const colorTokens = (mode) => ({
  ...(mode === "dark"
    ? {
        white: {
          100: "#fdfdfd",
          200: "#fbfbfb",
          300: "#f9f9f9",
          400: "#f7f7f7",
          500: "#f5f5f5",
          600: "#c4c4c4",
          700: "#939393",
          800: "#626262",
          900: "#313131",
        },
        blue: {
          100: "#dce8ed",
          200: "#b9d1db",
          300: "#96bac8",
          400: "#73a3b6",
          500: "#508ca4",
          600: "#407083",
          700: "#305462",
          800: "#203842",
          900: "#101c21",
        },
        red: {
          100: "#fcdada",
          200: "#f9b4b4",
          300: "#f58f8f",
          400: "#f26969",
          500: "#ef4444",
          600: "#bf3636",
          700: "#8f2929",
          800: "#601b1b",
          900: "#300e0e",
        },
        orange: {
          100: "#fdecce",
          200: "#fbd89d",
          300: "#f9c56d",
          400: "#f7b13c",
          500: "#f59e0b",
          600: "#c47e09",
          700: "#935f07",
          800: "#623f04",
          900: "#312002",
        },
        teal: {
          100: "#cff1e6",
          200: "#9fe3cd",
          300: "#70d5b3",
          400: "#40c79a",
          500: "#10b981",
          600: "#0d9467",
          700: "#0a6f4d",
          800: "#064a34",
          900: "#03251a",
        },
      }
    : {
        white: {
          100: "#313131",
          200: "#626262",
          300: "#939393",
          400: "#c4c4c4",
          500: "#f5f5f5",
          600: "#fbfbfb",
          700: "#fcfcfc",
          800: "#fdfdfd",
          900: "#ffffff",
        },
        blue: {
          100: "#101c21",
          200: "#203842",
          300: "#305462",
          400: "#407083",
          500: "#508ca4",
          600: "#73a3b6",
          700: "#96bac8",
          800: "#b9d1db",
          900: "#dce8ed",
        },
        red: {
          100: "#300e0e",
          200: "#601b1b",
          300: "#8f2929",
          400: "#bf3636",
          500: "#ef4444",
          600: "#f26969",
          700: "#f58f8f",
          800: "#f9b4b4",
          900: "#fcdada",
        },
        orange: {
          100: "#312002",
          200: "#623f04",
          300: "#935f07",
          400: "#c47e09",
          500: "#f59e0b",
          600: "#f7b13c",
          700: "#f9c56d",
          800: "#fbd89d",
          900: "#fdecce",
        },
        teal: {
          100: "#03251a",
          200: "#064a34",
          300: "#0a6f4d",
          400: "#0d9467",
          500: "#10b981",
          600: "#40c79a",
          700: "#70d5b3",
          800: "#9fe3cd",
          900: "#cff1e6",
        },
      }),
});

// Get design tokens for the theme
const getDesignTokens = (mode) => {
  const colors = colorTokens(mode);
  return {
    palette: {
      mode,
      primary: {
        main: colors.blue[500],
      },
      secondary: {
        main: colors.teal[500],
      },
      neutral: {
        dark: colors.white[700],
        main: colors.white[500],
        light: colors.white[100],
      },
      background: {
        default: mode === "dark" ? colors.white[900] : colors.white[100],
      },
    },
    typography: {
      fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
      fontSize: 12,
      h1: {
        fontSize: "3rem",
        fontWeight: 700,
        lineHeight: 1.2,
        letterSpacing: "-0.02em",
      },
      h2: {
        fontSize: "2.5rem",
        fontWeight: 600,
        lineHeight: 1.3,
        letterSpacing: "-0.01em",
      },
      h3: {
        fontSize: "2rem",
        fontWeight: 600,
        lineHeight: 1.4,
      },
      h4: {
        fontSize: "1.75rem",
        fontWeight: 500,
        lineHeight: 1.5,
      },
      h5: {
        fontSize: "1.5rem",
        fontWeight: 500,
        lineHeight: 1.6,
      },
      h6: {
        fontSize: "1.25rem",
        fontWeight: 500,
        lineHeight: 1.6,
      },
      body1: {
        fontSize: "1rem",
        fontWeight: 400,
        lineHeight: 1.5,
      },
      body2: {
        fontSize: "0.875rem",
        fontWeight: 400,
        lineHeight: 1.43,
      },
    },
  };
};

// Context for color mode
// This creates the react context .This will make the way to share the theme mode without using the props at every level
//Here it is a empty function , but will be replaced with the useMode hook

export const ColorModeContext = createContext({
  toggleColorMode: () => {},
});

// Hook to use mode
// State for Mode 
export const useMode = () => {
  const [mode, setMode] = useState("dark");

// Toggle function 
// colorMode is a memorized object that contain toggleColorMode. 
// toggleColorMode will updates the mode state by flipping the values between light and dark

// useMemo ensures that the colorMode object is only recalculated when its dependencies change.
  const colorMode = useMemo(
    () => ({
      toggleColorMode: () =>
        setMode((prev) => (prev === "light" ? "dark" : "light")),
    }),
    []
  );
// theme is a Material-UI theme object created using the createTheme function.
// getDesignTokens(mode):
// This function generates the theme tokens (like colors, typography) based on the current mode (light or dark).
// Why useMemo?
// The theme is only recalculated when mode changes. This improves performance by avoiding unnecessary re-renders.
  const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  return [theme, colorMode];
};
