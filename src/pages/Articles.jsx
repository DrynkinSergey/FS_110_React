import { useDispatch } from 'react-redux';
import ArticlesList from '../components/ArticlesList';
import { useEffect } from 'react';
import { fetchAllArticles } from '../redux/articlesOperations';

const Articles = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAllArticles());
  }, [dispatch]);
  return (
    <div>
      <ArticlesList />
    </div>
  );
};
export default Articles;
