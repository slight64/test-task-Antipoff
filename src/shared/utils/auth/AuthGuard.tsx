import { ReactNode, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import { userActions } from '../../../entities/User';

interface AuthGuardProps {
  children: ReactNode;
  token: string;
}

const AuthGuard = ({ children, token }: AuthGuardProps) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // const location = useLocation();
  // dispatch(userActions.getAuthDataFromLocalstorage());
  useEffect(() => {
    if (!token) {
      console.log(token);
      navigate('/login');
    }
    if (token) {
      console.log(token);
      navigate('/');
    }
  }, [token]);

  // if (!token) {
  //   console.log('1');
  //   <Navigate to="login" />;
  // }
  // if (token && location.pathname === '/login') {
  //   console.log('2');
  //   navigate('/');
  //   return;
  // } else {
  //   navigate(location.pathname);
  //   return;
  // }

  return children;
};

export default AuthGuard;
