import React, { useRef, useContext } from 'react';

import { Link, useNavigate } from 'react-router-dom';
import { AppContext } from '../context';

import '../styles/components/Information.css';

function Information() {
  const {
    state: { cart },
    addToBuyer,
  } = useContext(AppContext);
  const form = useRef(null);
  const navigate = useNavigate();

  const handleSubmit = () => {
    const formData = new FormData(form.current!);
    const buyer = {
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      address: formData.get('address') as string,
      apto: formData.get('apto') as string,
      city: formData.get('city') as string,
      country: formData.get('country') as string,
      state: formData.get('state') as string,
      cp: formData.get('cp') as string,
      phone: formData.get('phone') as string,
    };
    addToBuyer(buyer);
    navigate('/checkout/payment');
  };

  return (
    <div className="Information">
      <div className="Information-content">
        <div className="Information-head">
          <h2>Información de contacto:</h2>
        </div>
        <div className="Information-form">
          <form ref={form}>
            <label htmlFor="name">
              Nombre completo
              <input
                type="text"
                placeholder="Nombre completo"
                name="name"
                id="name"
              />
            </label>
            <label htmlFor="email">
              Correo electrónico
              <input
                type="text"
                placeholder="Correo electrónico"
                name="email"
                id="email"
              />
            </label>
            <label htmlFor="address">
              Dirección
              <input
                type="text"
                placeholder="Dirección"
                name="address"
                id="address"
              />
            </label>
            <label htmlFor="apto">
              Apto
              <input type="text" placeholder="Apto" name="apto" id="apto" />
            </label>
            <label htmlFor="country">
              País
              <input
                type="text"
                placeholder="País"
                name="country"
                id="country"
              />
            </label>
            <label htmlFor="state">
              Estado
              <input type="text" placeholder="Estado" name="state" id="state" />
            </label>
            <label htmlFor="city">
              Ciudad
              <input type="text" placeholder="Ciudad" name="city" id="city" />
            </label>
            <label htmlFor="cp">
              Código postal
              <input
                type="text"
                placeholder="Código postal"
                name="cp"
                id="cp"
              />
            </label>
            <label htmlFor="phone">
              Teléfono
              <input
                type="text"
                placeholder="Teléfono"
                name="phone"
                id="phone"
              />
            </label>
          </form>
        </div>
        <div className="Information-buttons">
          <div className="Information-back">
            <Link to="/checkout">Regresar</Link>
          </div>
          <div className="Information-next">
            <button type="button" onClick={handleSubmit}>
              Pagar
            </button>
          </div>
        </div>
      </div>
      <div className="Information-sidebar">
        <h3>Resumen de la orden:</h3>
        {cart.map((product) => (
          <div key={product.id} className="Information-item">
            <div className="Information-element">
              <h4>{product.title}</h4>
              <span>${product.price}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Information;
