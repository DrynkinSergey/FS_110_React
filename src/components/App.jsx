import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import NotFound from '../pages/NotFound';
import Todos from '../pages/Todos';
import Layout from './Layout';
import Login from '../pages/Login';
import Register from '../pages/Register';
import { useDispatch, useSelector } from 'react-redux';
import { refreshUserThunk } from '../redux/auhtOperations';
import { useEffect } from 'react';
import { selectIsRefreshing } from '../redux/selectors';

const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);
  useEffect(() => {
    dispatch(refreshUserThunk());
  }, [dispatch]);
  return isRefreshing ? null : (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='todos' element={<Todos />} />
      </Route>
      <Route path='/register' element={<Register />} />
      <Route path='/login' element={<Login />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
  );
};
export default App;
