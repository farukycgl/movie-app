import React from "react";
import MovieCard from "../components/home/MovieCard";
import { useSelector } from "react-redux";

const FavoriteMovieList = () => {
  const { favoriteMovies } = useSelector((store) => store.favorites);

  return (
    <div className="bg-zinc-900 min-h-screen">
      <ul className="flex flex-wrap justify-center gap-5 pt-20 pb-10 px-5 md:px-20">
        {favoriteMovies?.map((movie) => (
          <li className="w-[200px] md:w-[250px]">
            <MovieCard key={movie.id} movie={movie} className="text-white" />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FavoriteMovieList;
