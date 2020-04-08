import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons';

export default function ListItemFooter(props) {
  return (
    <div className="list-card-footer">
      <div className="list-card-footer-actions">
        <FontAwesomeIcon
          icon={faPen}
          color="#b2102f"
          size="1x"
        />
        <FontAwesomeIcon
          icon={faTrash}
          color="#2c387e"
          size="1x"
        />
      </div>
      <p>R${props.total}</p>
    </div>
  );
}
