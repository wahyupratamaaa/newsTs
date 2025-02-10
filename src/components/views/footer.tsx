import React from 'react';
import Sosialfooter from './ui/sosiafooter';
import { iconPath } from '../../pages/api/data';

const Footer = () => {
  return (
    <footer className='footer flex flex-col gap-8 footer-center bg-primary text-primary-content p-10 px-4 sm:px-8 md:px-16 lg:px-28 '>
      <aside className='flex flex-col gap-5'>
        <svg
          width='50'
          height='50'
          viewBox='0 0 24 24'
          xmlns='http://www.w3.org/2000/svg'
          fillRule='evenodd'
          clipRule='evenodd'
          className='inline-block fill-current'
        >
          <path d={iconPath}></path>
        </svg>
        <p className='font-bold'>
          ACME Industries Ltd.
          <br />
          Providing reliable tech since 1992
        </p>
        <p className='flex justify-between'>
          Copyright © {new Date().getFullYear()} - All right reserved
        </p>
      </aside>
      <Sosialfooter />
    </footer>
  );
};

export default Footer;
