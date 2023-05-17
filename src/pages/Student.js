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
  console.log("we are here for regions: " + regions);
  const techAndTools = response.techAndTools;

  console.log(student);
  let englishLevel = englishLevels[student?.english_level_id - 1]?.name;
  const educationLevel = education[student?.education_level_id - 1]?.name;

  const position = positions[student?.position_id - 1]?.name;
  const workArea = workAreas[student?.work_area_id - 1]?.name;
  const workplace = workplaces[student?.workplace_id - 1]?.name;
  const salary = salaries[student?.salary_id - 1]?.name;
  const birthday = moment(new Date(student?.date_of_birth)).format("LL");
  const region = regions[student?.region_id-1]?.region_name + " область";

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
    /* TEST */
    <main className="profile-body">
      <div className="profile-container">
        <div class="profile-section-wrapper">
          <div class="profile-contacts">
            <div className="profile-contacts-bg"></div>

            <div className="profile-picture-wrapper">
              <img className="profile-picture" alt="" src={student?.profile_picture} />
            </div>
            
            <div className="profile-name">{student?.name + " " + student?.surname}</div>

            <div className="profile-contacts-details-wrapper">
              
              <div className="profile-contacts-details-div">
                <img className="cake-icon" alt="" src={cakeIcon} />
                <p className="profile-contacts-details">{birthday}</p>
              </div>

              <div className="profile-contacts-details-div">
                <img className="location-icon" alt="" src={locationIcon} />
                <div>
                  <p className="profile-contacts-details">{student?.city},</p>

                  <p className="profile-contacts-details">{region}</p>
                </div>
              </div>

              <div className="profile-contacts-details-div">
                <img className="mail-icon" alt="" src={mailIcon} />
                <p className="profile-contacts-details">{student?.email}</p>
              </div>

              <div className="profile-contacts-details-div">
                <img className="phone-icon" alt="" src={phoneIcon} />
                <p className="profile-contacts-details">{student?.mobile_number}</p>
              </div>

              <div className="profile-contacts-details-buttons">
                {student?.linkedin && (
                  <a href={student?.linkedin}>
                    <img className="linkedin" alt="" src={linkedinIcon} />
                  </a>
                )}
                {student?.github && (
                  <a href={student?.github}>
                    <img className="github" alt="" src={githubIcon} />
                  </a>
                )}
              </div>
            </div>
          </div>

          <div class="profile-first-section">
            <div className="profile-summary">
              <b className="profile-title">Про себе:</b>
              <div className="profile-details">{student?.summary}</div>
            </div>
            <div className="profile-education">
              <b className="profile-title">Освіта: </b>
              <b className="profile-details">{educationLevel}</b>
            </div>
            <div className="profile-unversity">
              <b className="profile-title">Заклад освіти:</b>
              <div className="profile-details">{student?.university}</div>
            </div>
            <div className="profile-specialty">
              <b className="profile-title">Спеціальність: </b>
              <div className="profile-details">{student?.specialty}</div>
            </div>
            <div className="profile-english">
              <b className="profile-title">Рівень англійської: </b>
              <div className="profile-details">{englishLevel}</div>
            </div>
          </div>

          <div class="profile-second-section">
            <div className="profile-position">
              <b className="profile-title">Посада: </b>
              <b className="profile-details">{position}</b>
            </div>
            <div className="profile-exp">
              <b className="profile-title">Досвід роботи: </b>
              <b className="profile-details">{workExp}</b>
            </div>
            <div className="profile-workarea">
              <b className="profile-title">Область роботи: </b>
              <b className="profile-details">{workArea}</b>
            </div>
            <div className="profile-workplace">
              <b className="profile-title">Бажане місце роботи: </b>
              <b className="profile-details">{workplace}</b>
            </div>
            <div className="profile-salary">
              <b className="profile-title">Бажана заробітня плата: </b>
              <b className="profile-details">$ {salary}</b>
            </div>
            <div className="profile-skills">
              <b className="profile-title">Технології та інструменти:</b>
              <ul className="skills-section-profile">
                {techAndToolsNames?.map((techAndTool) => {
                  return <li key={techAndTool.id}>{techAndTool.name}</li>;
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>

    /* 
    <main className="profile-body">
      <div class="profile-container">
        <div className="profile-contacts">
          <div className="profile-contacts-bg"></div>

          <img className="profile-picture" alt="" src={student?.profile_picture} />
          <b className="profile-name">{student?.name + " " + student?.surname}</b>
          <div>
            <img className="cake-2-icon" alt="" src={cakeIcon} />
            <b className="b12">{birthday}</b>
          </div>
          <div>
            <img className="pin-location-icon" alt="" src={locationIcon} />
            <b className="b13">
              <span className="txt">
                <p className="p">{student?.city},</p>
                <p className="p">Київська область</p>
              </span>
            </b>
          </div>

          <div>
            <img className="mail-icon" alt="" src={mailIcon} />
            <b className="leodicapriogmailcom">{student?.email}</b>
          </div>

          <div>
            <img className="call-phone-icon" alt="" src={phoneIcon} />
            <b className="b11">{student?.mobile_number}</b>
          </div>

          <div>
            {student?.linkedin && (
              <a href={student?.linkedin}>
                <img className="linkedin-negative" alt="" src={linkedinIcon} />
              </a>
            )}
            {student?.github && (
              <a href={student?.github}>
                <img className="github-negative" alt="" src={githubIcon} />
              </a>
            )}
          </div>
        </div>
        <div className="profile-details">
          <div className="profile-summary">
            <b className="b10">Про себе:</b>
            <div className="lorem-ipsum-dolor">{student?.summary}</div>
          </div>
          <div className="profile-education">
            <b className="b9">Освіта: </b>
            <div className="div6">{educationLevel}</div>
          </div>
          <div className="profile-unversity">
            <b className="b7">Заклад освіти:</b>
            <div className="div5">{student?.university}</div>
          </div>
          <div className="profile-specialty">
            <b className="b7">Спеціальність: </b>
            <div className="proficient-c2">{student?.specialty}</div>
          </div>
          <div className="profile-english">
            <b className="b6">Рівень англійської: </b>
            <div className="proficient-c2">{englishLevel}</div>
          </div>

          <div className="profile-position">
            <b className="b5">Посада: </b>
            <div className="div3">{position}</div>
          </div>
          <div className="profile-exp">
            <b className="b4">Досвід роботи: </b>
            <div className="div2">{workExp}</div>
          </div>
          <div className="profile-workarea">
            <b className="b3">Область роботи: </b>
            <div className="full-stack">{workArea}</div>
          </div>
          <div className="profile-workplace">
            <b className="b2">Бажане місце роботи: </b>
            <div className="div">{workplace}</div>
          </div>
          <div className="profile-salary">
            <b className="b1">Бажана заробітня плата: </b>
            <div className="div">$ {salary}</div>
          </div>
          <div className="profile-skills">
            <b className="b">Технології та інструменти:</b>
            <ul className="skills-section-profile">
              {techAndToolsNames?.map((techAndTool) => {
                return <li key={techAndTool.id}>{techAndTool.name}</li>;
              })}
            </ul>
          </div>
        </div>
      </div>
    </main>*/
  );
};

export default Student;
