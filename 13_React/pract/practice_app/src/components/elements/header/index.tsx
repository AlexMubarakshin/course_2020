import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

const Header: React.FC = () => {
  return (
    <header className="app__header">
      <Link to="/login" className="app__header_login">
        <div>LOGIN</div>
      </Link>
    </header>
  );
};

export default Header;
