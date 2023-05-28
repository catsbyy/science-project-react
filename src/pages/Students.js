import { NavLink, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import Select from "react-select";
import BtnNext from "../components/BtnNext/BtnNext";
import BtnBack from "../components/BtnBack/BtnBack";
import { education } from "./../helpers/educationOptionsList";
import { englishLevels } from "./../helpers/englishLevelsList";
import { positions } from "./../helpers/positionOptionsList";
import { workExps } from "./../helpers/workExpOptionsList";
import { workAreas } from "./../helpers/workAreaOptionsList";
import { salaries } from "./../helpers/salaryOptionsList";
import { workplaces } from "./../helpers/workplaceOptionsList";
import { inputRegex } from "./../helpers/inputRegex";
import { emailRegex } from "./../helpers/emailRegex";
import { linkRegex } from "./../helpers/linkRegex";
import { phoneRegex } from "./../helpers/phoneRegex";

import arrowRight from "./../img/icons/arrow-right-solid.svg";
import warning from "./../img/icons/warning.svg";

const Students = () => {
  const [response, setResponse] = useState([]);

  useEffect(() => {
    fetch("/server")
      .then((response) => response.json())
      .then((response) => setResponse(response));
  }, []);
  let regions = response?.regions || [];
  let techAndTools = response?.techAndTools || [];

  const techAndToolsOptions = [];
  techAndTools.forEach((techAndTool) => {
    const item = {
      value: `${techAndTool.id}`,
      label: `${techAndTool.name}`,
    };
    techAndToolsOptions.push(item);
  });

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    mode: "all",
  });

  const [selectedTechAndToolsOptions, setSelectedTechAndToolsOptions] = useState();
  function handleSelect(data) {
    setSelectedTechAndToolsOptions(data);
  }

  const [page, setPage] = useState(0);
  const navigate = useNavigate();

  const [isFormInvalid, setIsFormInvalid] = useState(false);

  const addNewStudent = (data) => {
    const student = {
      studentSurname: data.studentSurname,
      studentName: data.studentName,
      studentPatronymic: data.studentPatronymic,
      studentDateOfBirth: data.studentDateOfBirth,
      studentMobNumber: data.studentMobNumber,
      studentEmail: data.studentEmail,
      studentRegion: data.studentRegion,
      studentCity: data.studentCity,
      studentStreet: data.studentStreet,
      studentHouseNum: data.studentHouseNum,
      studentLinkedin: data.studentLinkedin,
      studentGithub: data.studentGithub,
      studentEducation: data.studentEducation,
      studentUniversity: data.studentUniversity,
      studentSpecialty: data.studentSpecialty,
      studentTechAndTools: data.studentTechAndTools,
      studentEnglish: data.studentEnglish,
      studentSummary: data.studentSummary,
      studentPosition: data.studentPosition,
      studentWorkExp: data.studentWorkExp,
      studentWorkArea: data.studentWorkArea,
      studentSalary: data.studentSalary,
      studentWorkplace: defaultValue(data.studentWorkplace, "3"),
      studentProfilePic: defaultValue(
        data.studentProfilePic,
        "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Windows_10_Default_Profile_Picture.svg/2048px-Windows_10_Default_Profile_Picture.svg.png"
      ),
    };

    let technologies = "";
    selectedTechAndToolsOptions.forEach((item) => {
      technologies += `${item.value};`;
    });
    student.studentTechAndTools = technologies;

    if (!isDataInvalid(student)) {
      fetch("/students", {
        method: "POST",
        body: JSON.stringify(student),
        headers: {
          "Content-Type": "application/json",
        },
      }).then((e) => {
        console.log(e);
      });
      navigate("/success");
    } else {
      setIsFormInvalid(true);
    }
  };

  const isDataInvalid = (student) => {
    const optionalFields = [
      "studentLinkedin",
      "studentGithub",
      "studentSpecialty",
      "studentSummary",
      "studentSalary",
      "studentWorkplace",
      "studentProfilePic",
    ];

    const textFields = [
      "studentSurname",
      "studentName",
      "studentPatronymic",
      "studentCity",
      "studentStreet",
      "studentHouseNum",
      "studentEducation",
      "studentUniversity",
    ];

    let isInvalid = false;

    for (const [key, value] of Object.entries(student)) {
      let isValueNotEmpty = value !== "" && value !== null && value !== undefined;

      if (!optionalFields.includes(key)) {
        if (isValueNotEmpty) {
          /* check required fields for regex match  */
          if (textFields.includes(key)) {
            if (!inputRegex.test(value)) {
              isInvalid = true;
            }
          } else if (key === "studentDateOfBirth") {
            if (new Date(value) >= new Date()) {
              isInvalid = true;
            }
          } else if (key === "studentMobNumber") {
            if (!phoneRegex.test(value)) {
              isInvalid = true;
            }
          } else if (key === "studentEmail") {
            if (!emailRegex.test(value)) {
              isInvalid = true;
            }
          }
        } else {
          /* set invalid, because required field is empty */
          isInvalid = true;
        }
      } else {
        /* if optional fields are not empty, check for regex match */
        if (key === optionalFields[0] || key === optionalFields[1] || key === optionalFields[6]) {
          if (!linkRegex.test(value)) {
            isInvalid = true;
          }
        } else if (key === optionalFields[2] || key === optionalFields[3])
          if (!inputRegex.test(value)) {
            isInvalid = true;
          }
      }
    }
    return isInvalid;
  };

  function defaultValue(value, defaultValue) {
    if (value === "" || value === null || value === undefined) {
      return defaultValue;
    } else {
      return value;
    }
  }

  return (
    <main className="students-body">
      <div className="container">
        <header>Анкета кандидата</header>

        <form action="#" name="registrationForm" method="post" onSubmit={handleSubmit(addNewStudent)}>
          {page === 0 && (
            <div className="form first">
              <div className="details personal">
                <span className="title">Персональні дані</span>

                <div className="fields">
                  <div className="input-field">
                    <label className={errors?.studentSurname ? "input-label-invalid" : "input-label"}>Прізвище *</label>
                    <input
                      {...register("studentSurname", {
                        required: true,
                        pattern: {
                          value: inputRegex,
                        },
                      })}
                      className={errors?.studentSurname ? "input-field-invalid" : ""}
                      name="studentSurname"
                      type="text"
                      placeholder="Введіть ваше прізвище"
                    />
                  </div>

                  <div className="input-field">
                    <label className={errors?.studentName ? "input-label-invalid" : "input-label"}>Ім'я *</label>
                    <input
                      {...register("studentName", {
                        required: true,
                        pattern: {
                          value: inputRegex,
                        },
                      })}
                      className={errors?.studentName ? "input-field-invalid" : ""}
                      type="text"
                      placeholder="Введіть ваше ім'я"
                    />
                  </div>

                  <div className="input-field">
                    <label className={errors?.studentPatronymic ? "input-label-invalid" : "input-label"}>
                      По-батькові *
                    </label>
                    <input
                      {...register("studentPatronymic", {
                        required: true,
                        pattern: {
                          value: inputRegex,
                        },
                      })}
                      className={errors?.studentPatronymic ? "input-field-invalid" : ""}
                      type="text"
                      placeholder="Введіть ваше по-батькові"
                    />
                  </div>

                  <div className="input-field">
                    <label className={errors?.studentDateOfBirth ? "input-label-invalid" : "input-label"}>
                      Дата народження *
                    </label>
                    <input
                      {...register("studentDateOfBirth", {
                        required: true,
                        validate: (dateValue) => {
                          return new Date(dateValue) < new Date();
                        },
                      })}
                      className={errors?.studentDateOfBirth ? "input-field-invalid" : ""}
                      type="date"
                      placeholder="Enter birth date"
                    />
                  </div>

                  <div className="input-field">
                    <label className={errors?.studentMobNumber ? "input-label-invalid" : "input-label"}>
                      Мобільний номер *
                    </label>
                    <input
                      {...register("studentMobNumber", {
                        required: true,
                        pattern: {
                          value: phoneRegex,
                        },
                      })}
                      className={errors?.studentMobNumber ? "input-field-invalid" : ""}
                      type="number"
                      placeholder="Введіть мобільний номер"
                    />
                  </div>

                  <div className="input-field">
                    <label className={errors?.studentEmail ? "input-label-invalid" : "input-label"}>
                      Електронна пошта *
                    </label>
                    <input
                      {...register("studentEmail", {
                        required: true,
                        pattern: {
                          value: emailRegex,
                        },
                      })}
                      className={errors?.studentEmail ? "input-field-invalid" : ""}
                      type="email"
                      placeholder="Введіть електронну пошту"
                    />
                  </div>
                </div>
              </div>

              <div className="details address">
                <span className="title">Адреса та додаткові контакти</span>

                <div className="fields">
                  <div className="input-field">
                    <label className={errors?.studentRegion ? "input-label-invalid" : "input-label"}>Область *</label>

                    <select
                      defaultValue={0}
                      name="studentRegion"
                      {...register("studentRegion", {
                        required: true,
                      })}
                      className={errors?.studentRegion ? "input-field-invalid" : ""}
                    >
                      <option disabled value={0}>
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
                    <label className={errors?.studentCity ? "input-label-invalid" : "input-label"}>Місто *</label>
                    <input
                      {...register("studentCity", {
                        required: true,
                        pattern: {
                          value: inputRegex,
                        },
                      })}
                      className={errors?.studentCity ? "input-field-invalid" : ""}
                      type="text"
                      placeholder="Введіть ваше місто"
                    />
                  </div>

                  <div className="input-field">
                    <label className={errors?.studentStreet ? "input-label-invalid" : "input-label"}>Вулиця *</label>
                    <input
                      {...register("studentStreet", {
                        required: true,
                        pattern: {
                          value: inputRegex,
                        },
                      })}
                      className={errors?.studentStreet ? "input-field-invalid" : ""}
                      type="text"
                      placeholder="Введіть вашу вулицю"
                    />
                  </div>

                  <div className="input-field">
                    <label className={errors?.studentHouseNum ? "input-label-invalid" : "input-label"}>
                      Номер будинку *
                    </label>
                    <input
                      {...register("studentHouseNum", {
                        required: true,
                        pattern: {
                          value: inputRegex,
                        },
                      })}
                      className={errors?.studentHouseNum ? "input-field-invalid" : ""}
                      type="text"
                      placeholder="Введіть номер будинку"
                    />
                  </div>

                  <div className="input-field">
                    <label className={errors?.studentLinkedin ? "input-label-invalid" : "input-label"}>LinkedIn</label>
                    <input
                      {...register("studentLinkedin", {
                        required: false,
                        pattern: {
                          value: linkRegex,
                        },
                      })}
                      className={errors?.studentLinkedin ? "input-field-invalid" : ""}
                      type="url"
                      placeholder="Введіть посилання на LinkedIn"
                    />
                  </div>

                  <div className="input-field">
                    <label className={errors?.studentGithub ? "input-label-invalid" : "input-label"}>GitHub</label>
                    <input
                      {...register("studentGithub", {
                        required: false,
                        pattern: {
                          value: linkRegex,
                        },
                      })}
                      className={errors?.studentGithub ? "input-field-invalid" : ""}
                      type="url"
                      placeholder="Введіть посилання на GitHub"
                    />
                  </div>
                </div>

                <div className="buttons">
                  <BtnNext page={page} setPage={setPage} />
                  {isFormInvalid && (
                    <div className="error-banner">
                      <img className="warning-icon" alt="" src={warning} />
                      <span className="error-text">Будь ласка, перевірте коректність даних</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}
          {page === 1 && (
            <div className="form second">
              <div className="details educationAndWork">
                <span className="title">Освіта</span>

                <div className="fields">
                  <div className="input-field">
                    <label className={errors?.studentEducation ? "input-label-invalid" : "input-label"}>
                      Рівень освіти *
                    </label>
                    <select
                      defaultValue={0}
                      {...register("studentEducation", {
                        required: true,
                      })}
                      className={errors?.studentEducation ? "input-field-invalid" : ""}
                    >
                      <option disabled value={0}>
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
                    <label className={errors?.studentUniversity ? "input-label-invalid" : "input-label"}>
                      Заклад освіти *
                    </label>
                    <input
                      {...register("studentUniversity", {
                        required: true,
                        pattern: {
                          value: inputRegex,
                        },
                      })}
                      className={errors?.studentUniversity ? "input-field-invalid" : ""}
                      type="text"
                      placeholder="Введіть заклад освіти"
                    />
                  </div>

                  <div className="input-field">
                    <label>Спеціальність</label>
                    <input
                      {...register("studentSpecialty", {
                        required: false,
                      })}
                      type="text"
                      placeholder="Введіть спеціальність"
                    />
                  </div>

                  <div className="input-field" id="input-field-technologies">
                    <label className={errors?.studentTechAndTools ? "input-label-invalid" : "input-label"}>
                      Технології та інструменти *
                    </label>
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
                  </div>

                  <div className="input-field">
                    <label className={errors?.studentEnglish ? "input-label-invalid" : "input-label"}>
                      Рівень англійської *
                    </label>
                    <select
                      defaultValue={0}
                      {...register("studentEnglish", {
                        required: true,
                      })}
                      className={errors?.studentEnglish ? "input-field-invalid" : ""}
                    >
                      <option disabled value={0}>
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
                      {...register("studentSummary", {
                        required: false,
                      })}
                      type="text"
                      placeholder="Опис декількома реченнями"
                    />
                  </div>
                </div>
              </div>
              <div className="details work">
                <span className="title">Робота</span>

                <div className="fields">
                  <div className="input-field">
                    <label className={errors?.studentPosition ? "input-label-invalid" : "input-label"}>Посада *</label>
                    <select
                      defaultValue={0}
                      {...register("studentPosition", {
                        required: true,
                      })}
                      className={errors?.studentPosition ? "input-field-invalid" : ""}
                    >
                      <option disabled value={0}>
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
                    <label className={errors?.studentWorkExp ? "input-label-invalid" : "input-label"}>
                      Досвід роботи *
                    </label>
                    <select
                      defaultValue={0}
                      {...register("studentWorkExp", {
                        required: true,
                      })}
                      className={errors?.studentWorkExp ? "input-field-invalid" : ""}
                    >
                      <option disabled value={0}>
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
                    <label className={errors?.studentWorkArea ? "input-label-invalid" : "input-label"}>
                      Область роботи *
                    </label>
                    <select
                      defaultValue={0}
                      {...register("studentWorkArea", {
                        required: true,
                      })}
                      className={errors?.studentWorkArea ? "input-field-invalid" : ""}
                    >
                      <option disabled value={0}>
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
                    <select
                      defaultValue={0}
                      {...register("studentSalary", {
                        required: false,
                      })}
                    >
                      <option disabled value={0}>
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
                    <select
                      defaultValue={0}
                      {...register("studentWorkplace", {
                        required: false,
                      })}
                    >
                      <option disabled value={0}>
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
                    <label className={errors?.studentProfilePic ? "input-label-invalid" : "input-label"}>
                      Профільна картинка
                    </label>
                    <input
                      {...register("studentProfilePic", {
                        required: false,
                        pattern: {
                          value: linkRegex,
                        },
                      })}
                      className={errors?.studentProfilePic ? "input-field-invalid" : ""}
                      type="url"
                      placeholder="Введіть посилання на картинку"
                    />
                  </div>
                </div>

                <div className="buttons">
                  <BtnBack page={page} setPage={setPage} />

                  <button className="sumbit" type="submit">
                    <span className="btnText">Підтвердити</span>
                    <img className="arrow-right" alt="" src={arrowRight} />
                  </button>

                  {isFormInvalid && (
                    <div className="error-banner">
                      <img className="warning-icon" alt="" src={warning} />
                      <span className="error-text">Будь ласка, перевірте коректність даних</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}
        </form>
      </div>
    </main>
  );
};

export default Students;
