import React, { FC } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from '../components/Layout';
import {
  Home,
  Checkout,
  Information,
  NotFound,
  Payment,
  Success,
} from '../containers';

const App: FC = () => {
  return (
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
  );
};

export default App;
