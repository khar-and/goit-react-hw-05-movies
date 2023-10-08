import { NavLink, Outlet } from 'react-router-dom';
import { Header, Link } from './SharedLayout.styled';

const SharedLayout = () => {
  return (
    <Header>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/movies">Movies</Link>
      </nav>
      <hr />
      <main>
        <Outlet />
      </main>
    </Header>
  );
};

export default SharedLayout;
