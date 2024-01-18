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
  );
};
