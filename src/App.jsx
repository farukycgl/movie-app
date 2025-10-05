import { Route, Routes } from "react-router";
import "./App.css";
import Home from "./pages/Home";
import Layout from "./layout/Layout";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import FavoriteMovieList from "./pages/FavoriteMovieList";
import Series from "./pages/Series";
import Detail from "./pages/Detail";

function App() {
  return (
    <div className="w-full bg-gray-100">
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movie/:id" element={<Detail />} />
          <Route path="/series/:id" element={<Detail/>}/>
          <Route path="/my-list" element={<FavoriteMovieList />} />
          <Route path="/series" element={<Series/>} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
