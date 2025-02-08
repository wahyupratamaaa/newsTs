import React from 'react';
import Navbar from '../views/navbar';
import Navsmile from '../views/navsmile';
import Footer from '../views/footer';

type Props = {
  children: React.ReactNode;
};

const Apps = (props: Props) => {
  const { children } = props;
  return (
    <>
      <Navsmile
        Navbarsmall={['About', 'News', 'Events', 'Programmes', 'Help center']}
      />
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default Apps;
