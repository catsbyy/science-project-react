import React from "react";
import moment from "moment/moment";
import { useState, useEffect } from "react";
import { useParams, NavLink } from "react-router-dom";
import ReactCountryFlag from "react-country-flag";
import { education } from "./../helpers/educationOptionsList";
import { englishLevels } from "./../helpers/englishLevelsList";
import { positions } from "./../helpers/positionOptionsList";
import { workExps } from "./../helpers/workExpOptionsList";
import { workAreas } from "./../helpers/workAreaOptionsList";
import { salaries } from "./../helpers/salaryOptionsList";
import { workplaces } from "./../helpers/workplaceOptionsList";
import locationIcon from "./../img/icons/pinlocation.svg";
import phoneIcon from "./../img/icons/callphone.svg";
import mailIcon from "./../img/icons/mail.svg";
import linkedinIcon from "./../img/icons/linkedin--negative.svg";
import githubIcon from "./../img/icons/github--negative.svg";
import frameIcon from "./../img/icons/ellipse-1@2x.png";
import cakeIcon from "./../img/icons/cake2.svg";

const Student = () => {
  const { id } = useParams();
  const [student, setStudent] = useState({});
  const [response, setResponse] = useState([]);

  useEffect(() => {
    console.log(id);
    fetch(`/get-student-details/${id}`)
      .then((response) => response.json())
      .then((response) => setStudent(response.student[0]));
    console.log(student);
    fetch("/server")
      .then((response) => response.json())
      .then((response) => setResponse(response));
  }, []);

  const regions = response.regions;
  const techAndTools = response.techAndTools;

  console.log(student);
  let englishLevel = englishLevels[student?.english_level_id - 1]?.name;
  const educationLevel = education[student?.education_level_id - 1]?.name;

  const position = positions[student?.position_id - 1]?.name;
  const workArea = workAreas[student?.work_area_id - 1]?.name;
  const workplace = workplaces[student?.workplace_id - 1]?.name;
  const salary = salaries[student?.salary_id - 1]?.name;
  const birthday = moment(new Date(student?.date_of_birth)).format("LL");

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

  console.log(techAndToolsIds);

  let techAndToolsNames = techAndTools?.filter((item) => techAndToolsIds?.includes(item.id));

  console.log("names: " + techAndToolsNames);

  const studentWorkExpId = student?.work_experience_id - 1;

  let workExp = workExps[studentWorkExpId]?.name;
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
    <main className="profile-body">
      <div class="profile-container">
        <div className="rectangle-parent">
          <div className="frame-child"></div>
          <b className="b13">
            <span className="txt">
              <p className="p">{student?.city},</p>
              <p className="p">Київська область</p>
            </span>
          </b>
          <b className="b14">{student?.name + " " + student?.surname}</b>
          <img className="frame-item" alt="" src={student?.profile_picture} />
          <img className="cake-2-icon" alt="" src={cakeIcon} />
          <b className="b11">{student?.mobile_number}</b>
          <b className="leodicapriogmailcom">{student?.email}</b>
          <b className="b12">{birthday}</b>
          <img className="pin-location-icon" alt="" src={locationIcon} />
          <img className="call-phone-icon" alt="" src={phoneIcon} />
          <img className="mail-icon" alt="" src={mailIcon} />
          <div>
            <img className="linkedin-negative" alt="" src={linkedinIcon} />
            <img className="github-negative" alt="" src={githubIcon} />
          </div>
        </div>

        <div className="skill-9-parent">
          <b className="b">Технології та інструменти:</b>
          <ul className="skills-section-profile">
            {techAndToolsNames?.map((techAndTool) => {
              return <li key={techAndTool.id}>{techAndTool.name}</li>;
            })}
          </ul>
        </div>
        <div className="parent6">
          <b className="b10">Про себе:</b>
          <div className="lorem-ipsum-dolor">{student?.summary}</div>
        </div>
        <div className="parent5">
          <b className="b9">Освіта: </b>
          <div className="div6">{educationLevel}</div>
        </div>
        <div className="parent4">
          <b className="b7">Заклад освіти:</b>
          <div className="div5">{student?.university}</div>
        </div>
        <div className="parent3">
          <b className="b7">Спеціальність: </b>
          <div className="proficient-c2">{student?.specialty}</div>
        </div>
        <div className="parent2">
          <b className="b6">Рівень англійської: </b>
          <div className="proficient-c2">{englishLevel}</div>
        </div>

        <div className="parent1">
          <b className="b5">Посада: </b>
          <div className="div3">{position}</div>
        </div>
        <div className="frame-div">
          <b className="b4">Досвід роботи: </b>
          <div className="div2">{workExp}</div>
        </div>
        <div className="parent7">
          <b className="b3">Область роботи: </b>
          <div className="full-stack">{workArea}</div>
        </div>
        <div className="group">
          <b className="b2">Бажане місце роботи: </b>
          <div className="div">{workplace}</div>
        </div>
        <div className="parent">
          <b className="b1">Бажана заробітня плата: </b>
          <div className="div">$ {salary}</div>
        </div>
      </div>
    </main>
  );
};

export default Student;
