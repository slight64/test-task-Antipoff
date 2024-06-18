import { useDispatch } from 'react-redux';
import Form from '../../../widgets/Form/Form';
import { registrationAndLogin } from '../model/services/registrationService';
import { AppDispatch } from '../../../shared/utils/hooks/reduxHooks';

const RegistrationForm = () => {
  const dispatch = useDispatch<AppDispatch>();
  const onSubmitForm = (email: string, password: string) => {
    dispatch(
      registrationAndLogin({
        email,
        password,
      })
    );
  };

  return (
    <Form
      title="Регистрация"
      buttonName="Зарегистрироваться"
      onSubmitForm={onSubmitForm}
    />
  );
};

export default RegistrationForm;
