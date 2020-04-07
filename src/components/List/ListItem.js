import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Proptypes from 'prop-types';

import './styles.css';

export default function ListItem(props) {
  return (
    <div className="list-card-item">
      <FontAwesomeIcon icon={props.icon} size="sm" />
      <p>{props.text}</p>
    </div>
  );
}

ListItem.propTypes = {
  icon: Proptypes.object.isRequired,
  text: Proptypes.string.isRequired,
};
