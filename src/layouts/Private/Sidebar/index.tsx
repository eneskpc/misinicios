import { type ReactElement } from 'react';
import { NavLink } from 'react-router-dom';

import {
  AdjustmentsHorizontalIcon,
  BookOpenIcon,
} from '@heroicons/react/24/outline';
import clsx from 'clsx';

import logoSource from '../../../assets/visuals/logo.png';

export const Sidebar = (): ReactElement => {
  const configureMenuItemClasses = ({
    isActive,
  }: {
    isActive: boolean;
  }): string => clsx('menu-item', 'my-3', { active: isActive });

  return (
    <div className="sidebar">
      <div className="menu">
        <NavLink to="/dashboard" className="logo-container">
          <img className="w-full" src={logoSource} />
        </NavLink>
        <NavLink to="/dashboard" className={configureMenuItemClasses}>
          <AdjustmentsHorizontalIcon className="w-6 h-6" />
          <span className="page-name">Dashboard</span>
        </NavLink>
        <NavLink to="/dashboard/sources" className={configureMenuItemClasses}>
          <BookOpenIcon className="w-6 h-6" />
          <span className="page-name">Sources</span>
        </NavLink>
      </div>
      <div className="contact-us text-slate-300 text-center text-xs">
        Have any problems with manage your dashboard? Try to contact The System
        Administrator.
        <button type="button" className="turqoise mt-4">
          Contact Us
        </button>
      </div>
    </div>
  );
};
