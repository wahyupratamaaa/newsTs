import React from 'react';
// import { navSmile as Navbarsmall } from '../../pages/api/data';

type Props = {
  Navbarsmall: string[];
};
const Nav = ({ Navbarsmall }: Props) => {
  return (
    <div className='w-full bg-[#f9e0c4] flex justify-end cursor-pointer'>
      <div className='px-4 sm:px-8 md:px-16 lg:px-28 pr-12 py-4 text-sm flex items-center gap-10 font-semibold text-gray-700'>
        {Array.isArray(Navbarsmall) ? (
          Navbarsmall.map((item, index) => <p key={index}>{item}</p>)
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
};

export default Nav;
