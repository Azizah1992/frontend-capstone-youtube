import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Explore from "./pages/Explore";
import Library from "./pages/Library";
import Login from "./pages/Login";
import SingleVideo from "./pages/SingleVideo";
import { useAppSelector } from "./app/hooks";
import "../src/styles/sidebar.css";

function App() {
  const { theme } = useAppSelector((state) => state.theme);

  return (
    <div className={`app ${theme}`}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/video/:id" element={<SingleVideo />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/library" element={<Library />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
