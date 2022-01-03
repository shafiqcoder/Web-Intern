import React, { useState, createContext } from "react";
import {}

export const MovieContext = createContext();

export const MovieProvider = (props) => {
  const [movies, setmovies] = useState([
    {
      name: "Harry Potter",
      price: "$40",
      id: 324234,
    },
    {
      name: "Knives out",
      price: "$50",
      id: 32434,
    },
    {
      name: "inception",
      price: "$60",
      id: 324354,
    },
  ]);
  return (
    <MovieContext.Provider>
      <Nav />
      <MovieList />
    </MovieContext.Provider>
  );
};
