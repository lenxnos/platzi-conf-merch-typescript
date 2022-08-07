import React, { FC } from 'react';
import { Product as IProduct } from '../models';
import Product from './Product';
import '../styles/components/Products.css';

interface Props {
  products: IProduct[];
}

const Products: FC<Props> = ({ products }) => {
  return (
    <div className="Products">
      <div className="Products-items">
        {products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;
