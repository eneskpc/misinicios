import type { ReactElement } from 'react';

import { useAppSelector } from '../../../../application/hooks';

export const Breadcrumb = (): ReactElement => {
  const breadcrumb = useAppSelector((state) => state.options.breadcrumb);
  return (
    <div className="flex pl-3 ">
      {breadcrumb.map((item, index, allItems) => {
        if (allItems.length - 1 === index) {
          return (
            <div
              key={index}
              className="flex justify-center items-center text-white/50"
            >
              <item.icon className="w-5 h-5" />
              {item.name}
            </div>
          );
        }
        return (
          <a
            key={index}
            className="flex justify-center items-center"
            href={item.link}
          >
            <item.icon className="w-5 h-5" />
            {item.name}
          </a>
        );
      })}
    </div>
  );
};
