import React, { useState } from "react";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { wait } from "../../../utils/helpers";
function MovieCard({ Poster, Title, Type, Year, imdbID }) {
  //write code here
  const navigate = useNavigate();
  async function goToMovie() {
    await wait(500);
    navigate(`/movie/${imdbID}`);
  }

  return (
    <CardActionArea onClick={goToMovie}>
      <Card
        variant=""
        sx={{
          height: {
            md: "500px",
          },
        }}
      >
        <CardMedia
          component="img"
          sx={{
            height: "70%",
            backgroundPosition: "center",
            backgroundSize: "contain",
          }}
          image={Poster}
          alt="Paella dish"
        />
        <CardContent>
          <Typography variant="h6" color="text.secondary" fontWeight="bold">
            {Title}
          </Typography>
          <Typography variant="h6" color="text.secondary" fontSize={15}>
            {Type}
          </Typography>
          <Typography variant="h6" color="text.secondary" fontSize={15}>
            {Year}
          </Typography>
        </CardContent>
      </Card>
    </CardActionArea>
  );
}

export default MovieCard;
