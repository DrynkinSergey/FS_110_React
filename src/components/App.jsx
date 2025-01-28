import { Route, Routes } from 'react-router-dom';
import Header from './Header/Header';
import Home from '../pages/Home/Home';
import About from '../pages/About/About';
import NotFound from '../pages/NotFound/NotFound';
import Aim from './nestedRoutes/Aim';
import Team from './nestedRoutes/Team';
import Company from './nestedRoutes/Company';
import Users from '../pages/Users/Users';
import UserDetails from '../pages/UserDetails/UserDetails';
import UserPosts from './nestedRoutes/UserPosts';
import PostDetails from './nestedRoutes/PostDetails';

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />

        <Route path='/about' element={<About />}>
          <Route index element={<h2>Click on the top links to see more information about our company</h2>} />
          <Route path='aim' element={<Aim />} />
          <Route path='team' element={<Team />} />
          <Route path='company' element={<Company />} />
        </Route>

        <Route path='/users' element={<Users />} />
        <Route path='/users/:userId' element={<UserDetails />}>
          <Route path='posts' element={<UserPosts />}>
            <Route path=':postId' element={<PostDetails />} />
          </Route>
          <Route path='info' element={<h2>some info</h2>} />
        </Route>
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  );
};
export default App;
