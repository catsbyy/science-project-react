import "./style.css";

const HomeCard = ({type, link, text}) => {
    return (
        <a href={link}>
            <div className={type}>
              <p className="user-type-text">{text}</p>
            </div>
          </a>
     );
}
 
export default HomeCard;