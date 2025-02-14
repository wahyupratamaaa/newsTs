import React from 'react';
import Image from 'next/image';

type VerifiedProps = {
  width?: number;
  height?: number;
};
const Verified: React.FC<VerifiedProps> = ({ width, height }) => {
  return (
    <div>
      <Image
        src='/icon8-very.png'
        alt='telent'
        width={width}
        height={height}
        className='text-blue-900'
        style={{
          filter:
            'invert(42%) sepia(100%) saturate(5000%) hue-rotate(180deg) brightness(100%) contrast(100%)',
        }}
      ></Image>
    </div>
  );
};
export default Verified;
