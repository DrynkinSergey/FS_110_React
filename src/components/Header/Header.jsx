import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import { selectIsLoggedIn } from '../../redux/selectors';
import { logout } from '../../redux/authSlice';

const Header = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <header>
      <h2>Redux toolkit + Selectors</h2>
      <nav>
        <NavLink to='/' className={({ isActive }) => (isActive ? 'active' : '')}>
          Home
        </NavLink>
        <NavLink to='/articles' className={({ isActive }) => (isActive ? 'active' : '')}>
          Articles
        </NavLink>
        <NavLink to='/articles/add' className={({ isActive }) => (isActive ? 'active' : '')}>
          Add article
        </NavLink>
        {!isLoggedIn && (
          <>
            <NavLink to='/login' className={({ isActive }) => (isActive ? 'active' : '')}>
              Login
            </NavLink>
            <NavLink to='/register' className={({ isActive }) => (isActive ? 'active' : '')}>
              Register
            </NavLink>
          </>
        )}
        {isLoggedIn && (
          <>
            <button
              onClick={() => {
                dispatch(logout());
                navigate('/login');
              }}
            >
              Logout
            </button>
          </>
        )}
      </nav>
    </header>
  );
};
export default Header;
