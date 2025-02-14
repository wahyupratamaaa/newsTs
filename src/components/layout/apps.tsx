import React from 'react';
import Navbar from '../views/navbar';

import Footer from '../views/footer';

type Props = {
  children: React.ReactNode;
};

const Apps = (props: Props) => {
  const { children } = props;
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default Apps;
