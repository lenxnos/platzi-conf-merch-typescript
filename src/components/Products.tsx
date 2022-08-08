import React, { FC, useContext } from 'react';
import Product from './Product';
import { Product as IProduct } from '../models';
import '../styles/components/Products.css';
import { AppContext } from '../context';

const Products: FC = () => {
  const {
    state: { products },
    addToCart,
  } = useContext(AppContext);

  const handleAddToCart = (product: IProduct) => () => {
    addToCart(product);
  };

  return (
    <div className="Products">
      <div className="Products-items">
        {products.map((product) => (
          <Product
            key={product.id}
            product={product}
            handleAddToCart={handleAddToCart}
          />
        ))}
      </div>
    </div>
  );
};

export default Products;
