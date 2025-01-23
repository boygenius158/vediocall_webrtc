import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <Fragment>
      <h1>404 - Page Not Found</h1>
      <Link to="/">Go Home</Link>
    </Fragment>
  );
};

export default NotFound;
