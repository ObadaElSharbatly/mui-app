import { Grid } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Error from "../../components/Error";
import Loader from "../../components/Loader";
import MoviePoster from "../../components/MoviePoster";
import { MoviesContext } from "../../contexts/MoviesContext";
import useFetch from "../../hooks/useFetch";
import MovieDetails from "./components/MovieDetails";

function SelectedMovie() {
  //write code here
  const [movieDetails, setMovieDetails] = useState(null);
  const { favoriteList, setIsFavorite } = useContext(MoviesContext);
  const { movieId } = useParams();
  const { isLoading, error, performFetch } = useFetch();
  useEffect(() => {
    const url = `https://www.omdbapi.com/?&apikey=${process.env.REACT_APP_API_KEY}&i=${movieId}`;
    performFetch(url).then(setMovieDetails);
    // check if the id is in the favorite list
    const isFavorite = favoriteList.includes(movieId);
    setIsFavorite(isFavorite);
  }, []);
  return (
    <>
      {isLoading && <Loader />}
      {error && <Error msg={error} />}
      {movieDetails && (
        <Grid container spacing={3} justifyContent="center">
          <Grid item md={5}>
            <MoviePoster Poster={movieDetails.Poster} />
          </Grid>
          <Grid item md={7}>
            <MovieDetails movieDetails={movieDetails} />
          </Grid>
        </Grid>
      )}
    </>
  );
}

export default SelectedMovie;
