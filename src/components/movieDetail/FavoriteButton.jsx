import React from "react";
import { GiHearts } from "react-icons/gi";
import { TiDelete } from "react-icons/ti";
import { useDispatch, useSelector } from "react-redux";
import {
  addToFavorite,
  removeFromFavorite,
} from "../../redux/slices/favoriteListSlice";

const FavoriteButton = ({ movie }) => {
  const dispatch = useDispatch();
  // AddFavorite - RemoveFavorite butonu gorunurluk tercihi.
  const isFavorite = useSelector((store) =>
    store.favorites.favoriteMovies?.some((m) => m.id === movie.id)
  );

  const handleToggleFavorite = () => {
    if (!movie) return;
    if (isFavorite) {
      dispatch(removeFromFavorite({ id: movie.id }));
    } else {
      const { id, title, poster_path, vote_average } = movie;
      dispatch(addToFavorite({ id, title, poster_path, vote_average }));
    }
  };
  return (
    <div>
      <button
        onClick={handleToggleFavorite}
        className="h-10 w-45 rounded-md border border-amber-300 text-amber-300 flex justify-center items-center gap-1 cursor-pointer hover:bg-amber-500 hover:text-black hover:font-bold transition-all duration-200"
      >
        {isFavorite ? (
          <>
            <TiDelete size={35} className="text-gray-600" /> Remove Favorite
          </>
        ) : (
          <>
            <GiHearts size={30} className="text-red-500" /> Add Favorite
          </>
        )}
      </button>
    </div>
  );
};

export default FavoriteButton;
