import { useDispatch } from 'react-redux';
import Form from '../../../widgets/Form/Form';

const RegistrationForm = () => {
  const dispatch = useDispatch();
  const onSubmitrForm = dispatch();
  return <Form title="Регистрация" buttonName="Зарегистрироваться" />;
};

export default RegistrationForm;
