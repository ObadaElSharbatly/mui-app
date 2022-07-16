import * as _ from "lodash";
import { Box, Grid, IconButton, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import useFetch from "../../hooks/useFetch";
import "./home.css";
import SearchIcon from "@mui/icons-material/Search";
import Loader from "../../components/Loader";
import MovieCard from "./components/MovieCard";

function Home() {
  //write code here
  // search bar
  // buttons
  // movie cards with the star
  const [movieName, setMovieName] = useState("");
  const [movieType, setMovieType] = useState("");
  const [moviesList, setMoviesList] = useState([]);
  const { isLoading, error, performFetch } = useFetch();
  // update movie Name after typing
  const debounceMovieName = _.debounce(e => setMovieName(e.target.value), 500);

  // fetch data after typing
  useEffect(() => {
    if (movieName) {
      performFetch(
        `http://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}&s=${movieName}&type=${movieType}&page=2`
      )
        .then(data => {
          setMoviesList(data.Search);
          return data;
        })
        .then(console.log);
    }
  }, [movieName, movieType]);

  return (
    <>
      <Box sx={{ display: "flex", alignItems: "flex-end" }}>
        <SearchIcon sx={{ mr: 1, my: 0.5 }} color="icons" />
        <TextField
          id="input-with-sx"
          label="Search movie"
          variant="standard"
          autoFocus
          fullWidth
          onChange={debounceMovieName}
        />
      </Box>
      {isLoading && <Loader />}
      <Grid container spacing={2} my="10px">
        {moviesList.length > 0 &&
          moviesList.map(movie => {
            return (
              <Grid item xs={12} sm={6} md={3} key={movie.imdbID}>
                <MovieCard {...movie} />
              </Grid>
            );
          })}
      </Grid>
    </>
  );
}

export default Home;
