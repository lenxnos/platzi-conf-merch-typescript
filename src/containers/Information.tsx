import React from 'react';

import '../styles/components/Information.css';

function Information() {
  return (
    <div className="Information">
      <div className="Information-content">
        <div className="Information-head">
          <h2>Contact Information:</h2>
        </div>
        <div className="Information-form">
          <form>
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
          <div className="Information-back">Go Back</div>
          <div className="Information-next">Pay</div>
        </div>
      </div>
      <div className="Information-sidebar">
        <h3>Order Summary:</h3>
        <div className="Information-item">
          <div className="Information-element">
            <h4>Item name</h4>
            <span>$10</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Information;
