import  './Products.scss'
import React, { memo } from 'react';
import { Link } from 'react-router-dom';


const ProductItem = (props) => {
  return (
    <tr className='product__row'>
      <td>
        <Link to={`/product/${props.id}`}>
          <img className='product__image' src={props.images[0]} alt={props.title} />
        </Link>
      </td>
      <td className='product__title' title={props.title}>
        <Link to={`/product/${props.id}`}>{props.title}</Link>
      </td>
      <td>{props.price}$</td>
      <td>{props.brand}</td>
      <td>{props.category}</td>
      <td>{props.rating}</td>
    </tr>
  );
}

export default memo(ProductItem);
