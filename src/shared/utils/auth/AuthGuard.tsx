import { ReactNode, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

interface AuthGuardProps {
  children: ReactNode;
  token: string;
}

const AuthGuard = ({ children, token }: AuthGuardProps) => {
  const location = useLocation();
  console.log(location);
  const navigate = useNavigate();
  useEffect(() => {
    if (!token) {
      navigate('/login');
    }
    if (token && location.pathname !== '/login') {
      navigate(location.pathname);
    } else if (token && location.pathname === '/login') {
      navigate('/');
    }
  }, [token]);

  return children;
};

export default AuthGuard;
