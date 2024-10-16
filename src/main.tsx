import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';

import { store } from './application/store';
import './assets/styles/global.scss';

import { router } from '@/src/router';

const node = document.getElementById('root') as HTMLDivElement;
createRoot(node).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);
