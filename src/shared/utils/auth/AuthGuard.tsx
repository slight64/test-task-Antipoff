import { ReactNode, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

interface AuthGuardProps {
  children: ReactNode;
  token: string;
}

const AuthGuard = ({ children, token }: AuthGuardProps) => {
  const navigate = useNavigate();
  useEffect(() => {
    if (!token) {
      navigate('/login');
    }
    if (token) {
      navigate('/');
    }
  }, [token]);

  return children;
};

export default AuthGuard;
