import React from 'react';
import { faShoppingBasket, faCheck } from '@fortawesome/free-solid-svg-icons';

import CustomCard from '../CustomCard';
import ListFooter from './ListFooter';
import ListItem from './ListItem';

import './styles.css';

export default function List(props) {
  return (
    <CustomCard
      containerClass="list-container"
      footer={<ListFooter />}
      link="/list"
    >
      <div>
        <p className="title">Month</p>
        <div className="list-card-body">
          <ListItem icon={faShoppingBasket} text="1 item left" />
          <ListItem icon={faCheck} text="2 items bought" />
        </div>
      </div>
    </CustomCard>
  );
}
