import { useEffect, useState } from "react";
import MovieList from "../components/home/MovieList";
import SideBar from "../components/home/SideBar";
import SliderHero from "../components/home/SliderHero";

const Home = () => {
  const [selectedGenre, setSelectedGenre] = useState(null);

  return (
    <div className="pb-5 bg-gray-200">
      <div className="pb-10">
        <SliderHero />
      </div>

      <div className="">
        <div className="grid grid-cols-1 md:grid-cols-4 px-3 sm:px-5 md:px-10 w-full gap-2">
          {/* Sidebar - Mobil */}
          <div className="md:hidden flex justify-end">
            <SideBar setSelectedGenre={setSelectedGenre} />
          </div>
          <div className="col-span-3 bg-gray-200">
            <MovieList selectedGenre={selectedGenre} />
          </div>

          {/* Sidebar - Desktop */}
          <div className="hidden md:block md:mr-20 md:mt-16">
            <SideBar setSelectedGenre={setSelectedGenre} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
