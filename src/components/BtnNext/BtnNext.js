import { useState, useEffect } from "react";
import "./../../styles/main.css";
import arrowRight from "./../../img/icons/arrow-right-solid.svg";

const BtnNext = ({ page, setPage }) => {
  return (
    <button
      className="nextBtn"
      onClick={() => {
        setPage(page + 1);
      }}
    >
      <span className="btnText">Далі</span>
      <img className="arrow-right" alt="" src={arrowRight} />
    </button>
  );
};

export default BtnNext;
