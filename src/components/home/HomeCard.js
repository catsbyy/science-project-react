import "./style.css";
import { NavLink } from "react-router-dom";

const HomeCard = ({type, link, text}) => {
    return (
        <NavLink to={link}>
            <div className={type}>
              <p className="user-type-text">{text}</p>
            </div>
          </NavLink>
     );
}
 
export default HomeCard;