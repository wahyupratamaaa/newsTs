import React, { useEffect, useState } from 'react';
import Image from 'next/image';
// import animationNews from '../../../public/animation/newspaper.json';
import { poppins } from '../fonts/poppins';
// import Lottie from 'lottie-react';

const Cardright = () => {
  const [text, setText] = useState('');
  const fullText =
    'Gatot mengatakan, untuk memadamkan api yang membakar dua kapal tersebut, dikerahkan sebanyak 9 unit mobil pemadam kebakaran dengan kekuatan 23 personel ';

  useEffect(() => {
    let index = 0;
    let interval: NodeJS.Timeout;

    const typeText = () => {
      interval = setInterval(() => {
        setText((prev) => prev + fullText[index]);
        index++;
        if (index === fullText.length) {
          clearInterval(interval);
          setTimeout(() => {
            setText('');
            index = 0;
            typeText();
          }, 1000);
        }
      }, 50);
    };
    typeText();
    return () => clearInterval(interval);
  }, []);

  return (
    <div className='flex flex-col w-[250rem] justify-between h-1/2 border border-dashed border-black rounded-xl p-10 gap-3 '>
      <p className={`text-xl font-poppins-400 ${poppins.className}`}>{text}</p>
      <div className='flex justify-end'>
        <Image
          src='/talentscc.webp'
          alt='telent'
          width={100}
          height={100}
        ></Image>
      </div>
    </div>
  );
};

export default Cardright;
