import { Container } from "@mui/material";
import { Outlet } from "react-router-dom";
import Header from "./components/header/Header";

function App() {
  return (
    <>
      <Header />
      <Container sx={{ height: "100%", mt: "10px" }}>
        <Outlet />
      </Container>
    </>
  );
}

export default App;
