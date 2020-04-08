import React from 'react';
import { Checkbox, Typography } from '@material-ui/core';

import CustomCard from '../../components/CustomCard';
import ListItemFooter from './ListItemFooter';

export default function ListItem({ product }) {
  return (
    <CustomCard
      link="#"
      image="https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/A_small_cup_of_coffee.JPG/1200px-A_small_cup_of_coffee.JPG"
      containerClass="list-item"
      footer={<ListItemFooter total={product.total} />}
    >
      <div>
        <div className="list-item-header">
          <Typography variant="subtitle1" component="h2">
            {product.name}
          </Typography>
          <Checkbox />
        </div>
        <Typography component="p">{product.quantity} {product.unit}</Typography>
        <Typography component="p">{product.price}</Typography>
      </div>
    </CustomCard>
  );
}
