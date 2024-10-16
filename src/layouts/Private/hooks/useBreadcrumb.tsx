import { useMemo } from 'react';
import { useMatches } from 'react-router-dom';

import { type PageMap, pagesMap } from '@/src/router';

export const useBreadcrumb = (): Array<JSX.Element | null> => {
  const routeMatches = useMatches();

  const combinePath = (
    pm: PageMap,
    deep: number,
    searchedPath: string
  ): string => {
    let mergedPath: string = '';
    let currentMap: PageMap | undefined = pm;
    for (let i = 0; i < deep; i++) {
      if (i > 0) {
        mergedPath += '/';
      }
      mergedPath += currentMap?.path ?? '';
      if (currentMap?.children === null || currentMap?.children === undefined) {
        break;
      }
      currentMap = currentMap.children?.find((map) => {
        if (map.path) console.log({ searchedPath, path: map.path });
        return searchedPath.includes(map.path);
      });
    }

    return mergedPath;
  };

  return useMemo(
    () =>
      routeMatches
        .map((match, index) => {
          if (index === 0) {
            return null;
          }
          const pathCount = (match.pathname.match(/\//g) ?? []).length;
          const pageMap = pagesMap.find((pm) => {
            const mergedPath = combinePath(pm, pathCount, match.pathname);
            return mergedPath === match.pathname;
          });
          if (pageMap === null || pageMap === undefined) {
            return null;
          }
          const { icon: Icon } = pageMap;

          return (
            <div key={pageMap.path}>
              {Icon !== undefined && <Icon className="w-6 h-6 mr-4" />}
            </div>
          );
        })
        .filter((rm) => rm),
    [routeMatches]
  );
};
