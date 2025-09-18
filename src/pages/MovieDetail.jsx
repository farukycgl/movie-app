import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getMovieDetailById } from "../redux/slices/movieDetailSlice";
import MovieDetailCard from "../components/movieDetail/MovieDetailCard";
import {
  addToFavorite,
  removeFromFavorite,
} from "../redux/slices/favoriteListSlice";

const MovieDetail = () => {
  const { movieDetail } = useSelector((store) => store.movieDetail);

  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMovieDetailById(id));
  }, [id, dispatch]);

  const handleAddFavorite = () => {
    if (!movieDetail) return;
    const { title, poster_path, vote_average } = movieDetail;
    const payload = {
      id,
      title,
      poster_path,
      vote_average,
    };
    dispatch(addToFavorite(payload));
  };

  const handleRemoveFavorite = () => {
    const payload = { id };
    dispatch(removeFromFavorite(payload));
  };

  return (
    <div className="">
      <MovieDetailCard
        movieDetail={movieDetail}
        handleAddFavorite={handleAddFavorite}
        handleRemoveFavorite={handleRemoveFavorite}
        id={id}
      />
    </div>
  );
};

export default MovieDetail;
