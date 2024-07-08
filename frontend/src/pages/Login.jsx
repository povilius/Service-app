import { ROUTES } from '@/router/consts';
import { Link } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import styles from '@/pages/Login.module.scss';

const Login = () => {
  const handleSubmit = values => {
    alert(JSON.stringify(values));
  };

  return (
    <div className={styles.container}>
      <Formik
        initialValues={{ email: '', password: '' }}
        onSubmit={handleSubmit}
        validate={values => {
          const errors = {};

          if (!values.email) {
            errors.email = 'Email is required';
          } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
            errors.email = 'Invalid format';
          }
          if (!values.password) errors.password = 'Password is required';

          return errors;
        }}
      >
        <div className={styles.form}>
          <Form>
            <h2 className={styles.title}>Login</h2>

            <div>
              <Field type="email" name="email" placeholder="Email" className={styles.input} />

              <div>
                <ErrorMessage name="email" />
              </div>
            </div>

            <div>
              <Field type="password" name="password" placeholder="Password" className={styles.input} />
              <div>
                <ErrorMessage name="password" />
              </div>
            </div>

            <button>Login</button>
          </Form>
          <div className={styles.link}>
            <Link to={ROUTES.REGISTER} className={styles.signUp}>
              Don&apos;t have an account?
            </Link>
          </div>
        </div>
      </Formik>
    </div>
  );
};

export default Login;
