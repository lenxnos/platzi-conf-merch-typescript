import React, { FC } from 'react';

import '../styles/components/Success.css';

const Success: FC = () => {
  return (
    <div className="Success">
      <div className="Success-content">
        <h2>Gracias por tu compra</h2>
        <span>Tu pedido llegara en 3 días a tu dirección:</span>
        <div className="Success-map">
          {/** TODO - Add map */}
          Google Maps
        </div>
      </div>
    </div>
  );
};

export default Success;
