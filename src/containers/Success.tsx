import React, { FC, useContext } from 'react';
import Map from '../components/Map';
import { AppContext } from '../context';
import { useLocationAddress } from '../hooks';

import '../styles/components/Success.css';

const Success: FC = () => {
  const {
    state: { buyer: buyers },
  } = useContext(AppContext);
  const [buyer] = buyers;

  const address = useLocationAddress(buyer?.address || '');

  const location = [address.lat, address.lng] as [number, number];

  return (
    <div className="Success">
      <div className="Success-content">
        <h2>{`${buyer?.name} Gracias por tu compra`}</h2>
        <span>Tu pedido llegara en 3 días a tu dirección:</span>
        <div className="Success-map">
          <Map location={location} />
        </div>
      </div>
    </div>
  );
};

export default Success;
