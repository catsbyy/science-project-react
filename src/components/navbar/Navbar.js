import React, { useState } from "react";
import support from "./../../img/icons/support.svg";
import youtube from "./../../img/icons/youtube.png";
import twitter from "./../../img/icons/twitter.png";
import facebook from "./../../img/icons/facebook.png";
import instagram from "./../../img/icons/instagram.png";
import close from "./../../img/icons/close_button.png";
import "./style.css";

import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [modal, setModal] = useState(false);
  const toggleModal = () => {
    setModal(!modal);
  };

  if (modal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }

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

          <div onClick={toggleModal} className="support">
            <img src={support} alt="support" />
          </div>

          {modal && (
            <div className="modal">
              <div onClick={toggleModal}>
                <div className="overlay">
                  <div className="modal-content">
                    <div class="popup_title">Контакти</div>
                    <div class="popup_phone">+38 099 000 00 09</div>
                    <div class="popup_email">INFO@SNB.COM</div>

                    <ul className="social_media">
                      <li>
                        <a href="https://www.instagram.com/earth/?hl=ru">
                          <img src={instagram} alt="instagram" className="popup_media"/>
                        </a>
                      </li>
                      <li>
                        <a href="https://twitter.com/earth?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor">
                          <img src={twitter} alt="twitter" className="popup_media" />
                        </a>
                      </li>
                      <li>
                        <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley">
                          <img src={youtube} alt="youtube" className="popup_media" />
                        </a>
                      </li>
                      <li>
                        <a href="https://www.facebook.com/earth/">
                          <img src={facebook} alt="facebook" className="popup_media" />
                        </a>
                      </li>
                    </ul>

                    <div className="popup_close" onClick={toggleModal}>
                      <img src={close} alt="close" className="popup_media" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

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
            <a href="https://www.google.com.ua/" className="support">
              <img src={support} alt="support" />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
