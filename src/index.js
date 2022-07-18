import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/homepage/Home";
import { MoviesProvider } from "./contexts/MoviesContext";
import SelectedMovie from "./pages/movieDetails/SelectedMovie";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <MoviesProvider>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/" element={<Home />} />
          <Route path="/movie/:movieId" element={<SelectedMovie />} />
        </Route>
      </Routes>
    </MoviesProvider>
  </Router>
);
