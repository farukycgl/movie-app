import React, { useState } from "react";
import Genre from "./Genre";
import { HiMenu } from "react-icons/hi";
import { useSelector } from "react-redux";

const SideBar = ({ setSelectedGenre }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { genres } = useSelector((store) => store.genre);

  return (
    <div className="relative">
      <div className="md:hidden flex flex-col items-center">
        <div>
          <p>Select Genre</p>
        </div>
        {/* Hamburger menu - Mobil */}
        <div className="md:hidden flex justify-end">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-2xl text-[#382039] cursor-pointer"
          >
            <HiMenu />
          </button>
        </div>
      </div>

      {/* Dropdown menu - Mobil */}
      {isOpen && (
        <div className="absolute right-0 bg-white shadow-md rounded-lg mt-2 z-50">
          <ul className="flex flex-col">
            {genres &&
              genres.map((genre) => (
                <li
                  key={genre.id}
                  onClick={() => {
                    setSelectedGenre(genre);
                    setIsOpen(false);
                  }}
                  className="px-4 py-2 text-left hover:bg-gray-200 cursor-pointer"
                >
                  {genre.name}
                </li>
              ))}
          </ul>
        </div>
      )}

      {/* Sidebar - Desktop */}
      <div className="hidden md:block bg-[#DECE9C] rounded-xl p-2 sm:p-3 md:p-4 sticky top-20 md:top-24">
        <Genre setSelectedGenre={setSelectedGenre} />
      </div>
    </div>
  );
};

export default SideBar;
