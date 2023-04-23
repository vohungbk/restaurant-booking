import React, { ReactNode } from 'react';

import Navbar from '@components/Navbar/Navbar';
import Footer from 'container/Footer';

type Props = {
  children: ReactNode;
};

const LayoutContainer = ({ children }: Props) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default LayoutContainer;
