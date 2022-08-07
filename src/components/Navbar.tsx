import "../styles/Navbar.css";
import { BiMenu, BiSun, BiMoon } from "react-icons/bi";
import { FaSearch, FaRegUser } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import Logo from "../photo/yt-logo.png";
import { useAppDispatch } from "./../app/hooks"; //
import { toDark, toLight } from "../app/redux/theme/themeSlice"; //

const localUser = JSON.parse(localStorage.getItem("user") || "null"); //

const Navbar = () => {  //
  const [user, setUser] = useState(localUser ? localUser : null);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  return (
    <div className="navbar">
      <div className="navbar__left">
        <BiMenu />
        <Link to="/" className="navbar__logo">
          <img src={Logo} alt="logo" />
          <h3>YouTube</h3>
        </Link>
      </div>
      <div className="navbar__mid">
        <input type="text" placeholder="Search" />
        <div className="navbar__icon">
          <FaSearch />
        </div>
      </div>
      <div className="navbar__right"> 
        <div className="navbar__mode" onClick={() => dispatch(toLight())}>
          <BiSun />
        </div>
        <div className="navbar__mode" onClick={() => dispatch(toDark())}>
          <BiMoon />
        </div>
        {user ? (
          <>
            <Link to="/profile">
              <FaRegUser />
            </Link>
            <button onClick={logout} type="submit">
              Logout
            </button>
          </>
        ) : (
          <>
            <button onClick={() => navigate("/login")}>Login</button>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
