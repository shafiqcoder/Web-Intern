import React, { useState } from "react";
import Movie from "./Movie";

const MovieList = () => {
  return (
    <div>
      {movies.map((movie) => (
        <Movie name={movie.name} price={movie.price} key={movie.id} />
      ))}
    </div>
  );
};

export default MovieList;
