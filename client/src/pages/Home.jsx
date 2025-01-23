import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <Fragment>
      <h1>Home</h1>
      <Link to="/login">Login</Link>
      <br />
      <Link to="/register">Register</Link>
    </Fragment>
  );
};

export default Home;
