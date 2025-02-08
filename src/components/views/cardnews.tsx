import React from 'react';
import Image from 'next/image';
import Cardright from '../atompage/cardright';

const Cardnews = () => {
  return (
    <>
      <p className='w-screen p-10 px-4 sm:px-8 md:px-16 lg:px-28 flex text-xl font-bold'>
        Recent blog posts
      </p>
      <div className='w-screen px-4 sm:px-8 md:px-16 lg:px-28'>
        <div className='flex'>
          <div className='flex flex-wrap justify-start gap-3'>
            {[...Array(18)].map((_, index) => (
              <div
                key={index}
                className='flex flex-col w-[300px] max-w-[25%] gap-5'
              >
                <Image
                  src='https://plus.unsplash.com/premium_photo-1738946837565-85f20772aae2?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxM3x8fGVufDB8fHx8fA%3D%3D'
                  alt='Recent blog post image'
                  className='rounded-lg'
                  width={300}
                  height={300}
                />
                <div className='flex flex-col gap-1 mb-5'>
                  <p className='text-lg font-bold'>Migransi diJawatimur</p>
                  <p className='text-sm text-zinc-500'>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                </div>
              </div>
            ))}
          </div>
          <Cardright />
        </div>
      </div>
    </>
  );
};

export default Cardnews;
