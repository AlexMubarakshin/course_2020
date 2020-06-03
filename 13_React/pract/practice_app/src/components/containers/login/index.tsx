import React from 'react';
import { connect } from 'react-redux';

import './styles.css';
import { login } from '../../../core/redux/auth/auth-actions';
import { LoginFunc } from '../../../core/redux/auth/types';

type LoginContainerProps = {
  login: LoginFunc;
}

const LoginContainer: React.FC<LoginContainerProps> = ({ login }: LoginContainerProps) => {
  const [email, changeEmail] = React.useState('');
  const [password, changePassword] = React.useState('');

  const onEmailChange = (e: React.ChangeEvent<HTMLInputElement>): void => changeEmail(e.target.value);
  const onPasswordChange = (e: React.ChangeEvent<HTMLInputElement>): void => changePassword(e.target.value);

  const onSubmit = (): void => {
    login(email, password);
  };

  return (
    <div className="login-container">
      <input onChange={onEmailChange} value={email} type="email" placeholder="email" />
      <input onChange={onPasswordChange} value={password} type="password" placeholder="password" />

      <button onClick={onSubmit}>LOGIN</button>
    </div>
  );
};


const mapStateToProps = () => ({});

const mapDispatchToProps = {
  login,
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);
