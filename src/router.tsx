import { type ReactElement } from 'react';
import { createBrowserRouter } from 'react-router-dom';

import {
  AdjustmentsHorizontalIcon,
  BookOpenIcon,
} from '@heroicons/react/24/outline';

import { PrivateLayout } from './layouts/Private';
import { Dashboard } from './views/Dashboard';
import { Home } from './views/Home';
import { Login } from './views/Login';

import { Sources } from '@/src/views/Sources';

export interface PageMap {
  title: string;
  path: string;
  icon?: React.ForwardRefExoticComponent<
    Omit<React.SVGProps<SVGSVGElement>, 'ref'> & {
      title?: string | undefined;
      titleId?: string | undefined;
    } & React.RefAttributes<SVGSVGElement>
  >;
  element: ReactElement;
  children?: PageMap[];
}

export const pagesMap: PageMap[] = [
  {
    title: 'Home',
    path: '/',
    element: <Home />,
  },
  {
    title: 'Sign in',
    path: '/login',
    element: <Login />,
  },
  {
    title: 'Dashboard',
    path: '/dashboard',
    element: <PrivateLayout />,
    children: [
      {
        title: 'Dashboard',
        path: '',
        icon: AdjustmentsHorizontalIcon,
        element: <Dashboard />,
      },
      {
        title: 'Sources',
        path: 'sources',
        icon: BookOpenIcon,
        element: <Sources />,
      },
    ],
  },
];

export const router = createBrowserRouter(pagesMap);
