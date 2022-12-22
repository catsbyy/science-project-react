const Students = () => {
  return (
    <main className="students-body">
      <div className="container">
        <header>Анкета кандидата</header>

        <form action="#" name="registrationForm" method="post">
          <div className="form first">
            <div className="details personal">
              <span className="title">Персональні дані</span>

              <div className="fields">
                <div className="input-field">
                  <label>Прізвище *</label>
                  <input name="studentSurname" type="text" placeholder="Введіть ваше прізвище" required />
                </div>

                <div className="input-field">
                  <label>Ім'я *</label>
                  <input name="studentName" type="text" placeholder="Введіть ваше ім'я" required />
                </div>

                <div className="input-field">
                  <label>По-батькові *</label>
                  <input name="studentPatronymic" type="text" placeholder="Введіть ваше по-батькові" required />
                </div>

                <div className="input-field">
                  <label>Дата народження *</label>
                  <input name="studentDateOfBirth" type="date" placeholder="Enter birth date" required />
                </div>

                <div className="input-field">
                  <label>Мобільний номер *</label>
                  <input name="studentMobNumber" type="number" placeholder="Введіть мобільний номер" required />
                </div>

                <div className="input-field">
                  <label>Електронна пошта *</label>
                  <input name="studentEmail" type="email" placeholder="Введіть електронну пошту" required />
                </div>
              </div>
            </div>

            <div className="details address">
              <span className="title">Адреса та додаткові контакти</span>

              <div className="fields">
                <div className="input-field">
                  <label>Область *</label>

                  <select required name="studentRegion">
                    <option disabled selected>
                      Оберіть вашу область
                    </option>
                    <option>Київська</option>
                  </select>
                </div>

                <div className="input-field">
                  <label>Місто *</label>
                  <input name="studentCity" type="text" placeholder="Введіть ваше місто" required />
                </div>

                <div className="input-field">
                  <label>Вулиця *</label>
                  <input name="studentStreet" type="text" placeholder="Введіть вашу вулицю" required />
                </div>

                <div className="input-field">
                  <label>Номер будинку *</label>
                  <input name="studentHouseNum" type="text" placeholder="Введіть номер будинку" required />
                </div>

                <div className="input-field">
                  <label>LinkedIn</label>
                  <input name="studentLinkedin" type="url" placeholder="Введіть посилання на LinkedIn" />
                </div>

                <div className="input-field">
                  <label>GitHub</label>
                  <input name="studentGithub" type="url" placeholder="Введіть посилання на GitHub" />
                </div>
              </div>

              <button className="nextBtn">
                <span className="btnText">Далі</span>
                <i className="uil uil-navigator"></i>
              </button>
            </div>
          </div>

          <div className="form second">
            <div className="details educationAndWork">
              <span className="title">Освіта</span>

              <div className="fields">
                <div className="input-field">
                  <label>Рівень освіти *</label>
                  <select required name="studentEducation">
                    <option disabled selected>
                      Оберіть рівень освіти
                    </option>
                    <option>Вища</option>
                    <option>Фахова передвища</option>
                    <option>Професійно-технічна</option>
                    <option>Повна середня</option>
                  </select>
                </div>

                <div className="input-field">
                  <label>Заклад освіти *</label>
                  <input name="studentUniversity" type="text" placeholder="Введіть заклад освіти" required />
                </div>

                <div className="input-field">
                  <label>Спеціальність</label>
                  <input name="studentSpecialty" type="text" placeholder="Введіть спеціальність" />
                </div>

                <div className="input-field" id="input-field-technologies">
                  <label>Технології та інструменти *</label>
                  <select
                    id="studentTechAndTools"
                    name="studentTechAndTools"
                    placeholder="Технології та інструменти"
                    required
                  >
                    <option disabled selected>
                      Технології та інструменти
                    </option>
                    <option>Київська</option>
                  </select>
                </div>

                <div className="input-field">
                  <label>Рівень англійської *</label>
                  <select required name="studentEnglish">
                    <option disabled selected>
                      Оберіть рівень англійської
                    </option>
                    <option>Beginner - A1</option>
                    <option>Elementary - A2</option>
                    <option>Pre-Intermediate - A2+</option>
                    <option>Intermediate - B1</option>
                    <option>Upper-Intermediate - B2</option>
                    <option>Advanced - C1</option>
                    <option>Proficient - C2</option>
                  </select>
                </div>

                <div className="input-field">
                  <label>Коротка розповідь про себе</label>
                  <input name="studentSummary" type="text" placeholder="Опис декількома реченнями" />
                </div>
              </div>
            </div>
            <div className="details work">
              <span className="title">Робота</span>

              <div className="fields">
                <div className="input-field">
                  <label>Посада *</label>
                  <select required name="studentPosition">
                    <option disabled selected>
                      Оберіть посаду
                    </option>
                    <option>Інтерн</option>
                    <option>Джуніор-розробник</option>
                    <option>Мідл-розробник</option>
                    <option>Сеньйор-розробник</option>
                    <option>Архітектор</option>
                    <option>Веб-дизайнер</option>
                    <option>QA-інженер</option>
                  </select>
                </div>

                <div className="input-field">
                  <label>Досвід роботи *</label>
                  <select required name="studentWorkExp">
                    <option disabled selected>
                      Оберіть досвід роботи
                    </option>
                    <option>0</option>
                    <option>0.5+</option>
                    <option>1+</option>
                    <option>1.5+</option>
                    <option>2+</option>
                    <option>3+</option>
                    <option>5+</option>
                  </select>
                </div>

                <div className="input-field">
                  <label>Область роботи *</label>
                  <select required name="studentWorkArea">
                    <option disabled selected>
                      Оберіть область роботи
                    </option>
                    <option>Front End</option>
                    <option>Back End</option>
                    <option>Full Stack</option>
                    <option>Web Design</option>
                    <option>Quality Assurance</option>
                  </select>
                </div>

                <div className="input-field">
                  <label>Очікувана заробітна плата</label>
                  <select name="studentSalary">
                    <option disabled selected>
                      Оберіть заробітну плату ($)
                    </option>
                    <option>300-500</option>
                    <option>500-1000</option>
                    <option>1000-2000</option>
                    <option>2000-5000</option>
                    <option>5000+</option>
                  </select>
                </div>

                <div className="input-field">
                  <label>Місце роботи</label>
                  <select name="studentWorkplace">
                    <option disabled selected>
                      Оберіть місце роботи
                    </option>
                    <option>Неважливо</option>
                    <option>Віддалено</option>
                    <option>Офіс</option>
                    <option>Віддалено/офіс</option>
                  </select>
                </div>

                <div className="input-field">
                  <label>Профільна картинка</label>
                  <input name="studentProfilePic" type="url" placeholder="Введіть посилання на картинку" />
                </div>
              </div>

              <div className="buttons">
                <div className="backBtn">
                  <i className="uil uil-navigator"></i>
                  <span className="btnText">Назад</span>
                </div>

                <button className="sumbit">
                  <span className="btnText">Підтвердити</span>
                  <i className="uil uil-navigator"></i>
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
