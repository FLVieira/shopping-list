import React from 'react';

import './styles.css';

export default function ListFooter(props) {
  return (
    <div className="list-footer">
      <p>01/01/2020</p>
      <p>R${props.total}</p>
    </div>
  );
}
