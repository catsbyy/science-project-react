const Business = () => {
    return ( 
        <main className="business-body">
        <div className="container">
          <header>Пошук кандидатів</header>
    
          <form action="#" method="post">
            <div className="form first">
              <div className="details personal">
                <span className="title">Основні параметри</span>
    
                <div className="fields">
                  <div className="input-field">
                    <label>Посада *</label>
                    <select name="studentPosition" required>
                      <option disabled selected>Оберіть необхідну посаду</option>
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
                    <label>Область роботи *</label>
                    <select name="studentWorkArea" required>
                      <option disabled selected>Оберіть область роботи</option>
                      <option>Front End</option>
                      <option>Back End</option>
                      <option>Full Stack</option>
                    </select>
                  </div>
    
                  <div className="input-field">
                    <label>Досвід роботи *</label>
                    <select name="studentWorkExp" required>
                      <option disabled selected>Оберіть досвід роботи</option>
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
                    <label>Технології та інструменти *</label>
                    <select id="studentTechAndTools" name="studentTechAndTools" placeholder="Технології та інструменти" required>
                        <option disabled selected>Технології та інструменти</option>
                        <option >Київська</option>
                      </select>
                  </div>
    
                  <div className="input-field">
                    <label>Рівень англійської *</label>
                    <select required name="studentEnglish">
                      <option disabled selected>Оберіть рівень англійської</option>
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
                    <label>Рівень освіти *</label>
                    <select required name="studentEducation">
                      <option disabled selected>Оберіть рівень освіти</option>
                      <option>Вища</option>
                      <option>Фахова передвища</option>
                      <option>Професійно-технічна</option>
                      <option>Повна середня</option>
                    </select>
                  </div>
                </div>
              </div>
    
              <div className="details ID">
                <span className="title">Додаткові параметри</span>
    
                <div className="fields">
                  <div className="input-field">
                    <label>Область</label>
                    <select required name="studentRegion">
                      <option disabled selected>Оберіть вашу область</option>
                      <option >Київська</option>
                    </select>
                  </div>
    
                  <div className="input-field">
                    <label>Місто</label>
                    <input name="studentCity" type="text" placeholder="Введіть місто" />
                  </div>
    
                  <div className="input-field">
                    <label>Місце роботи</label>
                    <select name="studentWorkplace">
                      <option disabled selected>Оберіть місце роботи</option>
                      <option>Неважливо</option>
                      <option>Віддалено</option>
                      <option>Офіс</option>
                      <option>Віддалено/офіс</option>
                    </select>
                  </div>
    
                  <div className="input-field">
                    <label>Заробітна плата</label>
                    <select name="studentSalary">
                      <option disabled selected>Оберіть заробітну плату ($)</option>
                      <option>300-500</option>
                      <option>500-1000</option>
                      <option>1000-2000</option>
                      <option>2000-5000</option>
                      <option>5000+</option>
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
    
        <script src="js/scriptBusiness.js"></script>
      </main>
     );
}
 
export default Business;