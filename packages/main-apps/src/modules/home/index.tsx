import React from 'react';
import { Link } from 'react-router-dom';

const HomeModules = () => {
  return (
    <div>
      <p>This is Home Modules</p>
      <Link to="/about">To About</Link>
    </div>
  );
};

export default HomeModules;
