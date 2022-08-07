import React, { FC } from 'react';
import { Product as IProduct } from '../models';

interface Props {
  product: IProduct;
}

const Product: FC<Props> = ({ product }) => {
  return (
    <div className="Products-item">
      <img src={product.image} alt={product.title} />
      <div className="Products-item-info">
        <h2>
          {product.title}
          <span>$ {product.price}</span>
        </h2>
        <p>{product.description}</p>
      </div>
      <button type="button">Comprar</button>
    </div>
  );
};

export default Product;
