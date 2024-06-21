import { Suspense, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { routeConfig } from '../../../../shared/config/routeConfig/routeConfig';
import AuthGuard from '../../../../shared/utils/auth/AuthGuard';
import { useSelector } from 'react-redux';
import { userActions } from '../../../../entities/User';
import {
  RootState,
  useAppDispatch,
} from '../../../../shared/utils/hooks/reduxHooks';

export const AppRouter = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(userActions.getAuthDataFromLocalstorage());
  }, [dispatch]);
  const token = useSelector((state: RootState) => state.user.userData?.token);
  return (
    <Suspense fallback={'Загрузка'}>
      <Routes>
        {Object.values(routeConfig).map(({ element, path }) => (
          <Route
            key={path}
            path={path}
            element={
              <AuthGuard token={token}>
                <div className="page-wrapper">{element}</div>{' '}
              </AuthGuard>
            }
          />
        ))}
      </Routes>
    </Suspense>
  );
};
