import { RouteProps } from 'react-router-dom';
import AuthPage from '../../../pages/AuthPage/AuthPage';
import MainPage from '../../../pages/MainPage/MainPage';

export enum rootPaths {
  main = '/',
  login = '/login',
  profile = '/profile/:id',
}

export const routeConfig: Record<rootPaths, RouteProps> = {
  [rootPaths.main]: {
    path: rootPaths.main,
    element: <MainPage />,
  },
  [rootPaths.login]: {
    path: rootPaths.login,
    element: <AuthPage />,
  },
  [rootPaths.profile]: {
    path: rootPaths.profile,
    element: <AuthPage />,
  },
};
