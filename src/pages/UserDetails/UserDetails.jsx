import { useEffect, useState } from 'react';
import { Link, Outlet, useParams } from 'react-router-dom';
import { fetchUserById } from '../../services/api';

const UserDetails = () => {
  const { userId } = useParams();
  console.log(userId);
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getData = async () => {
      setIsLoading(true);
      const user = await fetchUserById(userId);
      setUser(user);
      setIsLoading(false);
    };
    getData();
  }, [userId]);

  if (!user) {
    return <h2>Loading...</h2>;
  }

  return (
    <div>
      <h3>User details</h3>

      <img src={user.image} />
      <h2>
        {user.lastName} {user.firstName}
      </h2>
      <p>Email: {user.email}</p>
      <p>Age: {user.age}</p>
      <nav>
        <ul>
          <li>
            <Link to='info'>Info</Link>
          </li>
          <li>
            <Link to='posts'>Posts</Link>
          </li>
          {/* localhost:5173/users/5/posts */}
        </ul>
      </nav>
      <div>
        <Outlet />
      </div>
    </div>
  );
};
export default UserDetails;
