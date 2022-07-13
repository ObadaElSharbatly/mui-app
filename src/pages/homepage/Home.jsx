import SearchIcon from "@mui/icons-material/Search";
import { Box, TextField } from "@mui/material";
import React from "react";
import "./home.css";

function Home() {
  //write code here
  // search bar
  // buttons
  // movie cards with the star
  return (
    <Box sx={{ display: "flex", alignItems: "flex-end" }}>
      <SearchIcon sx={{ color: "white", mr: 1, my: 0.5 }} />
      <TextField id="input-with-sx" label="Search movie" variant="standard" />
    </Box>
  );
}

export default Home;
