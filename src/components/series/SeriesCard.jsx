import React from "react";
import { Link } from "react-router-dom";
import { API_MOVIE_IMG } from "../../api";
import { FaStar } from "react-icons/fa";

const SeriesCard = ({ serie }) => {
  const { id, name, poster_path, vote_average } = serie;

  return (
    <Link to={`/series/${id}`}>
      <div className="relative flex flex-col w-full cursor-pointer hover:scale-105 transition-transform duration-300">
        <img
          className="w-full h-auto object-cover rounded-xl md:rounded-2xl "
          src={`${API_MOVIE_IMG}/${poster_path}`}
          alt={name}
        />
        <div className="absolute top-2 right-2 w-6 h-6 md:w-8 md:h-8">
          <FaStar className="w-full h-full text-yellow-400" />
          <span className="absolute inset-0 flex items-center justify-center text-black text-[0.55rem] md:text-[0.63rem] font-bold">
            {vote_average.toFixed(1)}
          </span>
        </div>
        <div className="text-center text-sm font-semibold">{name}</div>
      </div>
    </Link>
  );
};

export default SeriesCard;
