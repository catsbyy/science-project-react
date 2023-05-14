import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import BtnNext from "../components/BtnNext/BtnNext";
import BtnBack from "../components/BtnBack/BtnBack";
import { education } from "./../helpers/educationOptionsList";
import { englishLevels } from "./../helpers/englishLevelsList";
import { positions } from "./../helpers/positionOptionsList";
import { workExps } from "./../helpers/workExpOptionsList";
import { workAreas } from "./../helpers/workAreaOptionsList";
import { salaries } from "./../helpers/salaryOptionsList";
import { workplaces } from "./../helpers/workplaceOptionsList";
import Select from "react-select";
import arrowRight from "./../img/icons/arrow-right-solid.svg";

const Students = () => {
  const [regions, setRegions] = useState([]);
  const [techAndTools, setTechAndTools] = useState([]);

  useEffect(() => {
    fetch("/server")
      .then((response) => response.json())
      .then((response) => setRegions(response.regions));
    fetch("/server")
      .then((response) => response.json())
      .then((response) => setTechAndTools(response.techAndTools));
  }, []);

  const techAndToolsOptions = [];
  techAndTools.forEach((techAndTool) => {
    const item = {
      value: `${techAndTool.id}`,
      label: `${techAndTool.name}`,
    };
    techAndToolsOptions.push(item);
  });

  const [selectedTechAndToolsOptions, setSelectedTechAndToolsOptions] = useState();
  function handleSelect(data) {
    setSelectedTechAndToolsOptions(data);
  }

  const [student, setStudent] = useState({
    studentSurname: "",
    studentName: "",
    studentPatronymic: "",
    studentDateOfBirth: "",
    studentMobNumber: "",
    studentEmail: "",
    studentRegion: "",
    studentCity: "",
    studentStreet: "",
    studentHouseNum: "",
    studentLinkedin: "",
    studentGithub: "",
    studentEducation: "",
    studentUniversity: "",
    studentSpecialty: "",
    studentTechAndTools: "",
    studentEnglish: "",
    studentSummary: "",
    studentPosition: "",
    studentWorkExp: "",
    studentWorkArea: "",
    studentSalary: "",
    studentWorkplace: "",
    studentProfilePic: "",
  });

  const handleChange = (event) => {
    setStudent({ ...student, [event.target.name]: event.target.value });
  };

  const addNewStudent = () => {
    let technologies = "";
    selectedTechAndToolsOptions.forEach((item) => {
      technologies += `${item.value};`;
    });
    student.studentTechAndTools = technologies;
    fetch("/students", {
      method: "POST",
      body: JSON.stringify(student),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((e) => {
      console.log(e);
    });
    console.log(JSON.stringify(student));
    console.log("created student", student);
  };

  return (
    <main className="students-body">
      <div className="container">
        <header>Анкета кандидата</header>

        <form action="#" name="registrationForm" method="post" onSubmit={addNewStudent}>
          <div className="form first">
            <div className="details personal">
              <span className="title">Персональні дані</span>

              <div className="fields">
                <div className="input-field">
                  <label>Прізвище *</label>
                  <input
                    name="studentSurname"
                    type="text"
                    placeholder="Введіть ваше прізвище"
                    required
                    onChange={handleChange}
                  />
                </div>

                <div className="input-field">
                  <label>Ім'я *</label>
                  <input
                    name="studentName"
                    type="text"
                    placeholder="Введіть ваше ім'я"
                    required
                    onChange={handleChange}
                  />
                </div>

                <div className="input-field">
                  <label>По-батькові *</label>
                  <input
                    name="studentPatronymic"
                    type="text"
                    placeholder="Введіть ваше по-батькові"
                    required
                    onChange={handleChange}
                  />
                </div>

                <div className="input-field">
                  <label>Дата народження *</label>
                  <input
                    name="studentDateOfBirth"
                    type="date"
                    placeholder="Enter birth date"
                    required
                    onChange={handleChange}
                  />
                </div>

                <div className="input-field">
                  <label>Мобільний номер *</label>
                  <input
                    name="studentMobNumber"
                    type="number"
                    placeholder="Введіть мобільний номер"
                    required
                    onChange={handleChange}
                  />
                </div>

                <div className="input-field">
                  <label>Електронна пошта *</label>
                  <input
                    name="studentEmail"
                    type="email"
                    placeholder="Введіть електронну пошту"
                    required
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>

            <div className="details address">
              <span className="title">Адреса та додаткові контакти</span>

              <div className="fields">
                <div className="input-field">
                  <label>Область *</label>

                  <select required name="studentRegion" onChange={handleChange}>
                    <option disabled selected>
                      Оберіть вашу область
                    </option>
                    {regions.map((region) => {
                      return (
                        <option key={region.id} value={region.id}>
                          {region.region_name}
                        </option>
                      );
                    })}
                  </select>
                </div>

                <div className="input-field">
                  <label>Місто *</label>
                  <input
                    name="studentCity"
                    type="text"
                    placeholder="Введіть ваше місто"
                    required
                    onChange={handleChange}
                  />
                </div>

                <div className="input-field">
                  <label>Вулиця *</label>
                  <input
                    name="studentStreet"
                    type="text"
                    placeholder="Введіть вашу вулицю"
                    required
                    onChange={handleChange}
                  />
                </div>

                <div className="input-field">
                  <label>Номер будинку *</label>
                  <input
                    name="studentHouseNum"
                    type="text"
                    placeholder="Введіть номер будинку"
                    required
                    onChange={handleChange}
                  />
                </div>

                <div className="input-field">
                  <label>LinkedIn</label>
                  <input
                    name="studentLinkedin"
                    type="url"
                    placeholder="Введіть посилання на LinkedIn"
                    onChange={handleChange}
                  />
                </div>

                <div className="input-field">
                  <label>GitHub</label>
                  <input
                    name="studentGithub"
                    type="url"
                    placeholder="Введіть посилання на GitHub"
                    onChange={handleChange}
                  />
                </div>
              </div>

              <BtnNext />
            </div>
          </div>

          <div className="form second">
            <div className="details educationAndWork">
              <span className="title">Освіта</span>

              <div className="fields">
                <div className="input-field">
                  <label>Рівень освіти *</label>
                  <select required name="studentEducation" onChange={handleChange}>
                    <option disabled selected>
                      Оберіть рівень освіти
                    </option>
                    {education.map((eduOption) => {
                      return (
                        <option key={eduOption.id} value={eduOption.id}>
                          {eduOption.name}
                        </option>
                      );
                    })}
                  </select>
                </div>

                <div className="input-field">
                  <label>Заклад освіти *</label>
                  <input
                    name="studentUniversity"
                    type="text"
                    placeholder="Введіть заклад освіти"
                    required
                    onChange={handleChange}
                  />
                </div>

                <div className="input-field">
                  <label>Спеціальність</label>
                  <input
                    name="studentSpecialty"
                    type="text"
                    placeholder="Введіть спеціальність"
                    onChange={handleChange}
                  />
                </div>

                <div className="input-field" id="input-field-technologies">
                  <label>Технології та інструменти *</label>
                  <Select
                    className="custom-selection"
                    options={techAndToolsOptions}
                    placeholder="Технології та інструменти"
                    id="studentTechAndTools"
                    name="studentTechAndTools"
                    required
                    onChange={handleSelect}
                    value={selectedTechAndToolsOptions}
                    isSearchable={true}
                    isMulti
                  />
                  {/*<select
                    id="studentTechAndTools"
                    name="studentTechAndTools"
                    placeholder="Технології та інструменти"
                    required
                    onChange={handleChange}
                  >
                    <option disabled selected>
                      Технології та інструменти
                    </option>
                    {techAndTools.map((techAndTool) => {
                      return (
                        <option key={techAndTool.id} value={techAndTool.id}>
                          {techAndTool.name}
                        </option>
                      );
                    })}
                  </select>*/}
                </div>

                <div className="input-field">
                  <label>Рівень англійської *</label>
                  <select required name="studentEnglish" onChange={handleChange}>
                    <option disabled selected>
                      Оберіть рівень англійської
                    </option>
                    {englishLevels.map((level) => {
                      return (
                        <option key={level.id} value={level.id}>
                          {level.name}
                        </option>
                      );
                    })}
                  </select>
                </div>

                <div className="input-field">
                  <label>Коротка розповідь про себе</label>
                  <input
                    name="studentSummary"
                    type="text"
                    placeholder="Опис декількома реченнями"
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>
            <div className="details work">
              <span className="title">Робота</span>

              <div className="fields">
                <div className="input-field">
                  <label>Посада *</label>
                  <select required name="studentPosition" onChange={handleChange}>
                    <option disabled selected>
                      Оберіть посаду
                    </option>
                    {positions.map((position) => {
                      return (
                        <option key={position.id} value={position.id}>
                          {position.name}
                        </option>
                      );
                    })}
                  </select>
                </div>

                <div className="input-field">
                  <label>Досвід роботи *</label>
                  <select required name="studentWorkExp" onChange={handleChange}>
                    <option disabled selected>
                      Оберіть досвід роботи
                    </option>
                    {workExps.map((workExp, index) => {
                      return (
                        <option key={workExp.id} value={workExp.id}>
                          {workExp.name}
                        </option>
                      );
                    })}
                  </select>
                </div>

                <div className="input-field">
                  <label>Область роботи *</label>
                  <select required name="studentWorkArea" onChange={handleChange}>
                    <option disabled selected>
                      Оберіть область роботи
                    </option>
                    {workAreas.map((workArea) => {
                      return (
                        <option key={workArea.id} value={workArea.id}>
                          {workArea.name}
                        </option>
                      );
                    })}
                  </select>
                </div>

                <div className="input-field">
                  <label>Очікувана заробітна плата</label>
                  <select name="studentSalary" onChange={handleChange}>
                    <option disabled selected>
                      Оберіть заробітну плату ($)
                    </option>
                    {salaries.map((salary) => {
                      return (
                        <option key={salary.id} value={salary.id}>
                          {salary.name}
                        </option>
                      );
                    })}
                  </select>
                </div>

                <div className="input-field">
                  <label>Місце роботи</label>
                  <select name="studentWorkplace" onChange={handleChange}>
                    <option disabled selected>
                      Оберіть місце роботи
                    </option>
                    {workplaces.map((workplace) => {
                      return (
                        <option key={workplace.id} value={workplace.id}>
                          {workplace.name}
                        </option>
                      );
                    })}
                  </select>
                </div>

                <div className="input-field">
                  <label>Профільна картинка</label>
                  <input
                    name="studentProfilePic"
                    type="url"
                    placeholder="Введіть посилання на картинку"
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="buttons">
                <BtnBack />

                <button className="sumbit" onClick={addNewStudent}>
                  <NavLink id="sumbit-link" to="/success">
                    <span className="btnText">Підтвердити</span>
                  </NavLink>
                  <img className="arrow-right" alt="" src={arrowRight} />
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </main>
  );
};

export default Students;
