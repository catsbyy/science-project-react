import React from "react";
import { NavLink } from "react-router-dom";

const SuccessfulRegistration = () => {
  return (
    <main className="landing-body">
      <div className="container">
        <article className="main-section">
          <h1 className="landing-title">Ваша анкета успішно збережена!</h1>
          <div className="main-section-wrapper">
            <p>Роботодавець зв’яжеться з Вами, якщо ви підійдете його критеріям</p>
            <NavLink to="/">
              <button className="to-home-btn">
                <span className="btnText">На головну</span>
                <i className="uil uil-navigator"></i>
              </button>
            </NavLink>
          </div>
        </article>
      </div>
    </main>
  );
};

export default SuccessfulRegistration;
