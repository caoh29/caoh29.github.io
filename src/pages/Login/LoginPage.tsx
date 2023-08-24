import { useNavigate } from 'react-router-dom';

import { ErrorMessage, Field, Formik, Form } from 'formik';
import * as Yup from 'yup';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightToBracket } from '@fortawesome/free-solid-svg-icons';

import Button from '../../components/Button';

interface FormValues {
  username: string;
  password: string;
}

export default function LoginPage() {
  const navigate = useNavigate();

  const initialValues: FormValues = {
    username: '',
    password: '',
  };

  const passwordRegex =
    /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  const usernameRegex = /^(?=.*\d)[A-Za-z\d]{6,}$/;

  const validationSchema = Yup.object().shape({
    username: Yup.string()
      .required('Username is required')
      .max(15, 'Must be 15 characters or less')
      .matches(
        usernameRegex,
        'Must contain at least 1 number and at least 6 characters long'
      ),
    password: Yup.string()
      .required('Password is required')
      .max(15, 'Must be 15 characters or less')
      .matches(
        passwordRegex,
        'Must contain at least 1 number, 1 special character, 1 lower case letter, 1 upper case letter and at least 8 characters long'
      ),
  });

  const onSubmit = (
    values: FormValues,
    { resetForm }: { resetForm: () => void }
  ) => {
    if (
      values.username === process.env.REACT_APP_USERNAME &&
      values.password === process.env.REACT_APP_PASSWORD
    ) {
      localStorage.setItem('token', process.env.REACT_APP_TOKEN);
      navigate('/admin');
    } else {
      resetForm();
      alert('Invalid username or password');
    }
  };

  return (
    <main className="login">
      <h2>Log In</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        <Form className="form">
          <div className="form-element">
            <div className="form-line">
              <label htmlFor="username">Username</label>
              <Field name="username" type="text" placeholder="example123" />
            </div>
            <ErrorMessage name="username" />
          </div>

          <div className="form-element">
            <div className="form-line">
              <label htmlFor="password">Password</label>
              <Field name="password" type="password" placeholder="Example1*" />
            </div>
            <ErrorMessage name="password" />
          </div>
          <Button
            text="Log In"
            type="submit"
            icon={<FontAwesomeIcon icon={faArrowRightToBracket} />}
          />
        </Form>
      </Formik>
    </main>
  );
}
