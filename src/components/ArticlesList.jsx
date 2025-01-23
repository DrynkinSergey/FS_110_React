import { useSelector } from 'react-redux';
import { selectArticles } from '../redux/selectors';
import { Link } from 'react-router-dom';

const ArticlesList = () => {
  const articles = useSelector(selectArticles);
  return (
    <div>
      <h2>Articles </h2>
      <ul>
        {articles.map(article => (
          <li key={article.id}>
            <Link to={`/articles/${article.id}`}>{article.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default ArticlesList;
