import { Route, Routes } from 'react-router-dom';
import Header from './Header/Header';
import { TodoList } from './TodoList/TodoList';
import Home from '../pages/Home';
import Articles from '../pages/Articles';
import NotFound from '../pages/NotFound';
import SingleArticle from '../pages/SingleArticle';
import AddArticle from '../pages/AddArticle';
import Login from '../pages/Login';
import Register from '../pages/Register';

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/articles' element={<Articles />} />
        <Route path='/articles/:articleId' element={<SingleArticle />} />
        <Route path='/articles/add' element={<AddArticle />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  );
};
export default App;
