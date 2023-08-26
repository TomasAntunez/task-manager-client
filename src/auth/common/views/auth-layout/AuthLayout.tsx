import { FC } from 'react';
import { Outlet } from 'react-router-dom';


export const AuthLayout: FC<{}> = () => {
  return (
    <>
      <h2>From AuthLayout</h2>
      <Outlet />
    </>
  );
};
