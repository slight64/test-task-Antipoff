import { ReactNode, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { StateSchema } from "../../app/providers/StoreProvider/config/StateSchema";
import { userActions } from "../../entities/User";

interface AuthGuardProps {
  children: ReactNode;
}

const AuthGuard = ({ children }: AuthGuardProps) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const token = useSelector(
    (state: StateSchema) => state?.user?.userData?.token
  );
  dispatch(userActions.getAuthDataFromLocalstorage());
  // add hook to set current location on refresh page
  useEffect(() => {
    if (!token) {
      navigate("/login");
    }
    if (token) {
      navigate("/");
    }
  }, [token, navigate]);

  return <>{children}</>;
};

export default AuthGuard;
