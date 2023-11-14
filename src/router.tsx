import { createBrowserRouter } from 'react-router-dom';

import { PrivateLayout } from './layouts/Private';
import { Dashboard } from './views/Dashboard';
import { Home } from './views/Home';
import { Login } from './views/Login';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/dashboard',
    element: <PrivateLayout />,
    children: [
      {
        path: '',
        element: <Dashboard />,
      },
    ],
  },
]);

export default router;
