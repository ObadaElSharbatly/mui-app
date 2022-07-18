import React, { useEffect, useState } from "react";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
  useTheme,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { wait } from "../../../utils/helpers";
function MovieCard({ Poster, Title, Type, Year, imdbID }) {
  //write code here
  const [isMouseOver, setIsMouseOver] = useState(false);

  function mouseIn() {
    setIsMouseOver(true);
    console.log("mouse in");
  }
  function mouseOut() {
    setIsMouseOver(false);
    console.log("mouse in");
  }
  const navigate = useNavigate();
  async function goToMovie() {
    await wait(500);
    navigate(`/movie/${imdbID}`);
  }
  const { shadows } = useTheme();

  return (
    <CardActionArea
      onClick={goToMovie}
      onMouseEnter={mouseIn}
      onMouseLeave={mouseOut}
    >
      <Card
        sx={{
          position: "relative",
          backgroundColor: "background.card",
          height: "450px",
          borderRadius: "10px",
          ":hover": {
            boxShadow: shadows[6],
          },
        }}
      >
        <CardMedia
          component="img"
          sx={{
            height: "100%",
            backgroundPosition: "center",
            backgroundSize: "contain",
          }}
          image={Poster}
          alt="Paella dish"
        />
        {isMouseOver && (
          <CardContent
            sx={{
              backgroundColor: "background.card",
              position: "absolute",
              bottom: 0,
              width: "100%",
            }}
          >
            <Typography variant="h6" color="text.onDark" fontWeight="bold">
              {Title}
            </Typography>
            <Typography variant="h6" color="text.secondary" fontSize={15}>
              {Type}
            </Typography>
            <Typography variant="h6" color="text.secondary" fontSize={15}>
              {Year}
            </Typography>
          </CardContent>
        )}
      </Card>
    </CardActionArea>
  );
}

export default MovieCard;
