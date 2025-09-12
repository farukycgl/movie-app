import { API_MOVIE_IMG } from "../../api";

const MovieCard = ({ movie }) => {

const {id, title, poster_path, vote_average} = movie;

  return (
    <div className="flex flex-col cursor-pointer w-full h-full hover:scale-105 transition-transform duration-300">
      <img className="w-full h-full object-cover rounded-2xl" src={`${API_MOVIE_IMG}/${poster_path}`} alt={title} />
      <div className="text-center text-sm font-semibold">{title}</div>
    </div>
  );
};

export default MovieCard;
