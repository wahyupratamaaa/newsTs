import React from 'react';
import Link from 'next/link';
import { GoBell } from 'react-icons/go';
import { SiWikibooks } from 'react-icons/si';
import Image from 'next/image';
import { navbar as ItemNavbar } from '../../pages/api/data';

const Navbar = () => {
  if (!ItemNavbar || ItemNavbar.length === 0) {
    return <p>bentar ...</p>;
  }
  const { title, text, img } = ItemNavbar[0];
  if (!title || !text || !img) {
    return <p>Data tidak lengkap</p>;
  }

  return (
    <div className='w-full h-26 bg-[#fbfbfb] py-3'>
      <div className='px-4 sm:px-8 md:px-16 lg:px-28 flex justify-between '>
        <div className='flex gap-16'>
          <div className='flex items-center gap-3'>
            <Link href='/error'>
              <p className='text-black text-2xl font-normal'>{title}</p>
            </Link>
          </div>
        </div>
        <div className='flex gap-6 items-center justify-between cursor-pointer'>
          <div className='flex gap-3'>
            <SiWikibooks className='w-6 h-6' />
            <span>{text}</span>
          </div>
          <GoBell className='w-6 h-6' />
          <Link href='/'>
            <Image
              src={img}
              alt='siapa'
              className='w-10 h-10 rounded-full object-cover'
              width={100}
              height={100}
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
