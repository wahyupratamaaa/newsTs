// import { MdInfo } from 'react-icons/md';
import Image from 'next/image';
import Sosmed from '../atompage/sosmed';
import { Section as ItemSection } from '../../pages/api/data';
import LikeorNo from '../atompage/likeorno';
import Link from 'next/link';

type PropsSection = {
  title: string;
  des: string;
  image: string;
};

const SectionComponent = ({ title, des, image }: PropsSection) => {
  return (
    <div className='w-screen h-auto py-12 pt-32'>
      <div className='px-4 sm:px-8 md:px-16 lg:px-28'>
        <div className='flex gap-5 justify-between'>
          <span className='text-8xl min-w-3xl font-bold text-zinc-500 w-2/3'>
            {title}
          </span>
          <span className='flex flex-col justify-end w-1/5 text-sm'>{des}</span>
        </div>
        <div className='relative mt-10 cursor-pointer'>
          <Link href={'/news'}>
            <Image
              src={image}
              alt='tema'
              className='w-full h-[700px] mt-10 rounded-2xl cursor-pointer'
              width={1000}
              height={700}
            />
          </Link>
          <div className='absolute top-0 left-0 p-10'>
            <p className='text-2xl font-semibold text-white'>BioEnergy</p>
          </div>
          <div className='absolute bottom-0 left-0 right-0 p-10 flex justify-start'>
            <Sosmed />
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
        />
      ))}
    </>
  );
};

export default SectionList;
