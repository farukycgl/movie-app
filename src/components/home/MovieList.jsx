import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMovieList } from "../../redux/slices/movieSlice";
import MovieCard from "./MovieCard";

const MovieList = () => {
  const { movies, isLoading } = useSelector((store) => store.movieList);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMovieList());
  }, []);

  return (
    <div className="">
      <ul className="grid grid-cols-3 gap-5 justify-items-center">
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          movies &&
          movies.map((movie) => <MovieCard key={movie.id} movie={movie} />)
        )}
      </ul>
    </div>
  );
};

export default MovieList;
