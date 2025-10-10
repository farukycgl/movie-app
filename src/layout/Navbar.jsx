import React from "react";
import { GiFilmProjector } from "react-icons/gi";
import { FaHeart } from "react-icons/fa6";
import { IoMdHome } from "react-icons/io";
import { MdPerson } from "react-icons/md";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import SearchInput from "../components/navbar/SearchInput";

const Navbar = () => {
  const favoriteCounter = useSelector(
    (store) => store.favorites.favoriteMovies.length
  );

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
      <div className="hidden lg:flex flex-1 justify-center">
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
        <SearchInput />

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
