import React from 'react';
import { icons } from '../../../pages/api/data';
const Sosiafooter = () => {
  return (
    <nav>
      <div className='flex gap-2 justify-end cursor-pointer '>
        {icons.map((icon, index) => (
          <a key={index}>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='35'
              height='35'
              viewBox='0 0 24 24'
              className='rounded-full p-2 border border-dashed border-zinc-700 hover:bg-zinc-200'
            >
              <path d={icon.path}></path>
            </svg>
          </a>
        ))}
      </div>
    </nav>
  );
};

export default Sosiafooter;
