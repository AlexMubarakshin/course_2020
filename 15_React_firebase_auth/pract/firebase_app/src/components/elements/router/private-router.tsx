import React from 'react';
import { useSelector } from 'react-redux';
import { isLoaded, isEmpty } from 'react-redux-firebase';
import { Route, Redirect } from 'react-router-dom';

// https://react-redux-firebase.com/docs/recipes/auth.html

function PrivateRoute({ children, ...rest }: any): React.ReactElement {
  const auth = useSelector(state => (state as any).firebase.auth);

  return (
    <Route
      {...rest}
      render={({ location }): React.ReactElement =>
        isLoaded(auth) && !isEmpty(auth) ? (
          children
        ) :
          (
            <Redirect
              to={{
                pathname: '/login',
                state: { from: location }
              }}
            />
          )
      }
    />
  );
}

export default PrivateRoute;