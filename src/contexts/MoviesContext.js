import React, { createContext, useState } from "react";

export const MoviesContext = createContext();
export const MoviesProvider = ({ children }) => {
  const [moviesList, setMoviesList] = useState([]);
  const sharedValues = {
    moviesList,
    setMoviesList,
  };

  return (
    <MoviesContext.Provider value={sharedValues}>
      {children}
    </MoviesContext.Provider>
  );
};
