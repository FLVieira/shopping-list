import React from 'react';
import CustomCard from '../CustomCard';

import './styles.css';

export default function NewList(props) {
  return (
    <CustomCard link="/list" containerClass="new-list-container">
      <div>
        <p className="title">Add new list</p>
      </div>
    </CustomCard>
  );
}
