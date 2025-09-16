import React, { useEffect } from "react";
import FilmDetail from "../components/movieDetail/FilmDetail";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getMovieDetailById } from "../redux/slices/movieDetailSlice";

const MovieDetail = () => {
  const { movieDetail } = useSelector((store) => store.movieDetail);

  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMovieDetailById(id));
  }, [id, dispatch]);

  return (
    <div>
      <FilmDetail movieDetail={movieDetail} />
    </div>
  );
};

export default MovieDetail;
