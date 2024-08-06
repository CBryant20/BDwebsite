import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import { logout, selectToken } from "../features/auth/authSlice";
import "./Navbar.less";
import { useState } from "react";

export default function Navbar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const token = useSelector(selectToken);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogout = async () => {
    await dispatch(logout());
    navigate("/");
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav>
      <div id='logo'>
        <h2>Bryant Designs</h2>
      </div>
      <ul id='menu' className={menuOpen ? "open" : ""}>
        <i className='ri-close-fill' id='close' onClick={toggleMenu}></i>
        <li>
          <NavLink
            to='/mainPage'
            className={({ isActive }) => (isActive ? "active-link" : "")}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/about'
            className={({ isActive }) => (isActive ? "active-link" : "")}
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/works'
            className={({ isActive }) => (isActive ? "active-link" : "")}
          >
            Works
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/services'
            className={({ isActive }) => (isActive ? "active-link" : "")}
          >
            Services
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/email'
            className={({ isActive }) => (isActive ? "active-link" : "")}
          >
            Email Me
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/contact'
            className={({ isActive }) => (isActive ? "active-link" : "")}
          >
            Contact
          </NavLink>
        </li>
        {location.pathname === "/contact" && !token && (
          <li>
            <NavLink
              to='/login'
              className={({ isActive }) => (isActive ? "active-link" : "")}
            >
              Log In
            </NavLink>
          </li>
        )}
        {token && (
          <li>
            <button onClick={handleLogout}>Log Out</button>
          </li>
        )}
        <div className='btn'>
          <button id='nav-btn'>ORDER NOW</button>
        </div>
        <div className='social-icons'>
          <h2>Follow Me</h2>
          <div className='icon'>
            <div className='icon-container'>
              <i className='ri-facebook-fill'></i>
            </div>
            <div className='icon-container'>
              <i className='ri-twitter-fill'></i>
            </div>
            <div className='icon-container'>
              <i className='ri-instagram-fill'></i>
            </div>
            <div className='icon-container'>
              <i className='ri-linkedin-fill'></i>
            </div>
          </div>
        </div>
      </ul>
      <div className='bars' onClick={toggleMenu}>
        <i className='ri-bar-chart-horizontal-line'></i>
      </div>
    </nav>
  );
}
