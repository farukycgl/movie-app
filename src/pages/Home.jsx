


import MovieList from "../components/home/MovieList";
import NavbarCard from "../components/home/NavbarCard";
import SideBar from "../components/home/SideBar";
import SliderHero from "../components/home/SliderHero";

const Home = () => {
  return (
    <div className="py-5 my-5">
      <div className="pb-10">
        <SliderHero />
      </div>

      <div className="mx-50">
        <div className="grid grid-cols-4 w-full h-screen gap-3">
          <div className="col-span-3 bg-gray-200">
            <NavbarCard />
            <MovieList/>
          </div>

          <div className="col-span-1 bg-gray-400">
            <SideBar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
