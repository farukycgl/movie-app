import React, { useState } from "react";
import { GiFilmProjector } from "react-icons/gi";
import { BiSearch } from "react-icons/bi";
import { FaHeart } from "react-icons/fa6";
import { IoMdHome } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = ({onSearch}) => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const favoriteCounter = useSelector(
    (store) => store.favorites.favoriteMovies.length
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim()) {
      onSearch(query);
      navigate("/search");
      setQuery("");
    }
  };

  return (
    <div className="flex items-center h-20 px-5 bg-[#E8DFCA] fixed top-0 left-0 w-full z-50">
      {/* Navbar sol kolon */}
      <div className="flex items-center justify-start gap-2 flex-1">
        <Link
          to="/"
          className="flex justify-center items-center gap-2 text-[40px] text-red-950 font-pacifico"
        >
          <GiFilmProjector size={70} />
          myFavie
        </Link>
      </div>

      {/* Navbar orta kolon */}
      <div className="flex-1 flex justify-center">
        <ul className="flex justify-center gap-5 text-2xl ">
          <li>
            <Link to="/">Films</Link>
          </li>
          <li>
            <Link to="/series">Series</Link>
          </li>
          <li>
            <Link to="/discover">Discover</Link>
          </li>
        </ul>
      </div>

      {/* Navbar sag kolon */}
      <div className="flex-1 flex justify-end">
        <div className="flex justify-center items-center gap-5">
          {/* Arama kutusu */}
          <form
            className="flex rounded-4xl border-none p-2 bg-amber-50"
            onSubmit={handleSubmit}
          >
            <input
              className="outline-none bg-transparent text-m"
              type="text"
              placeholder="search.."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <button className="cursor-pointer" type="submit">
              <BiSearch size={25} />
            </button>
          </form>
          <div>
            <Link to="/">
              <IoMdHome size={30} />
            </Link>
          </div>
          <div>
            <Link to="/login" className="">
              Login
            </Link>
          </div>
          <div className="flex relative">
            <Link to="/my-list" className="cursor-pointer">
              <FaHeart size={40} className="text-red-700" />{" "}
              {favoriteCounter > 0 && (
                <span className="absolute -top-2 -right-2 bg-black text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {favoriteCounter}
                </span>
              )}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
