import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/homepage/Home";
import MovieDetails from "./pages/movieDetails/MovieDetails";
import { MoviesProvider } from "./contexts/MoviesContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <MoviesProvider>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/" element={<Home />} />
          <Route path="/movie/:movieId" element={<MovieDetails />} />
        </Route>
      </Routes>
    </MoviesProvider>
  </Router>
);
