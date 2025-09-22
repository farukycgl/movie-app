import { Route, Routes } from "react-router";
import "./App.css";
import Home from "./pages/Home";
import Layout from "./layout/Layout";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MovieDetail from "./pages/MovieDetail";
import FavoriteMovieList from "./pages/FavoriteMovieList";

function App() {
  return (
    <div className="w-full bg-gray-100">
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:id" element={<MovieDetail />} />
          <Route path="/my-list" element={<FavoriteMovieList />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
