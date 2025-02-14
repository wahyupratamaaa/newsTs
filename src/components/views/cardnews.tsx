// import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Cardright from './ui/cardright';
import { poppins } from '../../components/fonts/poppins';
import useFetchNews from '../../components/hooks/useFetchNews';
import typesApi from '../../types/typesApi';
import React, { useRouter } from 'next/router';

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
  const { data, loading, error } = useFetchNews();

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  const filteredData = data.filter(
    (item): item is typesApi => item.id !== undefined
  );
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { push } = useRouter();

  return (
    <>
      <p className='w-screen p-10 px-4 sm:px-8 md:px-16 lg:px-28 flex text-xl font-bold'>
        Recent blog posts
      </p>
      <div className='w-screen px-4 sm:px-8 md:px-16 lg:px-28'>
        <div className='flex'>
          <div className='flex flex-wrap justify-start gap-4'>
            {filteredData.slice(1, 19).map((item, index) => (
              <motion.div
                key={index}
                className='flex flex-col w-[300px] max-w-[30%] gap-2 border shadow-lg p-2 rounded-lg h-auto overflow-hidden cursor-pointer'
                custom={index}
                initial='hidden'
                whileInView='visible'
                variants={cardVariants}
                onClick={() => push(`/news/${item?.id}`)}
              >
                <Image
                  src={item.imageUrl || 'sstalent.png'}
                  alt={item.imageUrl || 'image'}
                  className='rounded-md object-cover h-36 w-full'
                  width={300}
                  height={160}
                />{' '}
                <div className='flex flex-col justify-between h-full'>
                  <p className={`text-sm font-bold ${poppins.className}`}>
                    {item.title || 'Loading...'}
                  </p>
                  <span className='text-xs w-full text-zinc-500 text-justify line-clamp-3 overflow-hidden'>
                    {item.description || 'Loading...'}
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
