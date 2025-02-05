import React, { useState } from 'react';
import Image from 'next/image';

const Likeorno = () => {
  const [liked, setLiked] = useState<boolean | null>(null);

  const handleLike = () => {
    setLiked(true);
  };

  const handleDecline = () => {
    setLiked(false);
  };

  return (
    <div
      className='bg-[#efefef] p-13 py-3 rounded-2xl shadow-2xl top-0 right-0 animate-bounce'
      style={{ animationDuration: '2.5s' }}
    >
      <div className='flex flex-col gap-3 items-center p-5'>
        <div className='text-black text-lg font-medium ml-2 text-center'>
          {liked === null ? (
            <Image src='/like.gif' alt='Like' width={50} height={50} />
          ) : (
            <>
              <Image
                src={liked ? '/like.gif' : '/disklike.gif'}
                alt={liked ? 'Like' : 'Disklike'}
                width={50}
                height={50}
              />
            </>
          )}
        </div>
        <p className='text-black text-lg font-medium ml-2 text-center'>
          Bagaimana pendapat Anda tentang News <br />
          ieaEnergy? Berikan tanggapan <br /> Anda. Terima kasih.
        </p>
        <div className='flex gap-3 cursor-pointer'>
          <p
            className='py-3 px-8 bg-[#cccccc] text-white rounded-3xl'
            onClick={handleDecline}
          >
            Disklike
          </p>
          <p
            className='py-3 px-8 bg-black text-white rounded-3xl'
            onClick={handleLike}
          >
            Accept
          </p>
        </div>
      </div>
    </div>
  );
};

export default Likeorno;
