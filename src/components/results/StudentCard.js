import "./style.css";
import { NavLink } from "react-router-dom";
import ReactCountryFlag from "react-country-flag";
import { education } from "./../../helpers/educationOptionsList";
import { englishLevels } from "./../../helpers/englishLevelsList";
import { positions } from "./../../helpers/positionOptionsList";
import { workExps } from "./../../helpers/workExpOptionsList";
import { workAreas } from "./../../helpers/workAreaOptionsList";
import { salaries } from "./../../helpers/salaryOptionsList";
import { workplaces } from "./../../helpers/workplaceOptionsList";

const StudentCard = ({ student, techAndToolsData }) => {
  const mobileNumber = "https://www.google.com.ua/search?q=" + student.mobile_number;
  const englishLevel = englishLevels[student.english_level_id - 1].name.split(" - ")[1];

  let techAndToolsIds = "";
  if (
    student.technologies_and_tools !== "" &&
    student.technologies_and_tools !== null &&
    student.technologies_and_tools !== undefined
  ) {
    techAndToolsIds = student.technologies_and_tools
      .split(",")
      .filter(function (el) {
        return el != "";
      })
      .map(Number);
  }

  let techAndToolsNames = techAndToolsData.filter((item) => techAndToolsIds.includes(item.id));

  const studentWorkExpId = student.work_experience_id - 1;
  let workExp = workExps[studentWorkExpId].name;
  switch (studentWorkExpId) {
    case 0:
      workExp = "без досвіду";
      break;
    case 1:
    case 3:
      workExp += " року";
      break;
    case 2:
      workExp += " рік";
      break;
    case 4:
    case 5:
      workExp += " роки";
      break;
    case 6:
      workExp += " років";
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
          <h4 className="position">{positions[student.position_id - 1].name}</h4>
          <p className="info">
            &#128187; {workAreas[student.work_area_id - 1].name} / &#128188; {workExp} /{" "}
            <ReactCountryFlag countryCode="GB" svg /> {englishLevel}
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
