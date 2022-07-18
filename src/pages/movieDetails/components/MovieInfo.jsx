import { Box, Typography } from "@mui/material";
import React from "react";

function MovieInfo({ title, content, isElement = false }) {
  //write code here
  return (
    <Box mb={3}>
      <Typography component="p" variant="body1" color="text.secondary">
        {title}
      </Typography>
      {isElement ? (
        content
      ) : (
        <Typography component="p" variant="h6" ml={3}>
          {content}
        </Typography>
      )}
    </Box>
  );
}

export default MovieInfo;
