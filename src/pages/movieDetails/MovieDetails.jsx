import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Error from "../../components/Error";
import Loader from "../../components/Loader";
import useFetch from "../../hooks/useFetch";

function MovieDetails() {
  //write code here
  const [movieDetails, setMovieDetails] = useState(null);
  const { movieId } = useParams();
  const { isLoading, error, performFetch } = useFetch();
  useEffect(() => {
    const url = `https://www.omdbapi.com/?&apikey=${process.env.REACT_APP_API_KEY}&i=${movieId}`;
    performFetch(url).then(setMovieDetails);

    // return () => clear selected movie
  }, []);

  useEffect(() => {
    console.log("movieDetails", movieDetails);
  }, [movieDetails]);
  return (
    <>
      {isLoading && <Loader />}
      {error && <Error msg={error} />}
      <h1> welcome from MovieDetails for movie id {movieId} </h1>
    </>
  );
}

export default MovieDetails;
