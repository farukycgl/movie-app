import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getMovieDetailById } from "../redux/slices/movieDetailSlice";
import MovieDetailCard from "../components/movieDetail/MovieDetailCard";

const MovieDetail = () => {
  const { movieDetail } = useSelector((store) => store.movieDetail);

  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMovieDetailById(id));
  }, [id, dispatch]);

  return (
    <div className="">
      <MovieDetailCard movieDetail={movieDetail} />
    </div>
  );
};

export default MovieDetail;
