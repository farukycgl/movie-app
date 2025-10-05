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
        <h1 className="pb-5 text-2xl sm:text-3xl md:text-5xl text-[#382039]">
          {selectedGenre ? selectedGenre.name : "Discover"}
        </h1>
      </div>
      <div className="">
        <ul
          className={`grid gap-5  ${
            status === "rejected"
              ? "grid-cols-1"
              : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
          }`}
        >
          {status === "pending" ? (
            <Loading />
          ) : status === "fulfilled" ? (
            movies &&
            movies.map((movie) => (
              <li>
                <MovieCard key={movie.id} movie={movie} />
              </li>
            ))
          ) : status === "rejected" ? (
            <LoadingError error={error} />
          ) : null}
        </ul>
      </div>
    </div>
  );
};

export default MovieList;
