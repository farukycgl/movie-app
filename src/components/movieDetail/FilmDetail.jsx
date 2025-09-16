import React from "react";

const FilmDetail = ({ movieDetail }) => {
  const {
    title,
    backdrop_path,
    poster_path,
    genres,
    original_title,
    original_language,
    release_date,
  } = movieDetail;

  return (
    <div>
      <p>{release_date}</p>
      <p>{title}</p>
      <img src={poster_path} alt="" />
    </div>
  );
};

export default FilmDetail;
