import React from 'react';
import Image from 'next/image';
import { IoReturnDownBack } from 'react-icons/io5';
import Link from 'next/link';

const Singlenews = () => {
  return (
    <>
      <Link href={'/'}>
        <div className='p-10'>
          <div className='inline-flex justify-start gap-3 p-2 bg-white border border-dashed rounded-lg cursor-pointer border-black px-4'>
            <IoReturnDownBack size={15} />
            <p className='text-xs'>Back</p>
          </div>
        </div>
      </Link>
      <main className='w-screen h-auto flex items-center justify-center py-20'>
        <article className='flex flex-col items-center gap-3'>
          <header className='flex gap-2 justify-center items-center font-medium text-gray-500 italic'>
            <span className='bg-[#F3FCD2] p-2 rounded-2xl'>Popular Post</span>
            <time dateTime='2022-10-23'>Oktober 23 2022</time>
          </header>
          <h1 className='text-6xl font-medium text-center w-1/2'>
            Here is another preview for detailed “Article” page
          </h1>
          <p className='w-1/2 text-center text-zinc-500'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
            soluta dicta nesciunt accusantium. Nostrum quod quas maxime fugit
            aliquam, unde id alias consequuntur provident. Odit adipisci
            delectus ab eum sapiente.
          </p>
          <Image
            src='https://images.unsplash.com/photo-1738008896551-9ab767d9e6ac?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyM3x8fGVufDB8fHx8fA%3D%3D'
            alt='Preview of the article'
            className='w-1/2 rounded-xl'
            width={100}
            height={100}
          />
          <section className='flex gap-2 justify-start w-1/2'>
            <div className='flex flex-col'>
              <h2 className='text-2xl font-semibold'>
                Here is another preview
              </h2>
              <p className='text-zinc-500 '>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed
                excepturi nam necessitatibus sapiente, molestias consequatur
                enim officia consectetur possimus voluptas, itaque nesciunt
                saepe voluptates porro repellendus? Sequi ipsum laboriosam sint.
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit
                eveniet delectus pariatur labore tempore. Quis error deserunt,
                incidunt consequatur voluptatibus cupiditate adipisci, fuga
                assumenda, voluptates nam cum blanditiis eum voluptate?
              </p>
              <h2 className='text-2xl font-semibold'>
                Here is another preview
              </h2>
              <p className='text-zinc-500 '>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed
                excepturi nam necessitatibus sapiente, molestias consequatur
                enim officia consectetur possimus voluptas, itaque nesciunt
                saepe voluptates porro repellendus? Sequi ipsum laboriosam sint.
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit
                eveniet delectus pariatur labore tempore. Quis error deserunt,
                incidunt consequatur voluptatibus cupiditate adipisci, fuga
                assumenda, voluptates nam cum blanditiis eum voluptate?
              </p>
            </div>
          </section>
        </article>
      </main>
    </>
  );
};

export default Singlenews;
