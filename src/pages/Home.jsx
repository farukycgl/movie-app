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
        <div className="grid grid-cols-4 w-full gap-3">
          <div className="col-span-3 bg-gray-200">
            <MovieList selectedGenre={selectedGenre} />
          </div>

          <div className="mr-20 mt-17">
            <SideBar setSelectedGenre={setSelectedGenre} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
