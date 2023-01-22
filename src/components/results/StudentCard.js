import "./style.css";
import { NavLink } from "react-router-dom";
import ReactCountryFlag from "react-country-flag";
import { workExps } from "./../../helpers/workExpOptionsList";

const StudentCard = ({ student, techAndToolsData }) => {

  const mobileNumber = "https://www.google.com.ua/search?q=" + student.mobile_number;
  const englishLevel = student.english_level.split(" - ")[1];
  const techAndToolsIds = student.technologies_and_tools
    .split(";")
    .filter(function (el) {
      return el != "";
    })
    .map(Number);

  let techAndToolsNames = techAndToolsData.filter((item) => techAndToolsIds.includes(item.id));

  let workExp = "";
  switch (student.work_experience) {
    case workExps[0]:
      workExp = "без досвіду";
      break;
    case workExps[2]:
      workExp = workExps[2] + " рік";
      break;
    case workExps[1]:
    case workExps[3]:
      workExp = workExps[3] + " року";
      break;
    case workExps[4]:
    case workExps[5]:
    case workExps[6]:
      workExp = workExps[6] + " роки";
      break;
    case workExps[7]:
      workExp = workExps[7] + " років";
      break;
    default:
      break;
  }
  return (
    <div className="result-card">
      <NavLink to={`/student/${student.id}`} className="result-card-link">
        <div className="picture">
          <img className="img-fluid" src={student.profile_picture} />
        </div>
        <div className="result-content">
          <h3 className="name">
            {student.surname} {student.name}
          </h3>
          <h4 className="position">{student.position}</h4>
          <p className="info">
            &#128187; {student.work_area} / &#128188; {workExp} / <ReactCountryFlag countryCode="GB" svg />{" "}
            {englishLevel}
          </p>
        </div>

        <br />
        <p className="result-summary">{student.summary}</p>
        <ul className="skills-section">
          {techAndToolsNames.map((techAndTool) => {
            return <li key={techAndTool.id}>{techAndTool.name}</li>;
          })}
        </ul>
      </NavLink>
      <ul className="result-social">
        <li>
          <a href={mobileNumber} className="fa fa-phone" aria-hidden="true"></a>
        </li>
        <li>
          <a href={student.email} className="fa fa-envelope" aria-hidden="true"></a>
        </li>
        <li>
          <a href={student.github} className="fa fa-github" aria-hidden="true"></a>
        </li>
        <li>
          <a href={student.linkedin} className="fa fa-linkedin" aria-hidden="true"></a>
        </li>
      </ul>
    </div>
  );
};

export default StudentCard;
