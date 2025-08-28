import { Route, Routes } from "react-router";
import "./App.css";
import Home from "./pages/Home";
import Layout from "./layout/Layout";

function App() {
  return (
    <div className="w-full h-full bg-amber-200">
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
