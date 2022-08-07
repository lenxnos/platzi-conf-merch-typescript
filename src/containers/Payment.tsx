import React, { FC } from 'react';
import '../styles/components/Payment.css';

const Payment: FC = () => {
  return (
    <div className="Payment">
      <div className="Payment-content">
        <h3>Resumen de la orden:</h3>
        <div className="Payment-button">Botón de pago con Paypal</div>
      </div>
      {/** TODO - Add sidebar */}
      <div className="Payment-sidebar" />
    </div>
  );
};

export default Payment;
