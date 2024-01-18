
import "./style.css";
import youtube from "./../../img/icons/youtube.png";
import telegram from "./../../img/icons/telegram.png";
import twitter from "./../../img/icons/twitter.png";
import facebook from "./../../img/icons/facebook.png";
import instagram from "./../../img/icons/instagram.png";
import close from "./../../img/icons/close_button.png";

const Modal = ({toggleModal}) => {
  return (
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
  );
};

export default Modal;
