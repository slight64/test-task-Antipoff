import Form from '../../../../shared/ui/Form/Form';
import { Field } from '../../types/AuthTypes';

const LoginForm = () => {
  const fields: Field[] = [
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
  ];
  return <Form title="Войти" fields={fields} buttonName="Войти" />;
};

export default LoginForm;
