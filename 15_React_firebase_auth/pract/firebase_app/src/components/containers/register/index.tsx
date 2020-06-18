import React from 'react';
import { Formik, Field, Form } from 'formik';
import { TextField } from 'formik-material-ui';

import { VALIDATIONS_MESSAGES } from '../../../constants';
import LinearProgress from '@material-ui/core/LinearProgress';
import Button from '@material-ui/core/Button';
import { Link, useHistory } from 'react-router-dom';
import { useFirebase } from 'react-redux-firebase';

type RegisterValues = {
  email: string;
  password: string;
}

const INITIAL_VALUES: RegisterValues = {
  email: '',
  password: ''
};

function validate(values: RegisterValues): Partial<RegisterValues> {
  const errors: Partial<RegisterValues> = {};

  if (!values.email) {
    errors.email = VALIDATIONS_MESSAGES.REQUIRED;
  }
  // else if (!isRightFormat) {
  //   errors.email = VALIDATIONS_MESSAGES.EMAIL_WRONG_FORMAT;
  // }

  if (!values.password) {
    errors.password = VALIDATIONS_MESSAGES.REQUIRED;
  }

  return errors;
}

type RegisterContainerProps = {}

const RegisterContainer: React.FC<RegisterContainerProps> = () => {
  const firebase = useFirebase();

  const history = useHistory();

  const onSubmit = React.useCallback(async ({ email, password }: RegisterValues): Promise<void> => {
    try {
      await firebase.createUser({ email, password });
      history.push('/');
    } catch (err) {
      console.error(err);
    }
  }, []);

  return (
    <div>
      <h1>Регистрация 🙃</h1>
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

      <Link to='login'>
        Уже есть аккаунт
      </Link>
    </div>
  );
};


export default RegisterContainer;
