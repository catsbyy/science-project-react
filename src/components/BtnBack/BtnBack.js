import { useState, useEffect } from "react";
import "./../../styles/main.css";
import arrowLeft from "./../../img/icons/arrow-right-solid.svg";

const BtnBack = ({ page, setPage }) => {
  return (
    <button
      className="nextBtn"
      onClick={() => {
        setPage(page - 1);
      }}
    >
      <img className="arrow-left" alt="" src={arrowLeft} />
      <span className="btnText">Назад</span>
    </button>
  );
};

export default BtnBack;
