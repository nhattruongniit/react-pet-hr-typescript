import React, { memo } from 'react';
import { Link } from 'react-router-dom';

const DefaultAside = memo(() => {
  return (
    <div>
      this is default aside <br />
      <Link to="/home">home</Link>
      <Link to="/profile">profile</Link>
    </div>
  );
});

export default DefaultAside;
