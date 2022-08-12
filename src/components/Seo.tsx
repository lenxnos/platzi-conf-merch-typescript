import React, { FC } from 'react';
import { Helmet } from 'react-helmet';

interface SeoProps {
  children: React.ReactNode;
}

const Seo: FC<SeoProps> = ({ children }) => {
  return <Helmet>{children}</Helmet>;
};

export default Seo;
