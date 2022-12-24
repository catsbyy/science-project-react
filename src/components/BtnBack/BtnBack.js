import { useState, useEffect } from "react";
import "./../../styles/main.css";

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
      <i className="uil uil-navigator"></i>
      <span className="btnText">Назад</span>
    </div>
  );
};

export default BtnBack;
