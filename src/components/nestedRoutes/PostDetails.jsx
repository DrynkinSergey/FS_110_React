import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchPostByPostId } from '../../services/api';

const PostDetails = () => {
  const { postId } = useParams();
  const [post, setPost] = useState(null);
  useEffect(() => {
    const getData = async () => {
      const data = await fetchPostByPostId(postId);
      setPost(data);
    };
    getData();
  }, [postId]);
  if (!post) {
    return <h2>Loading your post....</h2>;
  }
  return (
    <div>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
    </div>
  );
};
export default PostDetails;
