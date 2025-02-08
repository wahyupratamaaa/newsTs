import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { slideData } from '../../pages/api/data';
import Props from '../../pages/api/types/slideProps';

const Slide = () => {
  const slideImages = slideData[0];
  const [visibleImages, setVisibleImages] = useState<boolean[]>(
    Array(7).fill(false)
  );
  const refs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = Number(entry.target.getAttribute('data-index'));
          if (entry.isIntersecting) {
            setVisibleImages((prev) => {
              const newVisibleImages = [...prev];
              newVisibleImages[index] = true;
              return newVisibleImages;
            });
          } else {
            setVisibleImages((prev) => {
              const newVisibleImages = [...prev];
              newVisibleImages[index] = false;
              return newVisibleImages;
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    const currentRefs = refs.current;
    currentRefs.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      currentRefs.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  return (
    <div className='w-screen h-auto px-26 mt-16 px-4 sm:px-8 md:px-16 lg:px-28'>
      <div className='flex gap-4 mb-4'>
        {['image1', 'image2'].map((key, index) => (
          <motion.div
            key={index}
            ref={(el) => {
              refs.current[index] = el;
            }}
            data-index={index}
            className={`h-[400px] ${index === 0 ? 'w-2/3' : 'w-1/3'}`}
            initial={{ opacity: 0, filter: 'blur(20px)' }}
            animate={
              visibleImages[index] ? { opacity: 1, filter: 'blur(0px)' } : {}
            }
            transition={{ duration: 0.5 }}
          >
            <Image
              src={slideImages[key as keyof Props]}
              alt={`Slide ${index + 1}`}
              className='w-full h-full object-cover rounded-lg'
              width={100}
              height={100}
            />
          </motion.div>
        ))}
      </div>

      <div className='flex gap-4 '>
        {['image3', 'image4', 'image5'].map((key, index) => (
          <motion.div
            key={index + 2}
            ref={(el) => {
              refs.current[index + 2] = el;
            }}
            data-index={index + 2}
            className={`h-[300px] ${index === 1 ? 'w-1/2' : 'w-1/4'}`}
            initial={{ opacity: 0, filter: 'blur(20px)' }}
            animate={
              visibleImages[index + 2]
                ? { opacity: 1, filter: 'blur(0px)' }
                : {}
            }
            transition={{ duration: 0.5 }}
          >
            <Image
              src={slideImages[key as keyof Props]}
              alt={`Slide ${index + 3}`}
              className='w-full h-full object-cover rounded-lg'
              width={100}
              height={100}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Slide;
