import { useState, useEffect } from "react";
import "./../../styles/main.css";

const BtnNext = () => {
  const [nextPage, setNextPage] = useState("first");

  useEffect(() => {
    const form = document.body.querySelector("form");
    const allInput = form.querySelectorAll(".first input");
    //form.classList.add("secActive");
    if (
      allInput.forEach((input) => {
        if (input.value !== "") {
          form.classList.add("secActive");
        } else {
          form.classList.remove("secActive");
        }
      })
    );
  }, [nextPage]);

  const goToNextPage = () => {
    setNextPage("second");
  };

  return (
    <button className="nextBtn" onClick={goToNextPage}>
      <span className="btnText">Далі</span>
      <i className="uil uil-navigator"></i>
    </button>
  );
};

export default BtnNext;
