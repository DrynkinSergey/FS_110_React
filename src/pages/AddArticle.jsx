import { Field, Form, Formik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { addArticleThunk } from '../redux/articlesOperations';
import { selectUser } from '../redux/selectors';
import { useNavigate } from 'react-router-dom';

const AddArticle = () => {
  const user = useSelector(selectUser);
  const initialValues = { title: '', body: '' };
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleSubmit = (values, actions) => {
    console.log(values);
    dispatch(addArticleThunk({ ...values, author: user.name, createdAt: Date.now().toLocaleString() }))
      .unwrap()
      .then(() => navigate('/articles'));
  };
  return (
    <div>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form>
          <label>
            <Field type='text' name='title' />
          </label>
          <label>
            <Field type='text' name='body' />
          </label>
          <button type='submit'>Add article</button>
        </Form>
      </Formik>
    </div>
  );
};
export default AddArticle;
