import support from "./../../img/icons/support.svg";
import "./style.css";

import { NavLink } from "react-router-dom";

const Navbar = () => {
  
  return (
    <nav className="nav-wrapper">
      <div className="container-wide">
        <div className="row space-between align-center">
          <NavLink to="/" className="logo">
            SnB
          </NavLink>

          <div className="nav">
            <ul>
              <li>
                <NavLink to="/">Головна</NavLink>
              </li>
              <li>
                <NavLink to="/students">Студенту</NavLink>
              </li>
              <li>
                <NavLink to="/business">Роботодавцю</NavLink>
              </li>
            </ul>
          </div>

          <a
            href="https://www.google.com.ua/"
            target="_blank"
            rel="noreferrer"
            className="support"
          >
            <img src={support} alt="support" />
            допомога
          </a>
          <button className="nav-button">
            <span className="nav-button-icon"></span>
          </button>

          <div className="mobile-nav">
            <div className="nav">
              <ul>
                <li>
                  <NavLink to="/">Головна</NavLink>
                </li>
                <li>
                  <NavLink to="/students">Студенту</NavLink>
                </li>
                <li>
                  <NavLink to="/business">Роботодавцю</NavLink>
                </li>
              </ul>
            </div>
            <a
              href="https://www.google.com.ua/"
              target="_blank"
              rel="noreferrer"
              className="support"
            >
              <img src={support} alt="support" />
              допомога
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
