import { useState } from "react";
import { education } from "./../helpers/educationOptionsList";
import { englishLevels } from "./../helpers/englishLevelsList";
import { positions } from "./../helpers/positionOptionsList";
import { workExps } from "./../helpers/workExpOptionsList";
import { workAreas } from "./../helpers/workAreaOptionsList";
import { salaries } from "./../helpers/salaryOptionsList";
import { workplaces } from "./../helpers/workplaceOptionsList";

const Business = () => {
  const [student, setStudent] = useState({
    studentRegion: "",
    studentCity: "",
    studentEducation: "",
    studentTechAndTools: "",
    studentEnglish: "",
    studentPosition: "",
    studentWorkExp: "",
    studentWorkArea: "",
    studentSalary: "",
    studentWorkplace: ""
  });

  const handleChange = (event) => {
    setStudent({ ...student, [event.target.name]: event.target.value });
  };

  const searchCandidates = (e) => {
    e.preventDefault();
    console.log("student", student);
  };

  return (
    <main className="business-body">
      <div className="container">
        <header>Пошук кандидатів</header>

        <form action="#" method="post" onSubmit={searchCandidates}>
          <div className="form first">
            <div className="details personal">
              <span className="title">Основні параметри</span>

              <div className="fields">
                <div className="input-field">
                  <label>Посада *</label>
                  <select name="studentPosition" required onChange={handleChange}>
                    <option disabled selected>
                      Оберіть необхідну посаду
                    </option>
                    {positions.map((position, index) => {
                      return <option>{position}</option>;
                    })}
                  </select>
                </div>

                <div className="input-field">
                  <label>Область роботи *</label>
                  <select name="studentWorkArea" required onChange={handleChange}>
                    <option disabled selected>
                      Оберіть область роботи
                    </option>
                    {workAreas.map((workArea, index) => {
                      return <option>{workArea}</option>;
                    })}
                  </select>
                </div>

                <div className="input-field">
                  <label>Досвід роботи *</label>
                  <select name="studentWorkExp" required onChange={handleChange}>
                    <option disabled selected>
                      Оберіть досвід роботи
                    </option>
                    {workExps.map((workExp, index) => {
                      return <option>{workExp}</option>;
                    })}
                  </select>
                </div>

                <div className="input-field">
                  <label>Технології та інструменти *</label>
                  <select
                    id="studentTechAndTools"
                    name="studentTechAndTools"
                    placeholder="Технології та інструменти"
                    required
                    onChange={handleChange}
                  >
                    <option disabled selected>
                      Технології та інструменти
                    </option>
                    <option>Київська</option>
                  </select>
                </div>

                <div className="input-field">
                  <label>Рівень англійської *</label>
                  <select required name="studentEnglish" onChange={handleChange}>
                    <option disabled selected>
                      Оберіть рівень англійської
                    </option>
                    {englishLevels.map((level, index) => {
                      return <option>{level}</option>;
                    })}
                  </select>
                </div>

                <div className="input-field">
                  <label>Рівень освіти *</label>
                  <select required name="studentEducation" onChange={handleChange}>
                    <option disabled selected>
                      Оберіть рівень освіти
                    </option>
                    {education.map((eduOption, index) => {
                      return <option>{eduOption}</option>;
                    })}
                  </select>
                </div>
              </div>
            </div>

            <div className="details ID">
              <span className="title">Додаткові параметри</span>

              <div className="fields">
                <div className="input-field">
                  <label>Область</label>
                  <select required name="studentRegion" onChange={handleChange}>
                    <option disabled selected>
                      Оберіть вашу область
                    </option>
                    <option>Київська</option>
                  </select>
                </div>

                <div className="input-field">
                  <label>Місто</label>
                  <input name="studentCity" type="text" placeholder="Введіть місто" onChange={handleChange} />
                </div>

                <div className="input-field">
                  <label>Місце роботи</label>
                  <select name="studentWorkplace" onChange={handleChange}>
                    <option disabled selected>
                      Оберіть місце роботи
                    </option>
                    {workplaces.map((workplace, index) => {
                      return <option>{workplace}</option>;
                    })}
                  </select>
                </div>

                <div className="input-field">
                  <label>Заробітна плата</label>
                  <select name="studentSalary" onChange={handleChange}>
                    <option disabled selected>
                      Оберіть заробітну плату ($)
                    </option>
                    {salaries.map((salary, index) => {
                      return <option>{salary}</option>;
                    })}
                  </select>
                </div>
              </div>

              <button className="sumbit">
                <span className="btnText">Знайти</span>
                <i className="uil uil-search"></i>
              </button>
            </div>
          </div>
        </form>
      </div>
    </main>
  );
};

export default Business;
