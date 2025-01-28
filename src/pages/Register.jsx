import { Field, Form, Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { registerThunk } from '../redux/auhtOperations';

const Register = () => {
  const initialValues = {
    password: '',
    email: '',
    name: '',
  };
  const dispatch = useDispatch();
  const handleSubmit = (values, options) => {
    console.log(values);
    dispatch(registerThunk(values));
    options.resetForm();
  };
  return (
    <div className='min-h-screen flex flex-col justify-center items-center'>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form className='bg-white rounded-3xl shadow-xl p-4 flex flex-col gap-4 w-1/4'>
          <h3 className='text-center font-bold'>Register</h3>
          <label className='flex flex-col gap-2'>
            <span>Name:</span>
            <Field className='p-2 border-1 border-black shadow-md rounded-md' name='name' />
          </label>
          <label className='flex flex-col gap-2'>
            <span>Email:</span>
            <Field className='p-2 border-1 border-black shadow-md rounded-md' name='email' />
          </label>
          <label className='flex flex-col gap-2'>
            <span>Password:</span>
            <Field className='p-2 border-1 border-black shadow-md rounded-md' name='password' type='password' />
          </label>
          <button
            className='px-4 py-2 shadow-2xl rounded-md bg-teal-400 text-white cursor-pointer hover:bg-teal-500 transition-all duration-300'
            type='submit'
          >
            Register
          </button>
          <p>
            You already have account?
            <Link className='text-teal-500' to='/login'>
              Login!{' '}
            </Link>
          </p>
        </Form>
      </Formik>
    </div>
  );
};
export default Register;
