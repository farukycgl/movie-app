import React, { useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getMovieDetailById } from "../redux/slices/detailSlice";
import {
  addToFavorite,
  removeFromFavorite,
} from "../redux/slices/favoriteListSlice";
import DetailCard from "../components/detail/DetailCard";

const Detail = () => {
  const { detail, status, error } = useSelector((store) => store.detail);

  const { id } = useParams();
  const dispatch = useDispatch();
  const { pathname } = useLocation();

  const type = pathname.includes("series") ? "series" : "movie";
  useEffect(() => {
    dispatch(getMovieDetailById({ type, id }));
  }, [id, type, dispatch]);

  if (status === "loading")
    return <p className="text-center text-white">Loading...</p>;
  if (error) return <p className="text-center text-red-500">{error}</p>;

  const handleAddFavorite = () => {
    if (!detail) return;
    const { title, name, poster_path, vote_average } = detail;
    const payload = {
      id,
      title: title || name,
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
      <DetailCard
        detail={detail}
        handleAddFavorite={handleAddFavorite}
        handleRemoveFavorite={handleRemoveFavorite}
        id={id}
        type={type}
      />
    </div>
  );
};

export default Detail;
