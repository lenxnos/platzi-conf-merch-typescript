import React, { FC, useContext } from 'react';
import { Link } from 'react-router-dom';
import { AppContext } from '../context';
import { Product } from '../models';
import '../styles/components/Checkout.css';

const Checkout: FC = () => {
  const {
    state: { cart },
    removeFromCart,
  } = useContext(AppContext);

  const handleRemoveFromCart = (product: Product) => () => {
    removeFromCart(product);
  };

  const handleSumTotal = (): number => {
    const reducer = (acc: number, curr: Product): number => acc + curr.price;
    const sum = cart.reduce(reducer, 0);
    return sum;
  };

  return (
    <div className="Checkout">
      <div className="Checkout-content">
        <h3>Lista de pedidos</h3>
        {cart.length > 0 ? (
          cart.map((product: Product) => (
            <div className="Checkout-item" key={product.id}>
              <div className="Checkout-element">
                <h4>{product.title}</h4>
                <span>${product.price}</span>
              </div>
              <button type="button" onClick={handleRemoveFromCart(product)}>
                <i className="fas fa-trash-alt" />
              </button>
            </div>
          ))
        ) : (
          <h3>No hay productos en el carrito</h3>
        )}
      </div>
      {cart.length > 0 && (
        <div className="Checkout-sidebar">
          <h3>{`Precio Total: $ ${handleSumTotal()}`}</h3>
          <Link to="/checkout/information">
            <button type="button">Continuar pedido</button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Checkout;
