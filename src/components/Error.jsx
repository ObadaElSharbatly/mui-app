import React from "react";
import { Alert, AlertTitle } from "@mui/material";

function Error({ msg }) {
  //write code here

  return (
    <Alert severity="error" sx={{ borderRadius: "20px", my: "10px" }}>
      <AlertTitle>Error</AlertTitle>
      {msg} — <strong>check it out!</strong>
    </Alert>
  );
}

export default Error;
