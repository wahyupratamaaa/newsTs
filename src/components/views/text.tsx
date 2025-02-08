import React from 'react';
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
    <div className='w-screen px-26 mt-16 sm:px-8 md:px-16 lg:px-28 flex justify-center py-80'>
      <div className='flex flex-col items-center gap-14'>
        <div className='text-center flex flex-col gap-3'>
          <p className='flex justify-center font-bold text-6xl'>
            Top value for you
          </p>
          <p className='text-2xl text-zinc-500'>
            Try ipsum, dolor sit amet consectetur
          </p>
        </div>
        <div className='flex justify-center w-screen '>
          {features.map((features, index) => (
            <div key={index} className='flex flex-col items-center gap-3'>
              <features.icon className='bg-zinc-100 text-3xl w-auto h-auto rounded-full p-3 ' />
              <p className='text-xl font-bold '>{features.title}</p>
              <p className='w-1/2 text-center'>{features.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Text;
