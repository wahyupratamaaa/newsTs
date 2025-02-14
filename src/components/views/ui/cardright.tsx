import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { poppins } from '../../fonts/poppins';
import Profile from '../ui/profile';
import { navbar as ItemNavbar } from '../../../pages/api/data';
import Verified from '../ui/verified';
import { fullText } from '../../../pages/api/data';

const Cardright = () => {
  const { img } = ItemNavbar[0];
  const [text, setText] = useState('');

  useEffect(() => {
    let index = 0;
    let timeout: NodeJS.Timeout;

    const typeText = () => {
      if (index < fullText.length) {
        setText((prev) => prev + fullText[index]);
        index++;
        timeout = setTimeout(typeText, 50);
      } else {
        setTimeout(() => {
          setText('');
          index = 0;
          typeText();
        }, 10);
      }
    };

    typeText();

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  return (
    <div className='flex flex-col w-[250rem] h-full justify-between  rounded-xl p-10 gap-3 '>
      <div className='flex gap-3 w-full items-center'>
        <Profile img={img!} className='border border-dashed border-zinc-500' />

        <div className='flex flex-col items-start justify-start space-y-1'>
          <div className='flex items-center space-x-1'>
            <p className='text-[10px] font-bold'>
              Wahyu Pratama | ex-Software Engineer at Tiket.com
            </p>
            <Verified width={13} height={13} />
          </div>
          <p className='text-[10px] font-bold'>Malang, Indonesia</p>
        </div>
      </div>
      <p
        className={`text-sm indent-10 font-poppins-400 inset-8 ${poppins.className}`}
        dangerouslySetInnerHTML={{ __html: text }}
      ></p>
      <div className='flex justify-end'>
        <Image
          src='/icondipantai.svg'
          alt='telent'
          width={300}
          height={300}
          className='mt-10 '
        ></Image>
      </div>
    </div>
  );
};

export default Cardright;
