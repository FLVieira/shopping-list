import React from 'react';
import { Checkbox, Typography } from '@material-ui/core';

import CustomCard from '../../components/CustomCard';
import ListItemFooter from './ListItemFooter';

export default function ListItem() {
  return (
    <CustomCard
      link="#"
      image="https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/A_small_cup_of_coffee.JPG/1200px-A_small_cup_of_coffee.JPG"
      containerClass="list-item"
      footer={<ListItemFooter />}
    >
      <div>
        <div className="list-item-header">
          <Typography variant="subtitle1" component="h2">
            Coffe
          </Typography>
          <Checkbox />
        </div>
        <Typography component="p">1 Unity</Typography>
        <Typography component="p">R$10.00</Typography>
      </div>
    </CustomCard>
  );
}
