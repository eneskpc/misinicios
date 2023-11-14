import { type ReactElement } from 'react';
import { Outlet } from 'react-router-dom';

import Background from '../../assets/visuals/background.svg';
import { Header } from './Header';

export const PrivateLayout = (): ReactElement => {
  return (
    <div className="relative min-h-screen">
      <Background className="fixed bg-indigo-900 left-0 top-0 z-10" />
      <div className="relative z-20">
        <Header />
        <Outlet />
      </div>
    </div>
  );
};
