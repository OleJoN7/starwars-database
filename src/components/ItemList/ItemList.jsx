import React from 'react';

import './ItemList.css';

const ItemList = (props) => {
    const {data,onItemSelected,children} = props;
    const items = data.map(item => {
      const {id} = item;
      const info = children(item);
      return(
        <li key={id}
            onClick={() => onItemSelected(id)}
            className="list-group-item">
          {info}
        </li>
      )
    })//.slice(0,5)

    return (
      <ul className="item-list list-group">
        {items}
      </ul>
    );
}

export default ItemList;