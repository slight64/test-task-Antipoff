import { userActions } from '../../entities/User';
import { ButtonStyle } from '../../shared/ui/Button/Button';
import { Button } from '../../shared/ui';
import { useAppDispatch } from '../../shared/utils/hooks/reduxHooks';

interface LogoutProps {
  className?: string;
}

const Logout = ({ className }: LogoutProps) => {
  const dispatch = useAppDispatch();
  const handleClick = () => {
    dispatch(userActions.logout());
  };
  return (
    <Button
      className={className}
      handleClick={handleClick}
      outline={ButtonStyle.white}
    >
      Выход
    </Button>
  );
};

export default Logout;
