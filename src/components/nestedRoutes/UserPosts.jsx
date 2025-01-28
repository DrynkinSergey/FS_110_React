import { useEffect, useState } from 'react';
import { Link, Outlet, useParams } from 'react-router-dom';
import { fetchPostsByUserId } from '../../services/api';

const UserPosts = () => {
  const { userId } = useParams();

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const posts = await fetchPostsByUserId(userId);
      setPosts(posts);
    };
    getData();
  }, [userId]);
  return (
    <div className='postDetails'>
      <section>
        User posts
        <ul>
          {!posts.length && <h2>No posts yet...</h2>}
          {posts.map(item => (
            <Link key={item.id} to={item.id.toString()}>
              <li> {item.title}</li>
            </Link>
          ))}
        </ul>
      </section>
      <div className='outlet'>
        <Outlet />
      </div>
    </div>
  );
};
export default UserPosts;
