import React from 'react';

import Header from '../../components/Header';
import NewList from '../../components/List/NewList';
import List from '../../components/List/List';
import './styles.css';

export default function Home() {
  return (
    <div>
      <Header />
      <div className="page-container">
        <NewList />
        <List />
      </div>
    </div>
  );
}
