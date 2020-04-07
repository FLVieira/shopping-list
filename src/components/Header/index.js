import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar } from '@material-ui/core';

import './styles.css';

export default function Header() {
  return (
    <AppBar position="static" color="primary">
      <div className="header">
        <Link to="/list">
          <p className="header-title">Shopping List</p>
        </Link>
      </div>
    </AppBar>
  );
}
