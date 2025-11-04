import { Routes, Route } from "react-router-dom";
// import Navbar from "./components/common/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import MoviePage from "./pages/MoviesPage";
import MovieDetails from "./pages/MovieDetails";
import UserProfile from "./components/user/UserProfile";
// import Sidebar from "./components/common/Sidebar";

function App() {
  return (

        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/movies" element={<MoviePage />} />
            <Route path="/movies/:id" element={<MovieDetails />} />
            <Route path="/profile/:id" element={<UserProfile />} />
          </Routes>
        </div>
  );
}

export default App;
