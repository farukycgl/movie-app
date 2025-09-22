import axios from "axios";
import React, { useEffect, useState } from "react";

import Slider from "react-slick";
import { API_KEY, API_MOVIE_IMG, API_MOVIE_POPULAR } from "../../api";

const SliderHero = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios
      .get(`${API_MOVIE_POPULAR}?api_key=${API_KEY}`)
      .then((res) => {
        setMovies(res.data.results.slice(0, 3));
      })
      .catch((error) => console.error(error));
  }, []);

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="relative h-[500px]">
      <Slider {...settings}>
        {movies.map((movie) => (
          <div
            key={movie.id}
            className="relative h-[500px] w-full flex items-center justify-center"
          >
            <img
              className="h-full w-full object-cover"
              src={`${API_MOVIE_IMG}/${movie.backdrop_path}`}
              alt={movie.title}
            />
            <div className="absolute bottom-10 left-10 bg-opacity-50 bg-black text-[#E8DFCA] p-2 rounded">
              <h2 className="text-xl font-bold">{movie.title}</h2>
            </div>
          </div>
        ))}
      </Slider>
      {/* Slider'in alt dive gecerkenki yumuşaklik ayari için */}
      <div className="absolute bottom-0 left-0 w-full h-5 bg-gradient-to-t from-gray-200 to-transparent" />
    </div>
  );
};

export default SliderHero;
