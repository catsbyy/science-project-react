import { useReducer, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthData } from "../auth/AuthWrapper";
import search from "./../img/icons/search.svg";

export const Login = () => {
  const navigate = useNavigate();
  const { login } = AuthData();
  const [formData, setFormData] = useReducer(
    (formData, newItem) => {
      return { ...formData, ...newItem };
    },
    { userName: "", password: "" }
  );
  const [errorMessage, setErrorMessage] = useState(null);

  const doLogin = async () => {
    try {
      await login(formData.userName, formData.password);
      navigate("/account");
    } catch (error) {
      setErrorMessage(error);
    }
  };

  return (
    <main className="business-body">
      <div className="container">
        <header>Увійти до свого профілю</header>

        <div className="form first">
            <div className="details personal">
              <span className="title">Основні параметри</span>

              <div className="fields">
                <div className="input-field">
                  <label>Електронна пошта</label>
                  <input
                    name="email"
                    value={formData.userName}
                    onChange={(e) => setFormData({ userName: e.target.value })}
                    type="text"
                  />
                </div>
              </div>
            </div>

            <div className="details ID">
              <span className="title">Додаткові параметри</span>

              <div className="fields">
                <div className="input-field">
                  <label>Прізвище</label>
                  <input
                    name="surname"
                    value={formData.userName}
                    onChange={(e) => setFormData({ userName: e.target.value })}
                    type="text"
                  />
                </div>

                <div className="input-field">
                  <label>Пароль</label>
                  <input
                    name="password"
                    value={formData.password}
                    onChange={(e) => setFormData({ password: e.target.value })}
                    type="password"
                  />
                </div>
              </div>

              <div className="button">
                <button onClick={doLogin} type="submit">
                  <span className="btnText">Увійти</span>
                  <img className="search" alt="" src={search} />
                </button>
              </div>
              {errorMessage ? <div className="error">{errorMessage}</div> : null}
            </div>
          </div>
      </div>
    </main>
  );
};
