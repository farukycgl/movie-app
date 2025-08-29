import MovieCard from "../components/home/MovieCard";
import NavbarCard from "../components/home/NavbarCard";
import SliderHero from "../components/home/SliderHero";

const Home = () => {
  return (
    <div className="py-5">
      <div className="pb-10">
        <SliderHero/>
      </div>

      <div className="grid grid-cols-4 w-full h-screen">
        <div className="col-span-3 bg-gray-200">
          <NavbarCard />
          <MovieCard />
        </div>

        <div className="col-span-1 bg-gray-400">
          <h1>RightHome</h1>
        </div>
      </div>
    </div>
  );
};

export default Home;
