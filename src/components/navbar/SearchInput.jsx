import React, { useEffect, useState } from "react";
import { BiSearch } from "react-icons/bi";
import { IoIosSearch } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { clearResults, getSearchResults } from "../../redux/slices/searchSlice";
import { API_MOVIE_IMG } from "../../api";

const SearchInput = () => {
  const [query, setQuery] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  const { results } = useSelector((state) => state.search);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const delay = setTimeout(() => {
      if (query.trim()) {
        dispatch(getSearchResults(query));
      } else {
        dispatch(clearResults());
      }
    }, 500);
    return () => clearTimeout(delay);
  }, [query, dispatch]);

  const handleSelect = (item) => {
    if (item.media_type === "movie") {
      navigate(`/movie/${item.id}`);
    } else if (item.media_type === "tv") {
      navigate(`/series/${item.id}`);
    }
    setQuery("");
    dispatch(clearResults());
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="relative">
        {/* Desktop Search */}
      <form
        className="hidden md:flex rounded-4xl border-none p-2 bg-white"
        onSubmit={(e) => e.preventDefault()}
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

      {/* Sonuclar Kutusu */}
      {query && results.length > 0 && (
        <ul className="absolute top-12 left-0 w-full bg-white shadow-lg rounded-md max-h-96 overflow-y-auto z-50">
          {results.map((item) => (
            <li key={item.id} onClick={() => handleSelect(item)} className="flex items-center gap-3 p-2 cursor-pointer hover:bg-gray-100 transition">
              <img
                src={
                  item.poster_path
                    ? `${API_MOVIE_IMG}${item.poster_path}`
                    : "https://via.placeholder.com/50x75?text=No+Image"
                }
                alt={item.title || item.name}
                className="w-10 h-14 rounded object-cover"
              />
              <span>{item.title || item.name}</span>
            </li>
          ))}
        </ul>
      )}

      {/* Arama ikonu - Mobil */}
      <div className="md:hidden flex items-center">
        <button
          className="cursor-pointer"
          onClick={() => setShowSearch(!showSearch)}
        >
          <IoIosSearch size={20} />
        </button>
      </div>

      {/* Arama kutusunu göster - Mobil */}
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
    </div>
  );
};

export default SearchInput;
