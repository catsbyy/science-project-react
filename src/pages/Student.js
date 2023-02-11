import React from "react";
import { useState, useEffect } from "react";
import { useParams, NavLink } from "react-router-dom";
import ReactCountryFlag from "react-country-flag";
import { workExps } from "../helpers/workExpOptionsList";

const Student = () => {
  const { id } = useParams();
  const [student, setStudent] = useState({});
  const [techAndTools, setTechAndTools] = useState([]);

  useEffect(() => {
    console.log(id);
    fetch(`/get-student-details/${id}`)
      .then((response) => response.json())
      .then((response) => setStudent(response.student[0]));
    //fetch("/server")
    //  .then((response) => response.json())
    //  .then((response) => setTechAndTools(response.techAndTools));
  }, []);


  const mobileNumber = "https://www.google.com.ua/search?q=" + student.mobile_number;

  console.log(student.english_level);
  const englishLevel = "C2";
  //student?.english_level?.split(" - ")[1];
  const techAndToolsIds = [];
  //student.technologies_and_tools.split(";").filter(function (el) {
  //  return el != ""
  //}).map(Number);

  let techAndToolsNames = [];
  techAndTools.filter(item => techAndToolsIds.includes(item.id));

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
    <main className="profile-page">
      <div>
        <div className="profile-card">
          <div className="profile-picture">
            <img className="profile-img-fluid" src={student.profile_picture} />
          </div>
          <div className="profile-content">
            <h3 className="profile-name">
              {student.surname} {student.name}
            </h3>
            <h4 className="profile-position">{student.position}</h4>
            <p className="profile-info">
              &#128187; {student.work_area} / &#128188; {workExp} / <ReactCountryFlag countryCode="GB" svg />{" "}
              {englishLevel}
            </p>
          </div>

          <br />
          <p className="profile-summary">{student.summary}</p>
          <ul className="profile-skills-section">
            {techAndToolsNames.map((techAndTool) => {
              return <li key={techAndTool.id}>{techAndTool.name}</li>;
            })}
          </ul>
          <ul className="profile-social">
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
      </div>
    </main>
  );
};

export default Student;
