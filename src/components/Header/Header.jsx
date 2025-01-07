import { NavLink } from 'react-router-dom';
import s from './Header.module.css';
import clsx from 'clsx';

const buildLinkClass = ({ isActive }) => {
  return clsx(s.link, isActive && s.active);
};

const Header = () => {
  return (
    <header>
      <h2>Routing</h2>
      <nav className={s.nav}>
        <NavLink className={buildLinkClass} to='/'>
          Home
        </NavLink>
        <NavLink className={buildLinkClass} to='/about'>
          About
        </NavLink>
        <NavLink className={buildLinkClass} to='/users'>
          Users
        </NavLink>
      </nav>
    </header>
  );
};
export default Header;
