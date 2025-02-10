import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Cardright from '../ui/cardright';
import { poppins } from '../../components/fonts/poppins';

const cardVariants = {
  hidden: { opacity: 0, filter: 'blur(5px)' },
  visible: (i: number) => ({
    opacity: 1,
    filter: 'blur(0px)',
    transition: {
      delay: i * 0.1,
    },
  }),
};

const Cardnews = () => {
  return (
    <>
      <p className='w-screen p-10 px-4 sm:px-8 md:px-16 lg:px-28 flex text-xl font-bold'>
        Recent blog posts
      </p>
      <div className='w-screen px-4 sm:px-8 md:px-16 lg:px-28'>
        <div className='flex'>
          <div className='flex flex-wrap justify-start gap-3 '>
            {[...Array(18)].map((_, index) => (
              <motion.div
                key={index}
                className='flex flex-col w-[300px] max-w-[30%] gap-5 border shadow-lg p-2 rounded-lg '
                custom={index}
                initial='hidden'
                whileInView='visible'
                variants={cardVariants}
              >
                <Image
                  src='https://plus.unsplash.com/premium_photo-1738946837565-85f20772aae2?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxM3x8fGVufDB8fHx8fA%3D%3D'
                  alt='Recent blog post image'
                  className='rounded-lg'
                  width={300}
                  height={300}
                />
                <div className='flex flex-col gap-1 mb-5'>
                  <p className={`text-xs font-bold ${poppins.className}`}>
                    Lorem ipsum dolor, sit
                  </p>
                  <span className='text-xs w-full text-zinc-500 text-justify line-clamp-4 indent-8'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Fuga sint laudantium, accusantium non porro officiis
                    reprehenderit voluptate nostrum architecto maxime quos
                    pariatur quas ex expedita. Dolor assumenda eveniet atque
                    dolores!
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
          <Cardright />
        </div>
      </div>
    </>
  );
};

export default Cardnews;
