import React, { useContext } from 'react';
import { Formik, Form, Field } from 'formik';
import { useRouter } from 'next/router';
import * as Yup from 'yup';
import _get from 'lodash.get';
import { AuthDispatchContext, signIn } from '../contexts/auth';
import Input from '../components/core/form-controls/Input';

const LoginSchema = Yup.object().shape({
  password: Yup.string().required('Password is required!'),
  username: Yup.string().required(
    'Mobile Number or Email Address is required!',
  ),
});

const AuthPage = () => {
  const authDispatch = useContext(AuthDispatchContext);
  const history = useRouter();
  const goToForgotPassword = (e) => {
    e.preventDefault();
  };

  const goToRegister = (e) => {
    e.preventDefault();
  };

  const signInSuccess = (userData) => {
    signIn(authDispatch, userData);
    if (userData) {
      history.push('/checkout');
    } else {
      history.push('/');
    }
  };

  return (
    <Formik
      initialValues={{
        username: '',
        password: '',
      }}
      validationSchema={LoginSchema}
      onSubmit={async (values, { resetForm }) => {
        try {
          const userData = { ...values };
          resetForm();
          signInSuccess(userData);
        } catch (err) {
          console.error(err);
        }
      }}
    >
      {() => (
        <div className="form__wrapper">
          <Form className="form">
            <Field
              name="username"
              type="text"
              placeholder="Mobile Number or Email Address"
              component={Input}
            />
            <Field
              name="password"
              type="password"
              placeholder="Password"
              component={Input}
            />
            <a href="#" onClick={goToForgotPassword}>
              Forgot Password?
            </a>
            <button className="auth-button block" onClick={() => {}}>
              Login
            </button>

            <p>
              New here?{' '}
              <a href="#" onClick={goToRegister}>
                Sign Up Now!
              </a>
            </p>
          </Form>
        </div>
      )}
    </Formik>
  );
};

export default AuthPage;
