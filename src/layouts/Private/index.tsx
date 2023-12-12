import { type ReactElement } from 'react';
import { Outlet } from 'react-router-dom';

import {
  ArrowUpTrayIcon,
  BellIcon,
  MagnifyingGlassIcon,
} from '@heroicons/react/24/outline';

import { Sidebar } from '@/src/layouts/Private/Sidebar';

export const PrivateLayout = (): ReactElement => {
  return (
    <div className="relative min-h-screen bg-gradient-to-r from-slate-300 to-slate-300">
      <div className="absolute rounded-full blur-3xl bg-blue-300 w-1/3 h-1/3 left-[-10%] top-[-10%]"></div>
      <div className="relative flex justify-center items-center z-20 p-20">
        <div className="main-area max-w-[1560px]">
          <Sidebar />
          <div className="col-span-5 px-6">
            <div className="flex justify-between items-end">
              <div>
                <h5 className="text-xl text-slate-700">Welcome back,</h5>
                <h2 className="text-5xl font-bold text-slate-700">
                  Gabriel Enes KAPUCU
                </h2>
              </div>
              <div>
                <button type="button" className="blue mr-4">
                  <ArrowUpTrayIcon className="w-6 h-6 mr-4" />
                  Upload Source
                </button>
                <div className="search mr-4">
                  <MagnifyingGlassIcon className="w-6 h-6" />
                  <input type="search" placeholder="Search in Sources" />
                </div>
                <button
                  type="button"
                  className="relative p-0 bg-white w-14 h-14 rounded-full shadow"
                >
                  <BellIcon className="w-6 h-6" />
                  <div className="absolute top-[-0.5rem] right-[-0.5rem] badge">
                    9
                  </div>
                </button>
              </div>
            </div>
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};
