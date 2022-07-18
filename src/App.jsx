import { Box, Container, Stack, Switch, Typography } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { Outlet } from "react-router-dom";
import Header from "./components/header/Header";
import { useState } from "react";
import { darkTheme, lightTheme } from "./theme/theme";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  function changeThemeMode() {
    setDarkMode(prev => !prev);
  }

  return (
    <>
      <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
        <Box bgcolor="background.default" minHeight="100vh">
          <Header />
          <Container
            sx={{
              height: "100%",
              my: "10px",
            }}
            component="main"
          >
            <Stack direction="row" spacing={1} alignItems="center">
              <Typography color="text.secondary" component="label">
                Light
              </Typography>
              <Switch
                onChange={changeThemeMode}
                color="primary"
                checked={darkMode}
              />
              <Typography color="text.secondary" component="label">
                Dark
              </Typography>
            </Stack>

            <Outlet />
          </Container>
        </Box>
      </ThemeProvider>
    </>
  );
}

export default App;
