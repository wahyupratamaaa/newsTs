import React, { useState } from 'react';
import Link from 'next/link';
import { GoBell } from 'react-icons/go';
import { SiWikibooks } from 'react-icons/si';
import { navbar as ItemNavbar } from '../../pages/api/data';
import { iconPath } from '../../pages/api/data';
import Profile from './ui/profile';
import { motion, AnimatePresence } from 'framer-motion';
import Verified from './ui/verified'; // Asumsikan Anda memiliki komponen Verified

const Navbar = () => {
  const [isHovered, setIsHovered] = useState(false);

  if (!ItemNavbar || ItemNavbar.length === 0) {
    return <p>bentar ...</p>;
  }
  const { img } = ItemNavbar[0];
  if (!img) {
    return <p>Data tidak lengkap</p>;
  }

  return (
    <div className='w-full h-26 bg-[#fbfbfb] py-8'>
      <div className='px-4 sm:px-8 md:px-16 lg:px-28 flex justify-between'>
        {/* Bagian Kiri (Logo dan Ikon) */}
        <motion.div
          className='flex gap-16 items-center'
          animate={{ x: 0 }} // Keep other elements stationary
        >
          <div className='flex items-center gap-3'>
            <Link href='/' className='flex items-center gap-3'>
              <svg
                width='35'
                height='35'
                viewBox='0 0 24 24'
                xmlns='http://www.w3.org/2000/svg'
                fillRule='evenodd'
                clipRule='evenodd'
                className='inline-block fill-current'
              >
                <path d={iconPath!}></path>
              </svg>
              <p className='font-bold'>{`News Tech />`}</p>
            </Link>
          </div>
        </motion.div>

        {/* Bagian Kanan (Profile dan Teks) */}
        <div
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className='relative flex items-center gap-3'
        >
          {/* Animate only the profile zoom */}
          <Link href='/error'>
            <motion.div
              className='flex items-center gap-3 '
              transition={{ type: 'spring', stiffness: 200, damping: 10 }} // Animasi spring untuk profile
            >
              <div className='flex gap-3'>
                <SiWikibooks className='w-6 h-6' />
                <GoBell className='w-6 h-6' />
              </div>

              <motion.div
                whileHover={{ scale: 0.9 }} // Zoom out on hover for the profile
                transition={{ type: 'spring', stiffness: 300, damping: 25 }}
              >
                <Profile img={img!} />
              </motion.div>
            </motion.div>
          </Link>

          {/* Teks yang Muncul di Kanan Profile */}
          <AnimatePresence>
            {isHovered && (
              <motion.div
                className='flex flex-col items-start justify-start space-y-1'
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ type: 'spring', stiffness: 150, damping: 15 }} // Animasi spring untuk teks
              >
                <div className='flex items-center space-x-1'>
                  <p className='text-[10px] font-bold'>
                    Wahyu Pratama | ex-Software Engineer at Tiket.com
                  </p>
                  <Verified width={13} height={13} />
                </div>
                <p className='text-[10px] font-bold'>Malang, Indonesia</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
