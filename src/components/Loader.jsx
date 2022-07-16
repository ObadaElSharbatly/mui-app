import { Box, CircularProgress } from "@mui/material";
import React from "react";

function Loader() {
  //write code here

  return (
    <Box sx={{ display: "flex", justifyContent: "center", my: "10px" }}>
      <CircularProgress />
    </Box>
  );
}

export default Loader;
