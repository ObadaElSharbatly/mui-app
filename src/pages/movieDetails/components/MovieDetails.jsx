import { Button, Grid, Rating, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useContext, useState } from "react";
import MovieInfo from "./MovieInfo";
import FavoriteRoundedIcon from "@mui/icons-material/FavoriteRounded";
import FavoriteBorderRoundedIcon from "@mui/icons-material/FavoriteBorderRounded";
import { MoviesContext } from "../../../contexts/MoviesContext";

function MovieDetails({ movieDetails }) {
  const {
    Title,
    Year,
    imdbRating,
    Country,
    Genre,
    Language,
    Plot,
    Runtime,
    imdbID,
  } = movieDetails;
  const { isFavorite, addRemoveFavorite } = useContext(MoviesContext);
  return (
    <Box color="text.primary">
      <Typography variant="h4" component="h3" color="primary">
        {Title}
      </Typography>
      <Typography variant="h5" component="p" color="primary" mb={3}>
        ({Year})
      </Typography>

      <MovieInfo
        title="Movie produced in"
        content={`${Country} - (${Language})`}
      />
      <MovieInfo title="Categories" content={Genre} />
      <MovieInfo title="Movie is about" content={Plot} />
      <MovieInfo title="Movie time" content={Runtime} />
      <MovieInfo
        title="Rating"
        isElement
        content={
          <Grid container alignItems="center" ml={3}>
            <Grid item>
              <Typography component="span" variant="h6" mr={1}>
                {imdbRating}
              </Typography>
            </Grid>
            <Grid item>
              <Rating
                name="read-only"
                value={Number(imdbRating)}
                max={10}
                precision={0.1}
                readOnly
              />
            </Grid>
          </Grid>
        }
      />
      <Button
        variant="contained"
        color="primary"
        endIcon={
          isFavorite ? <FavoriteRoundedIcon /> : <FavoriteBorderRoundedIcon />
        }
        fullWidth
        onClick={() => addRemoveFavorite(imdbID)}
      >
        add to favorite
      </Button>
    </Box>
  );
}

export default MovieDetails;
