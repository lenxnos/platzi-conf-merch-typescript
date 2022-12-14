import React, { FC } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { PayPalScriptProvider } from '@paypal/react-paypal-js';

import Layout from '../components/Layout';
import {
  Home,
  Checkout,
  Information,
  NotFound,
  Payment,
  Success,
} from '../containers';
import { AppProvider } from '../context';

const PAYPAL_OPTIONS = {
  'client-id': process.env.PAYPAL_PAYMENT_CLIENT_ID || '',
  currency: 'USD',
  intent: 'capture',
};

const App: FC = () => {
  return (
    <PayPalScriptProvider options={PAYPAL_OPTIONS}>
      <AppProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/checkout/information" element={<Information />} />
              <Route path="/checkout/payment" element={<Payment />} />
              <Route path="/checkout/success" element={<Success />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </AppProvider>
    </PayPalScriptProvider>
  );
};

export default App;
