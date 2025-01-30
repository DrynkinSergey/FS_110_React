import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { selectIsLoggedIn, selectUser } from '../../redux/selectors';
import { logoutThunk } from '../../redux/auhtOperations';

const Header = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  return (
    <header>
      {/* petro223344@mail.com.ua */}
      <h2>Final | Auth</h2>
      {isLoggedIn && <h2>WELCOME, {user.name}</h2>}
      <nav className='flex gap-2 '>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/todos'>Todos</NavLink>
        {isLoggedIn ? (
          <button className='cursor-pointer border-2 border-white rounded-md px-2 py-1' onClick={() => dispatch(logoutThunk())}>
            Logout
          </button>
        ) : (
          <>
            <NavLink to='/register'>Register</NavLink>
            <NavLink to='/login'>Login</NavLink>
          </>
        )}
      </nav>
    </header>
  );
};
export default Header;
