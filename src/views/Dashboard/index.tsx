import { type ReactElement, useEffect } from 'react';

import { MenuList } from '../../application/data/constants';
import { setBreadcrumb } from '../../application/data/options/slice';
import { useAppDispatch } from '../../application/hooks';

export const Dashboard = (): ReactElement => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(setBreadcrumb(MenuList));
  }, []);
  return <div>You look at Dashboard right now</div>;
};
