import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMovieList } from "../../redux/slices/movieSlice";
import MovieCard from "./MovieCard";

const MovieList = () => {
  const { movies } = useSelector((store) => store.movieList);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMovieList());
  }, []);


  return (
    <div className="flex flex-row">
      <ul>
        {movies && movies.map((movie) => ( <MovieCard key={movie.id} movie={movie} />))}
      </ul>
    </div>
  );
};

export default MovieList;
