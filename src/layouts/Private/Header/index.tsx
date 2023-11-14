import { type ReactElement } from 'react';

import { Breadcrumb } from './Breadcrumb';

export const Header = (): ReactElement => {
  return (
    <div className="flex items-center border-y-2 border-y-white/10 h-16">
      <div className="text-white text-center min-w-[150px]">MISINICIOS</div>
      <div className="w-[2px] h-full bg-white/10"></div>
      <div className="flex justify-between items-center text-white">
        <Breadcrumb />
      </div>
    </div>
  );
};
