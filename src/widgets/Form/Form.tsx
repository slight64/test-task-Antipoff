import { useState } from "react";
import "./Form.css";

interface FormProps {
  title: string;
  buttonName: "Войти" | "Зарегистрироваться";
}

interface StateItems {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const Form = ({ title, buttonName }: FormProps) => {
  const [values, setValues] = useState<StateItems>({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const onInpuChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValues((prev) => ({
      ...prev,
      [name]: value,
    }));
    validateInput(e);
  };

  const validateInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    let { name, value } = e.target;
    console.log(name, value);
    setError((prev) => {
      const stateObject = { ...prev, [name]: "" };

      switch (name) {
        case "username":
          console.log("name, value");
          if (!value) {
            stateObject[name] = "Введите имя";
          }
          break;
        case "email":
          if (!value) {
            stateObject[name] = "Введите почту";
          }
          break;

        case "password":
          if (!value) {
            stateObject[name] = "Введите пароль";
          } else if (
            values.confirmPassword &&
            value !== values.confirmPassword
          ) {
            stateObject["confirmPassword"] = "Пароли не совпадают";
          } else {
            stateObject["confirmPassword"] = values.confirmPassword
              ? ""
              : error.confirmPassword;
          }
          break;

        case "confirmPassword":
          if (!value) {
            stateObject[name] = "Повторите пароль";
          } else if (values.password && value !== values.password) {
            stateObject[name] = "Пароли не совпадают";
          }
          break;

        default:
          break;
      }

      return stateObject;
    });
  };

  return (
    <form className="form">
      <h2 className="form__title">{title}</h2>
      <div className="form__item">
        <label className="form__item-title" htmlFor="name">
          {"Имя"}
        </label>
        <input
          value={values.username}
          name="username"
          id="name"
          className={`form__item-input ${
            error.username && "form__item-input__error-border"
          }`}
          type="text"
          required
          onChange={onInpuChange}
          onBlur={validateInput}
        />
        {error.username && (
          <div className="form__item-input__error-text">Ошибка</div>
        )}
      </div>
      <div className="form__item">
        <label className="form__item-title" htmlFor="email">
          {"Электронная почта"}
        </label>
        <input
          value={values.email}
          name="email"
          id="email"
          className={`form__item-input ${
            error.email && "form__item-input__error-border"
          }`}
          type="text"
          required
          onChange={onInpuChange}
          onBlur={validateInput}
        />
        {error.email && (
          <div className="form__item-input__error-text">{error.email}</div>
        )}
      </div>
      <div className="form__item">
        <label className="form__item-title" htmlFor="password">
          {"Пароль"}
        </label>
        <input
          value={values.password}
          name="password"
          id="password"
          className={`form__item-input ${
            error.password && "form__item-input__error-border"
          }`}
          type="text"
          required
          onChange={onInpuChange}
          onBlur={validateInput}
        />
        {error.password && (
          <div className="form__item-input__error-text">{error.password}</div>
        )}
      </div>
      <div className="form__item">
        <label className="form__item-title" htmlFor="confirmPassword">
          {"Повторите пароль"}
        </label>
        <input
          value={values.confirmPassword}
          name="confirmPassword"
          id="confirmPassword"
          className={`form__item-input ${
            error.confirmPassword && "form__item-input__error-border"
          }`}
          type="text"
          required
          onChange={onInpuChange}
          onBlur={validateInput}
        />
        {error.confirmPassword && (
          <div className="form__item-input__error-text">
            {error.confirmPassword}
          </div>
        )}
      </div>
      <button className="form__item-submit" onClick={() => {}}>
        {buttonName}
      </button>
    </form>
  );
};

export default Form;
