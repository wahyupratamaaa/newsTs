import React from 'react';
import { Tag as ItemTag } from '../../pages/api/data';

const Tag = () => {
  const { title, description } = ItemTag[0];
  return (
    <div className='w-screen h-auto px-26 mt-26 px-4 sm:px-8 md:px-16 lg:px-28'>
      <div className='w-full h-auto bg-[#F6F6F6] py-10 flex justify-center rounded-xl'>
        <div className='flex flex-col w-1/2 text-center gap-2'>
          <p className='text-xl uppercase text-zinc-500'>{title}</p>
          <span className='text-4xl font-semibold'>{description}</span>
        </div>
      </div>
    </div>
  );
};

export default Tag;
