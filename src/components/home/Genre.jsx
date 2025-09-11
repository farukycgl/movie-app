import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getGenre } from "../../redux/slices/genreSlice";

const Genre = () => {
  const { genres } = useSelector((store) => store.genre);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getGenre());
  }, []);

  return (
    <div className="">
      <ul className="flex flex-col items-center justify-center gap-5 h-screen text-amber-400">
        {genres &&
          genres.map((genre, index) => <li key={genre.id}>{genre.name}</li>)}
      </ul>
    </div>
  );
};

export default Genre;
