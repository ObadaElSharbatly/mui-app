import React, { useContext } from "react";
import { Box, Card, CardMedia, Fab, Tooltip, useTheme } from "@mui/material";
import FavoriteRoundedIcon from "@mui/icons-material/FavoriteRounded";
import FavoriteBorderRoundedIcon from "@mui/icons-material/FavoriteBorderRounded";
import { MoviesContext } from "../contexts/MoviesContext";
import { useParams } from "react-router-dom";

function MoviePoster({ Poster }) {
  //write code here
  const { movieId } = useParams();
  const { shadows } = useTheme();
  const { isFavorite, addRemoveFavorite } = useContext(MoviesContext);
  return (
    <Card
      sx={{
        position: "relative",
        backgroundColor: "background.card",
        borderRadius: "10px",
        boxShadow: shadows[3],
      }}
    >
      <Tooltip title="Add to favorite list" placement="bottom">
        <Fab
          color="primary"
          sx={{
            position: "absolute",
            top: "10px",
            left: "10px",
          }}
          onClick={() => addRemoveFavorite(movieId)}
        >
          {isFavorite ? <FavoriteRoundedIcon /> : <FavoriteBorderRoundedIcon />}
        </Fab>
      </Tooltip>
      <CardMedia image={Poster} component="img" />
    </Card>
  );
}

export default MoviePoster;
