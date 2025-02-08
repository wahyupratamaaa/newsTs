import React from 'react';
import animationNews from '../../../public/animation/newspaper.json';
import { Poppins } from 'next/font/google';
import Lottie from 'lottie-react';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400'],
});

const Cardright = () => {
  return (
    <div className='flex flex-col justify-between h-1/2 border border-dashed border-black rounded-xl p-10  '>
      <p className={`text-xl font-poppins-400 ${poppins.className}`}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, nulla
        non quibusdam esse minima eius sit saepe. Quos pariatur vel voluptatum,
        eveniet quasi reiciendis illo voluptatibus ipsum cupiditate quaerat est!
      </p>
      <Lottie
        animationData={animationNews}
        loop={true}
        classID='lottie'
        className='w-[200px] h-[200px] '
      />
    </div>
  );
};

export default Cardright;
