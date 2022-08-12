import React, { FC, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../context';
import '../styles/components/Payment.css';

import { handleSumCartTotal } from '../utils';
import PaypalButton from '../components/PaypalButton';
import Seo from '../components/Seo';

const Payment: FC = () => {
  const {
    state: { cart, buyer },
    addNewOrder,
  } = useContext(AppContext);

  const navigate = useNavigate();

  const totalToPay = handleSumCartTotal(cart);

  const handlePaymentSuccess = (data: any) => {
    if (data.status === 'COMPLETED') {
      const newOrder = {
        buyer,
        product: cart,
        payment: data,
      };
      addNewOrder(newOrder);
      navigate('/checkout/success');
    }
  };

  const handlePaymentError = (error: any) => {
    console.log(error);
  };

  return (
    <>
      <Seo>
        <title>Platzi Conf Merch - Payment</title>
        <meta
          name="keywords"
          content="E-commerce,HTML, CSS, JavaScript, React"
        />
        <meta
          name="description"
          content="Todos los productos en un solo lugar"
        />
      </Seo>
      <div className="Payment">
        <div className="Payment-content">
          <h3>Resumen de la orden:</h3>
          {cart.map((product) => (
            <div className="Payment-item" key={product.title}>
              <h4>{product.title}</h4>
              <span>$ {product.price}</span>
            </div>
          ))}
          <div className="Payment-button">
            <PaypalButton
              amount={totalToPay.toFixed(2)}
              onPaymentSuccess={handlePaymentSuccess}
              onPaymentError={handlePaymentError}
            />
          </div>
        </div>
        {/** TODO - Add sidebar */}
        <div className="Payment-sidebar" />
      </div>
    </>
  );
};

export default Payment;
