import React, { useState } from "react";
import { GiFilmProjector } from "react-icons/gi";
import { BiSearch } from "react-icons/bi";
import { FaHeart } from "react-icons/fa6";
import { IoMdHome } from "react-icons/io";
import { IoIosSearch } from "react-icons/io";
import { MdPerson } from "react-icons/md";
import { Form, Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = ({ onSearch }) => {
  const [query, setQuery] = useState("");
  const [showSearch, setShowSearch] = useState(false);
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
      setShowSearch(false); //arama yapıldıktan sonra gizle
    }
  };

  return (
    <div className="flex items-center h-15 md:h-20 px-5 bg-[#E8DFCA] fixed top-0 left-0 w-full z-50">
      {/* Navbar sol kolon */}
      <div className="flex items-center justify-start flex-1">
        <Link
          to="/"
          className="flex justify-center items-center gap-1 md:gap-2 text-[25px] md:text-[40px] text-red-950 font-pacifico"
        >
          <GiFilmProjector className="text-[30px] md:text-[70px]" />
          myFavie
        </Link>
      </div>

      {/* Navbar orta kolon - Desktop */}
      <div className="hidden md:flex flex-1 justify-center">
        <ul className="flex justify-center gap-5 text-2xl">
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
      <div className="flex flex-1 items-center justify-end gap-3 md:gap-5">
        {/* Arama kutusu - Desktop */}
        <form
          className="hidden md:flex rounded-4xl border-none p-2 bg-white"
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

        {/* Arama ikonu - Mobil */}
        <div className="flex items-center">
          <button
            className="md:hidden cursor-pointer"
            onClick={() => setShowSearch(!showSearch)}
          >
            <IoIosSearch size={20} />
          </button>
        </div>

        {/* Arama kutusunu göster */}
        {showSearch && (
          <form
            onSubmit={handleSubmit}
            className="md:hidden absolute top-20 w-full px-5 py-2 flex items-center justify-center rounded-b-lg"
          >
            <input
              type="text"
              className="outline-none bg-white py-2 pl-2 rounded-l-lg"
              placeholder="search..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <button
              className="bg-red-700 text-white px-3 py-2 rounded-r-lg cursor-pointer"
              type="submit"
            >
              <IoIosSearch size={25} />
            </button>
          </form>
        )}

        {/* Sag kolon iconlar - Ortak kullanım */}
        <div>
          <Link to="/">
            <IoMdHome className="text-[20px] md:text-[30px]" />
          </Link>
        </div>
        <div>
          <Link to="/login" className="">
            {/* Mobil */}
            <MdPerson className="md:hidden text-[20px]" />
            {/* Desktop */}
            <span className="hidden md:block">Login</span>
          </Link>
        </div>
        <div className="flex relative">
          <Link to="/my-list" className="cursor-pointer">
            <FaHeart className="text-red-700 text-[20px] md:text-[40px]" />{" "}
            {favoriteCounter > 0 && (
              <span className="absolute -top-2 -right-2 bg-black text-white text-[10px] md:text-xs rounded-full w-4 h-4 md:w-5 md:h-5 flex items-center justify-center">
                {favoriteCounter}
              </span>
            )}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
