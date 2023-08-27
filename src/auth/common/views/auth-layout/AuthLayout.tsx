import { FC } from 'react';
import { Outlet } from 'react-router-dom';


export const AuthLayout: FC<{}> = () => {
  return (
    <Outlet />
  );
};
