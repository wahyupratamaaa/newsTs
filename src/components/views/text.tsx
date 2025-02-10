import React from 'react';
import { motion } from 'framer-motion';
import { HiOutlinePaperAirplane } from 'react-icons/hi2';
import { LuWallet } from 'react-icons/lu';
import { HiOutlineUserGroup } from 'react-icons/hi2';
import { RiDiscountPercentLine } from 'react-icons/ri';

const features = [
  {
    icon: HiOutlinePaperAirplane,
    title: 'Airport Pickup',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing',
  },
  {
    icon: LuWallet,
    title: 'Best Prices',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing',
  },
  {
    icon: HiOutlineUserGroup,
    title: 'Group Discounts',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing',
  },
  {
    icon: RiDiscountPercentLine,
    title: 'Special Offers',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing',
  },
];

const Text = () => {
  return (
    <div className='w-screen px-26 mt-16 flex justify-center py-80'>
      <div className='flex flex-col items-center gap-14'>
        <div className='text-center flex flex-col gap-3'>
          <motion.p
            className='flex justify-center font-bold text-6xl'
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Top value for you
          </motion.p>
          <motion.p
            className='text-2xl text-zinc-500'
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Try ipsum, dolor sit amet consectetur
          </motion.p>
        </div>
        <div className='flex justify-center w-screen'>
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className='flex flex-col items-center gap-3'
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <feature.icon className='bg-zinc-100 text-3xl w-auto h-auto rounded-full p-3' />
              <p className='text-xl font-bold'>{feature.title}</p>
              <p className='w-1/2 text-center'>{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Text;
