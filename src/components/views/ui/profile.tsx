import React from 'react';
import Image from 'next/image';

type ProfileProps = {
  img: string;
  className?: string;
  style?: React.CSSProperties;
};
const Profile: React.FC<ProfileProps> = ({ img, className, style }) => {
  return (
    <>
      {' '}
      <Image
        src={img}
        alt='siapa'
        className={`${className} w-10 h-10 rounded-full object-cover `}
        width={100}
        height={100}
        style={style}
      />
    </>
  );
};

export default Profile;
