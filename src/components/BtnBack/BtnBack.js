import { useState, useEffect } from "react";
import "./../../styles/main.css";
import arrowLeft from "./../../img/icons/arrow-right-solid.svg";

const BtnBack = () => {
  const [previousPage, setPreviousPage] = useState("second");

  useEffect(() => {
    const form = document.body.querySelector("form");
    form.classList.remove("secActive");
  }, [previousPage]);

  const goToPreviousPage = () => {
    setPreviousPage("first");
  };

  return (
    <div className="backBtn" onClick={goToPreviousPage}>
      <img className="arrow-left" alt="" src={arrowLeft} />
      <span className="btnText">Назад</span>
    </div>
  );
};

export default BtnBack;
