import React, { useState } from "react";
import Genre from "./Genre";
import { HiMenu } from "react-icons/hi";

const SideBar = ({ setSelectedGenre }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      {/* Hamburger menu - Mobil icin */}
      <div className="md:hidden flex justify-end p-2">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-2xl text-[#382039]"
        >
          <HiMenu />
        </button>
      </div>

      {/* Dropdown menu - Mobil */}
      {isOpen && (
        <div className="md:hidden absolute top-10 left-0 right-0 bg-[#DECE9C] rounded-xl p-4 z-50 ">
          <Genre setSelectedGenre={setSelectedGenre} />
        </div>
      )}

      {/* Sidebar - Desktop icin */}
      <div className="hidden md:block bg-[#DECE9C] rounded-xl p-2 sm:p-3 md:p-4 sticky top-20 md:top-24">
        <Genre setSelectedGenre={setSelectedGenre} />
      </div>
    </div>
  );
};

export default SideBar;
