
import { API_MOVIE_IMG } from "../../api";
import { FaStar } from "react-icons/fa";
import FavoriteButton from "./FavoriteButton";

const DetailCard = ({ detail, type }) => {
  if (!detail || Object.keys(detail).length === 0)
    return <p className="text-center text-white">Loading...</p>;

  const {
    title,
    name,
    overview,
    vote_average,
    backdrop_path,
    poster_path,
    genres,
    spoken_languages,
    release_date,
    first_air_date,
  } = detail;

  const displayTitle = title || name;
  const displayDate = release_date || first_air_date;
  const releaseYear = displayDate ? new Date(displayDate).getFullYear() : "N/A"; //Tarihi sadece year olarak tanımladık.

  return (
    <article
      /* Arka plan resmi */
      className="w-screen min-h-screen bg-cover bg-center relative"
      style={{ backgroundImage: `url(${API_MOVIE_IMG}/${backdrop_path})` }}
    >
      <div className="flex flex-col bg-black/80 min-h-screen text-amber-100">
        {/* Baslik */}
        <header className="flex flex-col items-center md:flex-row md:justify-between px-5 md:px-80 pt-20 md:pt-10">
          <h1 className="text-2xl md:text-3xl font-bold">{displayTitle}</h1>
          <span className="hidden md:block">
            <FavoriteButton movie={detail} />
          </span>
        </header>

        <main className="flex flex-col items-center md:flex-row gap-5 md:gap-10 justify-center p-5 md:p-20">
          {/* Poster kismi */}
          <div className="w-full md:w-1/4 flex justify-center">
            <img
              className="shadow-lg rounded-2xl max-h-[500px] max-w-[350px] object-contain"
              src={`${API_MOVIE_IMG}/${poster_path}`}
              alt={displayTitle}
            />
          </div>

          {/* Favori butonu - Mobil */}
          <div className="flex justify-center">
            <span className="md:hidden">
              <FavoriteButton movie={detail} />
            </span>
          </div>

          {/* Aciklamalar */}
          <div className="w-full md:w-2/3 text-lg md:text-xl flex flex-col items-center md:items-start space-y-4 max-w-2xl">
            <section className="md:mb-15 text-lg md:text-2xl text-white">
              <p>{overview}</p>
            </section>

            <section className="flex items-center">
              <p className="flex items-center gap-2">
                IMDB Raiting:
                <span className="flex items-center gap-1 text-white">
                  <FaStar className="text-yellow-400" />{" "}
                  {Number(vote_average).toFixed(1)}
                </span>
              </p>
            </section>

            <section className="flex">
              <p className="flex gap-2">
                Year:
                <span className="flex text-white">{releaseYear}</span>
              </p>
            </section>

            <section className="flex gap-2">
              <p>Genre:</p>
              <p className="flex gap-1 text-white">
                {genres?.map((genre) => genre.name).join(", ")}
              </p>
            </section>

            <section className="flex gap-2 ">
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

export default DetailCard;
