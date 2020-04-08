import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Header from '../../components/Header';
import Form from './Form';
import ListItem from './ListItem';
import * as ListActions from '../../store/actions/addProduct';

import './styles.css';

export default function Lists() {
  const dispatch = useDispatch();
  const productsData = useSelector((state) => state.addProduct.products);

  function handleAddProduct(product, list) {
    dispatch(ListActions.addProduct(product, list));
  }

  return (
    <div>
      <Header />
      <div className="page-container">
        <Form addProduct={handleAddProduct} />
        <div className="list-items-container">
          {
          productsData.map((product) => (
            <ListItem product={product} key={Math.random()} />
          ))
          }
        </div>
      </div>
    </div>
  );
}
