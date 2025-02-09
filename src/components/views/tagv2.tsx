import React, { useState, useEffect } from 'react';
import { Poppins } from 'next/font/google';
import Lottie from 'lottie-react';
import Newsanimation from '../../../public/animation/document-search.json';
import { CiShoppingTag } from 'react-icons/ci';

const poppins = Poppins({ subsets: ['latin'], weight: '400' });

const Tagv2 = () => {
  const [text, setText] = useState('');
  const fullText =
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis itaque accusamus impedit provident doloremque laboriosam dolorum ab, veritatis est temporibus maiores vero non. Ad provident ipsam minus laudantium rem dolorum.';

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setText((prev) => prev + fullText[index]);
      index++;
      if (index === fullText.length) {
        clearInterval(interval);
      }
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className='w-auto h-auto px-4 sm:px-8 md:px-16 lg:px-28 mt-16'>
      <div className='w-full border border-dashed border-black rounded-xl'>
        <div className='flex flex-col w-full p-20 gap-5'>
          <CiShoppingTag className='w-10 h-10' />
          <p
            className={`text-2xl text-justify  indent-14 w-full ${poppins.className}`}
          >
            {text}
          </p>
          <div className='flex justify-end '>
            <Lottie
              animationData={Newsanimation}
              loop={true}
              className='w-[200px] h-[200px]  border border-red-500 '
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tagv2;
