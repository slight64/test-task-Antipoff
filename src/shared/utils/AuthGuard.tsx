import { ReactNode, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

interface AuthGuardProps {
  children: ReactNode;
  user: boolean;
}

const AuthGuard = ({ children, user }: AuthGuardProps) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate('/login');
    }
  }, [user, navigate]);

  return <>{children}</>;
};

export default AuthGuard;
