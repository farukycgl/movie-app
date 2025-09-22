import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getMovieList,
  getMovieListByGenre,
} from "../../redux/slices/movieSlice";
import MovieCard from "./MovieCard";
import Loading from "../Loading";
import LoadingError from "../LoadingError";

const MovieList = ({ selectedGenre }) => {
  const { movies, status, error } = useSelector((store) => store.movieList);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!selectedGenre) {
      dispatch(getMovieList());
    } else {
      dispatch(getMovieListByGenre(selectedGenre.id));
    }
  }, [selectedGenre, dispatch]);

  return (
    <div className="">
      <div>
        <h1 className="flex pl-30 pb-5 text-5xl text-[#382039]">
          {selectedGenre ? selectedGenre.name : "Discover"}
        </h1>
      </div>
      <div className="ml-50 mr-5">
        <ul
          className={`grid gap-5 justify-items-center ${
            status === "rejected" ? "grid-cols-1" : "grid-cols-3"
          }`}
        >
          {status === "pending" ? (
            <Loading />
          ) : status === "fulfilled" ? (
            movies &&
            movies.map((movie) => <MovieCard key={movie.id} movie={movie} />)
          ) : status === "rejected" ? (
            <LoadingError error={error} />
          ) : null}
        </ul>
      </div>
    </div>
  );
};

export default MovieList;
