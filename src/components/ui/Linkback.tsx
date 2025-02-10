import React from 'react';
import Link from 'next/link';
import { IoReturnDownBack } from 'react-icons/io5';
type Backprops = {
  text: string;
};

const LinkBack: React.FC<Backprops> = ({ text }) => {
  return (
    <Link href={'/'}>
      <div className='inline-flex justify-start gap-3 p-2 bg-transparent hover:bg-purple-200 border border-dashed rounded-lg cursor-pointer border-black px-4'>
        <IoReturnDownBack size={15} />
        <p className='text-xs'>{text}</p>
      </div>
    </Link>
  );
};

export default LinkBack;
