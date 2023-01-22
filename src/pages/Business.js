import { useState, useEffect } from "react";
import { education } from "./../helpers/educationOptionsList";
import { englishLevels } from "./../helpers/englishLevelsList";
import { positions } from "./../helpers/positionOptionsList";
import { workExps } from "./../helpers/workExpOptionsList";
import { workAreas } from "./../helpers/workAreaOptionsList";
import { salaries } from "./../helpers/salaryOptionsList";
import { workplaces } from "./../helpers/workplaceOptionsList";
import { NavLink, useSearchParams, useNavigate, createSearchParams } from "react-router-dom";

const Business = () => {
  const navigate = useNavigate();
  const goToResults = () => {
    navigate({
      pathname: '/results',
      search: `?${createSearchParams(Object.fromEntries(Object.entries(student).filter(([key, value]) => value != "")))}`,
    });
  };
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
                  <select name="studentPosition" required onChange={handleChange} defaultValue={0}>
                    <option disabled value={0}>
                      Оберіть необхідну посаду
                    </option>
                    {positions.map((position, index) => {
                      return <option key={index}>{position}</option>;
                    })}
                  </select>
                </div>

                <div className="input-field">
                  <label>Область роботи *</label>
                  <select name="studentWorkArea" required onChange={handleChange} defaultValue={0}>
                    <option disabled value={0}>
                      Оберіть область роботи
                    </option>
                    {workAreas.map((workArea, index) => {
                      return <option key={index}>{workArea}</option>;
                    })}
                  </select>
                </div>

                <div className="input-field">
                  <label>Досвід роботи *</label>
                  <select name="studentWorkExp" required onChange={handleChange} defaultValue={0}>
                    <option disabled value={0}>
                      Оберіть досвід роботи
                    </option>
                    {workExps.map((workExp, index) => {
                      return <option key={index}>{workExp}</option>;
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
                    defaultValue={0}
                  >
                    <option disabled value={0}>
                      Технології та інструменти
                    </option>
                    {techAndTools.map((techAndTool) => {
                      return (
                        <option key={techAndTool.id} value={techAndTool.id}>
                          {techAndTool.name}
                        </option>
                      );
                    })}
                  </select>
                </div>

                <div className="input-field">
                  <label>Рівень англійської *</label>
                  <select required name="studentEnglish" onChange={handleChange} defaultValue={0}>
                    <option disabled value={0}>
                      Оберіть рівень англійської
                    </option>
                    {englishLevels.map((level, index) => {
                      return <option key={index}>{level}</option>;
                    })}
                  </select>
                </div>

                <div className="input-field">
                  <label>Рівень освіти *</label>
                  <select required name="studentEducation" onChange={handleChange} defaultValue={0}>
                    <option disabled value={0}>
                      Оберіть рівень освіти
                    </option>
                    {education.map((eduOption, index) => {
                      return <option key={index}>{eduOption}</option>;
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
                  <select required name="studentRegion" onChange={handleChange} defaultValue={0}>
                    <option value={0}>
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
                  <label>Місто</label>
                  <input name="studentCity" type="text" placeholder="Введіть місто" onChange={handleChange}/>
                </div>

                <div className="input-field">
                  <label>Місце роботи</label>
                  <select name="studentWorkplace" onChange={handleChange}>
                    <option value={0}>
                      Оберіть місце роботи
                    </option>
                    {workplaces.map((workplace, index) => {
                      return <option key={index}>{workplace}</option>;
                    })}
                  </select>
                </div>

                <div className="input-field">
                  <label>Заробітна плата</label>
                  <select name="studentSalary" onChange={handleChange} defaultValue={0}>
                    <option value={0}>
                      Оберіть заробітну плату ($)
                    </option>
                    {salaries.map((salary, index) => {
                      return <option key={index}>{salary}</option>;
                    })}
                  </select>
                </div>
              </div>

              
                  <button className="sumbit" onClick={goToResults} type="submit">
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
