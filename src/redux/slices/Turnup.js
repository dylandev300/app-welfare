import React from 'react';

const Turnup = ({ item }) => {
  return (
    <tr>
      <td>
        <img src={item.imgUrl} style={{ height: '6rem' }} />
      </td>
      <td>{item.ProductName}</td>
      <td>{item.price}</td>
      <td>{item.quantity}</td>

      <button>Delete</button>
    </tr>
  );
};

export default Turnup;
