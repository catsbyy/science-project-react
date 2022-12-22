import cart from "./../../img/icons/cart.svg";
import "./style.css";

const Navbar = () => {
  return (
    <nav className="nav-wrapper">
      <div className="container-wide">
        <div className="row space-between align-center">
          <a href="/">
            <div className="logo">SnB</div>
          </a>

          <div className="nav">
            <ul>
              <li>
                <a href="/">Головна</a>
              </li>
              <li>
                <a href="/students">Студенту</a>
              </li>
              <li>
                <a href="/business">Роботодавцю</a>
              </li>
            </ul>
          </div>

          <a
            href="https://shop.lanadelrey.polydor.co.uk/?utm_campaign=LanaDelRey20190730&utm_content=&utm_medium=owned&utm_source=Website&utm_linkurl=Lana.lnk.to%2FStore&utm_board=lana-del-rey&utm_country=GB&utm_referrer=www.lanadelrey.com%2F"
            target="_blank"
            rel="noreferrer"
            className="store"
          >
            <img src={cart} alt="cart" />
            щось
          </a>
          <button className="nav-button">
            <span className="nav-button-icon"></span>
          </button>

          <div className="mobile-nav">
            <div className="nav">
              <ul>
                <li>
                  <a href="/">Головна</a>
                </li>
                <li>
                  <a href="/students">Студенту</a>
                </li>
                <li>
                  <a href="/business">Роботодавцю</a>
                </li>
              </ul>
            </div>
            <a
              href="https://shop.lanadelrey.polydor.co.uk/?utm_campaign=LanaDelRey20190730&utm_content=&utm_medium=owned&utm_source=Website&utm_linkurl=Lana.lnk.to%2FStore&utm_board=lana-del-rey&utm_country=GB&utm_referrer=www.lanadelrey.com%2F"
              target="_blank"
              rel="noreferrer"
              className="store"
            >
              <img src={cart} alt="cart" />
              щось
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
