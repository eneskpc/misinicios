import { type ReactElement } from 'react';
import { Link } from 'react-router-dom';

export const Home = (): ReactElement => {
  return (
    <div>
      Home
      <br /> Go to <Link to={'/login'}>Login</Link>
      <br /> Go to <Link to={'/dashboard'}>Dashboard</Link>
    </div>
  );
};
