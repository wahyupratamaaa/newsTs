// import { MdInfo } from 'react-icons/md';
import Image from 'next/image';
import Sosmed from '../atompage/sosmed';
import { Section as ItemSection } from '../../pages/api/data';
import LikeorNo from '../atompage/likeorno';

type PropsSection = {
  title: string;
  des: string;
  image: string;
  sosmed: string[];
};

const SectionComponent = ({ title, des, image, sosmed }: PropsSection) => {
  return (
    <div className='w-screen h-auto py-12'>
      <div className='px-4 sm:px-8 md:px-16 lg:px-28'>
        <div className='flex gap-5 justify-between'>
          <span className='text-8xl min-w-3xl font-bold text-zinc-500'>
            {title}
          </span>

          <span className='flex flex-col justify-end w-1/5 text-sm'>{des}</span>
        </div>
        <div className='relative mt-10 cursor-pointer'>
          <Image
            src={image}
            alt='tema'
            className='w-full h-[700px] mt-10 rounded-2xl cursor-pointer'
            width={100}
            height={100}
          />
          <div className='absolute top-0 left-0 p-10'>
            <p className='text-2xl font-semibold text-white'>BioEnergy</p>
          </div>
          <div className='absolute bottom-0 left-0 right-0 p-10 flex justify-start'>
            <Sosmed sosmedArray={sosmed} />
            <div className='absolute bottom-0 right-20 -top-10'>
              <LikeorNo />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const SectionList = () => {
  return (
    <>
      {ItemSection.map((item, index) => (
        <SectionComponent
          key={index}
          title={item.title}
          des={item.des}
          image={item.image}
          sosmed={item.sosmed}
        />
      ))}
    </>
  );
};

export default SectionList;
