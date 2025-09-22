import { Link } from "react-router-dom";
import { API_MOVIE_IMG } from "../../api";
import { FaStar } from "react-icons/fa";


const MovieCard = ({ movie, className }) => {
  const { id, title, poster_path, vote_average } = movie;

  return (
    <Link to={`/${id}`}>
      <div className="relative flex flex-col cursor-pointer w-full h-full hover:scale-105 transition-transform duration-300">
        <img
          className="w-full h-full object-cover rounded-2xl"
          src={`${API_MOVIE_IMG}/${poster_path}`}
          alt={title}
        />
        <div className="absolute top-2 right-2 w-8 h-8">
          <FaStar className="w-full h-full text-yellow-400"/> 
          <span className="absolute inset-0 flex items-center justify-center text-black text-[0.63rem] font-bold">{vote_average.toFixed(1)}</span>
        </div>
        <div className={`text-center text-sm font-semibold ${className}`}>
          {title}
        </div>
      </div>
    </Link>
  );
};

export default MovieCard;
