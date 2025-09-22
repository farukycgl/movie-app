import React from "react";
import { GiFilmProjector } from "react-icons/gi";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="flex w-full items-center justify-between h-30 px-50 bg-gray-800 text-white">
      <div className="flex items-center gap-2">
        <div className="flex items-center justify-start gap-2 font-pacifico">
          <Link
            to="/"
            className="flex items-center gap-2 text-5xl text-gray-300"
          >
            <GiFilmProjector size={70} className="text-gray-300" />
            myFavie
          </Link>
        </div>
      </div>
      <div className="flex items-center justify-center gap-5 text-3xl">
        <Link to="/instagram">
          <FaInstagram className="text-red-900"/>
        </Link>
        <Link to="/facebook">
          <FaFacebookF className="text-blue-600"/>
        </Link>
        <Link to="/x">
          <FaXTwitter className="text-white"/>
        </Link>
        <Link to="/youtube">
          <FaYoutube className="text-red-600"/>
        </Link>
      </div>
      <div className="flex text-l text-gray-300 italic">
        <h1>©2025 myFavie, Inc.</h1>
      </div>
    </div>
  );
};

export default Footer;
