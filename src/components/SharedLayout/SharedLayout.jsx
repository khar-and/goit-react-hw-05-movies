import { Outlet } from 'react-router-dom';
import { Header, Link } from './SharedLayout.styled';
import { Suspense } from 'react';

const SharedLayout = () => {
  return (
    <Header>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/movies">Movies</Link>
      </nav>
      <hr />
      <main>
        <Suspense>
          <Outlet />
        </Suspense>
      </main>
    </Header>
  );
};

export default SharedLayout;
