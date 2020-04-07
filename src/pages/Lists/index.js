import React from 'react';

import Header from '../../components/Header';
import Form from './Form';
import ListItem from './ListItem';

import './styles.css';

export default function Lists() {
  return (
    <div>
      <Header />
      <div className="page-container">
        <Form />
        <div className="list-items-container">
          <ListItem />
        </div>
      </div>
    </div>
  );
}
