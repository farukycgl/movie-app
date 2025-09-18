import React from "react";
import { API_MOVIE_IMG } from "../../api";
import { FaStar } from "react-icons/fa";
import { GiHearts } from "react-icons/gi";
import { TiDelete } from "react-icons/ti";
import { useSelector } from "react-redux";

const MovieDetailCard = ({
  movieDetail,
  handleAddFavorite,
  handleRemoveFavorite,
  id,
}) => {
  const {
    title,
    overview,
    vote_average,
    backdrop_path,
    poster_path,
    genres,
    original_title,
    spoken_languages,
    release_date,
  } = movieDetail;

  const releaseDate = new Date(release_date); //Tarihi sadece year olarak tanımladık.

  // AddFavorite - RemoveFavorite butonu gorunurluk tercihi.
  const isFavorite = useSelector((store) =>
    store.favorites.favoriteMovies?.some((movie) => movie.id === id)
  );

  return (
    <article
      /* Arka plan resmi */
      className="w-screen min-h-screen bg-cover bg-center relative"
      style={{ backgroundImage: `url(${API_MOVIE_IMG}/${backdrop_path})` }}
    >
      <div className="bg-black/80 min-h-screen text-amber-100">
        {/* Baslik */}
        <header className="flex justify-between px-80 pt-10">
          <h1 className="text-3xl font-bold">{title}</h1>
          <button
            onClick={isFavorite ? handleRemoveFavorite : handleAddFavorite}
            className="rounded-md border border-amber-300 text-amber-300 px-4 py-2 flex items-center gap-1 cursor-pointer hover:bg-amber-500 hover:text-black hover:font-bold transition-all duration-200"
          >
            {isFavorite ? (
              <>
                <TiDelete size={30} className="text-gray-600" /> Remove Favorite
              </>
            ) : (
              <>
                <GiHearts size={30} className="text-red-500" /> Add Favorite
              </>
            )}
          </button>
        </header>

        <main className="flex gap-10 justify-center p-20">
          {/* Sol taraftaki poster kismi */}
          <div className="w-1/4 flex justify-center">
            <img
              className="shadow-lg rounded-2xl max-h-[500px] max-w-[350px] object-contain"
              src={`${API_MOVIE_IMG}/${poster_path}`}
              alt={title}
            />
          </div>

          {/* Sag taraftaki aciklamalar */}
          <div className="w-2/3 flex flex-col space-y-4 max-w-2xl">
            <section className="mb-15 text-2xl text-white">
              <p>{overview}</p>
            </section>

            <section className="flex">
              <p className="flex items-center gap-1">
                IMDB Raiting:
                <span className="flex items-center gap-1 text-white">
                  <FaStar className="text-yellow-500" />{" "}
                  {Number(vote_average).toFixed(1)}
                </span>
              </p>
            </section>

            <section className="flex">
              <p className="flex gap-1">
                Year:
                <span className="flex text-white">
                  {releaseDate.getFullYear()}
                </span>
              </p>
            </section>

            <section className="flex gap-1">
              <p>Genre:</p>
              <p className="flex gap-1 text-white">
                {genres?.map((genre) => genre.name).join(", ")}
              </p>
            </section>

            <section className="flex gap-1">
              <p>Language: </p>
              <p className="text-white">
                {spoken_languages?.map((language) => language.name).join(", ")}
              </p>
            </section>
          </div>
        </main>
      </div>
    </article>
  );
};

export default MovieDetailCard;
