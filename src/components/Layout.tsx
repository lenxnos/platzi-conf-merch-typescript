import React, { FC } from 'react';
import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';
import '../styles/components/Layout.css';

const Layout: FC = () => {
  return (
    <div className="Main">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
