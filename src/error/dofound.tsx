import React from 'react';
import { FaSadTear } from 'react-icons/fa';
import Link from 'next/link';

const Dofound = () => {
  return (
    <div className='w-screen h-[700px] flex items-center justify-center flex-col text-center'>
      <FaSadTear className='text-8xl text-black mb-4 animate-bounce' />{' '}
      <h1 className='text-6xl font-bold mb-4'>404</h1>
      <p className='text-2xl mb-8'>
        Oops! The page you are looking for does not exist.
      </p>
      <div className='mt-4'>
        <Link
          href='/'
          className='px-4 py-2 border border-dashed border-gray-500 text-black rounded-lg shadow-lg transition duration-300 ease-in-out hover:bg-gray-300 hover:text-white hover:shadow-xl'
        >
          Go to Homepage
        </Link>
      </div>
    </div>
  );
};

export default Dofound;
