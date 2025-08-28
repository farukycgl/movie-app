import React from "react";
import { GiFilmProjector } from "react-icons/gi";
import { BiSearch } from "react-icons/bi";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex items-center h-30 px-5 bg-gray-600">
      <div className="flex items-center justify-start gap-2 flex-1">
        <Link to="/" className="flex justify-center items-center gap-2 text-5xl text-red-950">
          <GiFilmProjector size={70} />
          myFavie
        </Link>
      </div>

      <div className="flex-1 flex justify-center">
        <ul className="flex justify-center gap-5 text-2xl ">
          <li>
            <Link to="/movies">Filmler</Link>
          </li>
          <li>
            <Link to="/series">Diziler</Link>
          </li>
          <li>
            <Link to="/discover">Keşfet</Link>
          </li>
        </ul>
      </div>

      <div className="flex-1 flex justify-end">
        <div className="flex justify-center items-center gap-5">
          <div className="flex rounded-4xl border-none p-3 bg-amber-50">
            <input
              className="outline-none bg-transparent text-m"
              type="text"
              placeholder="Arama yapabilirsiniz..."
            />
            <button className="cursor-pointer">
              <BiSearch size={25} />
            </button>
          </div>
          <div>
            <Link to="/login" className="">
              Giriş Yap
            </Link>
          </div>
          <div>
            <Link to="/register" className="">
              Kayıt ol
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
