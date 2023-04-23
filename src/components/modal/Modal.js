import React, { useState } from "react";
import "./style.css";

export default function Modal() {
  const [modal, setModal] = useState(false);
  const toggleModal = () => {
    setModal(!modal);
  };

  if (modal) {
    document.body.classList.add("active-modal")
  }
  else {
    document.body.classList.remove("active-modal")
  }

  return (
    <main>
      <button onClick={toggleModal} className="btn-modal">
        Open
      </button>

      {modal && (
        <div className="modal">
          <div onClick={toggleModal}>
            <div className="overlay">
              <div className="modal-content">
                <h2>Hello</h2>
                <p>lorem ipsum</p>

                <button className="close-modal" onClick={toggleModal}>
                  CLOSE
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
