import React, { createContext, useEffect, useState } from "react";

export const MoviesContext = createContext();
export const MoviesProvider = ({ children }) => {
  const [moviesList, setMoviesList] = useState([]);
  const [isFavorite, setIsFavorite] = useState(false);

  const [favoriteList, setFavoriteList] = useState([]);
  function addToFavoriteList(id) {
    setFavoriteList(prev => [...prev, id]);
  }

  function removeFromFavoriteList(id) {
    setFavoriteList(prev => prev.filter(item => item !== id));
  }

  function addRemoveFavorite(id) {
    if (favoriteList.includes(id)) {
      setIsFavorite(false);
      removeFromFavoriteList(id);
    } else {
      setIsFavorite(true);
      addToFavoriteList(id);
    }
  }

  const sharedValues = {
    moviesList,
    setMoviesList,
    isFavorite,
    setIsFavorite,
    favoriteList,
    setFavoriteList,
    addRemoveFavorite,
  };

  return (
    <MoviesContext.Provider value={sharedValues}>
      {children}
    </MoviesContext.Provider>
  );
};
