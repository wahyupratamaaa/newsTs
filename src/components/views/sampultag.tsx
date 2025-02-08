import React from 'react';
import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { sampulTag as ItemSampul } from '../../pages/api/data';
const Sampultag = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const { tagline, destination } = ItemSampul[0];
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      },
      { threshold: 0.1 }
    );

    const currentRef = ref.current;

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef as unknown as Element);
      }
    };
  }, []);

  return (
    <div className='w-screen h-auto px-26 mt-10 '>
      <div className='p-10 px-4 sm:px-8 md:px-16 lg:px-28'>
        <div className='flex p-5 justify-between'>
          <motion.p
            ref={ref}
            className='text-6xl font-semibold w-1/3'
            initial={{ filter: 'blur(10px)', opacity: 0 }}
            animate={
              isVisible
                ? { filter: 'blur(0px)', opacity: 1 }
                : { filter: 'blur(10px)', opacity: 0 }
            }
            transition={{ duration: 1.5, ease: 'easeInOut' }}
          >
            {tagline}
          </motion.p>
          <div className='flex flex-col w-1/3 gap-5'>
            <span>{destination}</span>
            <div>
              <Link
                href='/news/'
                className='flex items-center justify-center p-3 bg-black text-white rounded-2xl w-1/4'
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sampultag;
