import React from 'react';
import { Formik, Field, Form } from 'formik';
import { TextField } from 'formik-material-ui';

import { VALIDATIONS_MESSAGES } from '../../../constants';
import LinearProgress from '@material-ui/core/LinearProgress';
import Button from '@material-ui/core/Button';
import { Link, useHistory } from 'react-router-dom';

import { connect } from 'react-redux';
import { useFirebase } from 'react-redux-firebase';

type LoginValues = {
  email: string;
  password: string;
}

const INITIAL_VALUES: LoginValues = {
  email: '',
  password: ''
};

function validate(values: LoginValues): Partial<LoginValues> {
  const errors: Partial<LoginValues> = {};

  if (!values.email) {
    errors.email = VALIDATIONS_MESSAGES.REQUIRED;
  }
  // else if (
  //   VALIDATION_REGEX.EMAIL_REGEX.test(values.email)
  // ) {
  //   errors.email = VALIDATIONS_MESSAGES.EMAIL_WRONG_FORMAT;
  // }

  if (!values.password) {
    errors.password = VALIDATIONS_MESSAGES.REQUIRED;
  }

  return errors;
}

const LoginContainer: React.FC = () => {
  const firebase = useFirebase();

  const history = useHistory();

  const onSubmit = React.useCallback(async ({ email, password }: LoginValues): Promise<void> => {
    try {
      await firebase.login({ email, password });
      history.push('/');
    } catch (err) {
      console.error(err);
    }
  }, []);

  return (
    <div>
      <h1>Вход 🙃</h1>
      <Formik
        initialValues={INITIAL_VALUES}
        validate={validate}
        onSubmit={onSubmit}
      >
        {
          ({
            submitForm,
            isSubmitting,
          }): React.ReactElement =>
            (
              <Form>
                <Field
                  component={TextField}
                  name="email"
                  type="email"
                  label="Email"
                />
                <br />
                <Field
                  component={TextField}
                  type="password"
                  label="Пароль"
                  name="password"
                />
                <br />

                {isSubmitting && <LinearProgress />}

                <br />

                <Button
                  variant="contained"
                  color="primary"
                  disabled={isSubmitting}
                  onClick={submitForm}
                >
                  Войти
                </Button>
              </Form>
            )
        }
      </Formik>

      <Link to='register'>
        Регистрация
      </Link>
    </div>
  );
};

const enhance = connect(
  // Map redux state to component props
  (connectProps) => ({
    connectProps
  })
);

export default enhance(LoginContainer);
