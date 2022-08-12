import React, { FC, useContext } from 'react';
import Map from '../components/Map';
import Seo from '../components/Seo';
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
    <>
      <Seo>
        <title>Platzi Conf Merch - Success</title>
        <meta
          name="keywords"
          content="E-commerce,HTML, CSS, JavaScript, React"
        />
        <meta
          name="description"
          content="Todos los productos en un solo lugar"
        />
      </Seo>
      <div className="Success">
        <div className="Success-content">
          <h2>{`${buyer?.name} Gracias por tu compra`}</h2>
          <span>Tu pedido llegara en 3 días a tu dirección:</span>
          <div className="Success-map">
            <Map location={location} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Success;
