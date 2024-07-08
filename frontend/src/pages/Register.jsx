import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Link } from 'react-router-dom';
import { ROUTES } from '@/router/consts';
import styles from '@/pages/Login.module.scss';

const requiredField = 'Required';

const Register = () => {
  const handleSubmit = values => {
    alert(JSON.stringify(values));
  };

  return (
    <div className={styles.container}>
      <Formik
        initialValues={{
          name: '',
          email: '',
          password: '',
        }}
        onSubmit={handleSubmit}
        validate={values => {
          const errors = {};
          if (!values.name) errors.name = requiredField;
          if (!values.email) {
            errors.email = requiredField;
          } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
            errors.email = 'Invalid format';
          }
          if (!values.password) {
            errors.password = requiredField;
          } else if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})/.test(values.password)) {
            errors.password = 'The password must contain at least one number, uppercase letter, and symbol';
          }

          return errors;
        }}
      >
        <div className={styles.form}>
          <Form>
            <h2 className={styles.title}>Register</h2>
            <div>
              <Field type="text" name="name" placeholder="Name" className={styles.input} />
              <div>
                <ErrorMessage name="name" />
              </div>
            </div>

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

            <button type="submit">Submit</button>
          </Form>
          <div className={styles.link}>
            <Link to={ROUTES.LOGIN} className={styles.signUp}>
              Already have an account?
            </Link>
          </div>
        </div>
      </Formik>
    </div>
  );
};

export default Register;
