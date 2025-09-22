import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getGenre } from "../../redux/slices/genreSlice";

const Genre = ({ setSelectedGenre }) => {
  const { genres } = useSelector((store) => store.genre);
  const dispatch = useDispatch();

  const [activeGenre, setActiveGenre] = useState(null); //tiklanan tür belirgin olması için.

  const handleActiveGenre = (genre) => {
    setSelectedGenre(genre);
    setActiveGenre(genre.id);
  };

  useEffect(() => {
    dispatch(getGenre());
  }, []);

  return (
    <div className="">
      <ul className="flex flex-col items-center justify-center gap-5 text-[#382039]">
        {genres &&
          genres.map((genre) => (
            <li
              className={`cursor-pointer hover:scale-110 transition-transform duration-200 ${
                activeGenre === genre.id ? "text-red-900 text-3xl" : null
              }`}
              onClick={() => handleActiveGenre(genre)}
              key={genre.id}
            >
              {genre.name}
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Genre;
