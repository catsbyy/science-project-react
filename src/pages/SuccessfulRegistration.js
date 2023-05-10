import React from "react";
import { NavLink } from "react-router-dom";
import home from "./../img/icons/home.png";

const SuccessfulRegistration = () => {
  return (
    <main className="landing-body">
      <div className="container">
        <article className="successful-section">
          <h1 className="landing-title success-title">Вашу анкету успішно збережено!</h1>
          <p className="success-text">Роботодавець зв’яжеться з Вами, якщо ви підійдете його критеріям</p>
          <NavLink to="/">
            <button className="to-home-btn">
              <span className="success-btn-text">На головну</span>
              <img className="success-img" src={home} alt="home" />
            </button>
          </NavLink>
        </article>
      </div>
    </main>
  );
};

export default SuccessfulRegistration;
