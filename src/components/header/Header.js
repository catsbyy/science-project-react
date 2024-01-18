import React, { useState } from "react";
import support from "./../../img/icons/support.svg";
import Modal from "../modal/Modal.js";
import "./style.css";

import { NavLink } from "react-router-dom";

import { Link, Route, Routes } from "react-router-dom";
import { AuthData } from "../../auth/AuthWrapper.js";
import { nav } from "../../pages/navigation.js";

export const RenderRoutes = () => {
  const { user } = AuthData();

  return (
    <Routes>
      {nav.map((r, i) => {
        if (r.isPrivate && user.isAuthenticated) {
          return <Route key={i} path={r.path} element={r.element} />;
        } else if (!r.isPrivate) {
          return <Route key={i} path={r.path} element={r.element} />;
        } else return false;
      })}
    </Routes>
  );
};

export const RenderMenu = () => {
  const { user, logout } = AuthData();

  const MenuItem = ({ r }) => {
    return (
      <li className="menuItem">
        <NavLink to={r.path}>{r.name}</NavLink>
      </li>
    );
  };
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
            SyncSkill
          </NavLink>

          <div className="nav">
            <ul>
              {nav.map((r, i) => {
                if (!r.isPrivate && r.isMenu) {
                  return <MenuItem key={i} r={r} />;
                } else if (user.isAuthenticated && r.isMenu) {
                  return <MenuItem key={i} r={r} />;
                } else return false;
              })}
            </ul>
          </div>

          {user.isAuthenticated ? (
            <div className="menuItem">
              <NavLink to={"#"} onClick={logout}>
                Вийти
              </NavLink>
            </div>
          ) : (
            <div className="menuItem">
              <NavLink to={"login"}>Увійти</NavLink>
            </div>
          )}

          <div onClick={toggleModal} className="support">
            <img src={support} alt="support" />
          </div>

          {modal && <Modal toggleModal={toggleModal} />}
        </div>
      </div>
    </nav>

    /*


    <div className="nav">
      {nav.map((r, i) => {
        if (!r.isPrivate && r.isMenu) {
          return <MenuItem key={i} r={r} />;
        } else if (user.isAuthenticated && r.isMenu) {
          return <MenuItem key={i} r={r} />;
        } else return false;
      })}

      {user.isAuthenticated ? (
        <div className="menuItem">
          <Link to={"#"} onClick={logout}>
            Вийти
          </Link>
        </div>
      ) : (
        <div className="menuItem">
          <Link to={"login"}>Увійти</Link>
        </div>
      )}
    </div>
    */
  );
};

/* ----------------------------- */
/*
export default function Header () {
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
            SyncSkill
          </NavLink>

          <div className="nav">
            <ul>
              <li>
                <NavLink to="/">Головна</NavLink>
              </li>
              <li>
                <NavLink to="/students">Кандидату</NavLink>
              </li>
              <li>
                <NavLink to="/business">Роботодавцю</NavLink>
              </li>
            </ul>
          </div>

          <div>
            <NavLink to="/login">Увійти</NavLink>
          </div>

          <div onClick={toggleModal} className="support">
            <img src={support} alt="support" />
          </div>

          {modal && (
            <div className="modal">
              <div onClick={toggleModal}>
                <div className="overlay">
                  <div className="modal-content">
                    <div className="modal-title">Контакти</div>
                    <div className="modal-phone">+38 099 000 00 09</div>
                    <div className="modal-email">INFO@SNB.COM</div>

                    <ul className="social-media">
                      <li>
                        <a href="https://www.instagram.com/earth/?hl=ru">
                          <img src={instagram} alt="instagram" className="modal-media" />
                        </a>
                      </li>
                      <li>
                        <a href="https://www.google.com.ua/">
                          <img src={twitter} alt="twitter" className="modal-media" />
                        </a>
                      </li>
                      <li>
                        <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley">
                          <img src={youtube} alt="youtube" className="modal-media" />
                        </a>
                      </li>
                      <li>
                        <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley">
                          <img src={telegram} alt="telegram" className="modal-media" />
                        </a>
                      </li>
                      <li>
                        <a href="https://www.facebook.com/earth/">
                          <img src={facebook} alt="facebook" className="modal-media" />
                        </a>
                      </li>
                    </ul>

                    <div className="modal-close" onClick={toggleModal}>
                      <img src={close} alt="close" className="modal-media" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};
*/
