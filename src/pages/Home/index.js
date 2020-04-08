import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import Header from '../../components/Header';
import NewList from '../../components/List/NewList';
import List from '../../components/List/List';
import './styles.css';

export default function Home() {
  const data = useSelector((state) => state.addProduct);
  let total = 0;
  total = (data.products.reduce((tot, product) => tot + product.total, 0));

  return (
    <div>
      <Header />
      <div className="page-container">
        <NewList />
        { data.products.length >= 1 ? <List list={data.list} total={total} /> : null}
      </div>
    </div>
  );
}
