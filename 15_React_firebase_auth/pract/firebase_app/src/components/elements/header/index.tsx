import React from 'react';
import { Link } from 'react-router-dom';

import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';

const Header: React.FC = () => {
  return (
    <AppBar position="static">
      <Link to="/login" className="app__header_login">
        <Button color="inherit">Login</Button>
      </Link>
    </AppBar>
  );
};

export default Header;
