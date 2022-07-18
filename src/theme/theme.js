import { createTheme } from "@mui/material";
import { darkPalette, lightPalette } from "./palette";
import { lightShadows } from "./shadows";

export const lightTheme = createTheme({
  palette: lightPalette,
});

export const darkTheme = createTheme({
  shadows: lightShadows,
  palette: darkPalette,
});
