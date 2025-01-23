import { Field, Form, Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { loginThunk } from '../redux/authOperations';

const LoginForm = () => {
  const initialValues = { email: '', password: '' };

  const dispatch = useDispatch();
  const handleSubmit = (values, actions) => {
    console.log(values);
    dispatch(loginThunk(values));
  };
  return (
    <div>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form>
          <label>
            <Field type='email' name='email' />
          </label>
          <label>
            <Field type='password' name='password' />
          </label>
          <button type='submit'>Login</button>
        </Form>
      </Formik>
    </div>
  );
};
export default LoginForm;
