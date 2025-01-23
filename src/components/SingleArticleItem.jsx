import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteArticle, fetchArticleById } from '../redux/articlesOperations';
import { useNavigate, useParams } from 'react-router-dom';
import { selectUser } from '../redux/selectors';

const SingleArticleItem = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const { articleId } = useParams();
  const [article, setArticle] = useState();
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(fetchArticleById(articleId))
      .unwrap()
      .then(res => setArticle(res));
  }, [dispatch, articleId]);

  const handleDelete = () => {
    dispatch(deleteArticle(articleId))
      .unwrap()
      .then(() => navigate('/articles'));
  };
  return (
    <div>
      <h2>Single article</h2>
      <h3>{article?.title}</h3>
      <p>Author: {article?.author}</p>
      <p>{article?.body}</p>
      {user.name === article?.author && (
        <button type='button' onClick={handleDelete}>
          Delete
        </button>
      )}
    </div>
  );
};
export default SingleArticleItem;
