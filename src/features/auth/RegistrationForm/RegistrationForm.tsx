import Form from '../../../shared/ui/Form/Form';
import { Field } from '../types/AuthTypes';

const RegistrationForm = () => {
  const fields: Field[] = [
    { name: 'Имя', label: 'name', type: 'text', required: true },
    {
      name: 'Электронная почта',
      label: 'email',
      type: 'email',
      required: true,
    },
    {
      name: 'Пароль',
      label: 'password',
      type: 'password',
      required: true,
    },
    {
      name: 'Повторите пароль',
      label: 'repeat-password',
      type: 'password',
      required: true,
    },
  ];

  return (
    <Form title="Регистрация" fields={fields} buttonName="Зарегистрироваться" />
  );
};

export default RegistrationForm;
