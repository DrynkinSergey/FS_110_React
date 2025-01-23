import { Field, Form, Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { registerThunk } from '../redux/authOperations';

const RegisterForm = () => {
  const initialValues = { name: '', email: '', password: '' };
  const dispatch = useDispatch();
  const handleSubmit = (values, actions) => {
    console.log(values);
    dispatch(registerThunk(values));
  };
  return (
    <div>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form>
          <label>
            <Field name='name' />
          </label>
          <label>
            <Field type='email' name='email' />
          </label>
          <label>
            <Field type='password' name='password' />
          </label>
          <button type='submit'>Register</button>
        </Form>
      </Formik>
    </div>
  );
};
export default RegisterForm;
