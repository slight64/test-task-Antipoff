import { Field } from '../../../features/auth/types/AuthTypes';
import './Form.css';

interface FormProps<T> {
  title: string;
  fields: T;
  buttonName: 'Войти' | 'Зарегистрироваться';
}

const Form = ({ title, fields, buttonName }: FormProps<Field[]>) => {
  const handleSubmit = () => {};
  return (
    <div className="form">
      <h2 className="form__title">{title}</h2>
      {fields.map((item) => (
        <div className="form__item" key={item.name}>
          <label className="form__item-title" htmlFor={item.label}>
            {item.name}
          </label>
          <input
            id={item.label}
            className="form__item-input form__item-input__error-border"
            type={item.type}
            required={item.required}
          />
          <div className="form__item-input__error-text">Ошибка</div>
        </div>
      ))}
      <button className="form__item-submit" onClick={handleSubmit}>
        {buttonName}
      </button>
    </div>
  );
};

export default Form;
