import React from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Backlink from '../../components/ui/Linkback';
import { poppins } from '../../components/fonts/poppins';
import useFetchNews from '../../components/hooks/useFetchNews';
import typesApi from '../../types/typesApi';

const Singlenews = () => {
  const router = useRouter();
  const { newsid } = router.query;
  const { data, loading, error } = useFetchNews();

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  const item = data.find(
    (item): item is typesApi => item.id === Number(newsid)
  );

  if (!item) return <div>News not found</div>;

  return (
    <>
      <div className='p-10'>
        <Backlink text='Back' />
      </div>

      <main
        className={`w-screen h-auto flex items-center justify-center py-20 ${poppins.className}`}
      >
        <article className='flex flex-col items-center gap-3'>
          <header className='flex gap-2 justify-center items-center font-medium text-gray-500 italic'>
            <span className='bg-[#F3FCD2] p-2 rounded-2xl'>Popular Post</span>
            <time dateTime={item.date}>{item.date}</time>
          </header>
          <h1 className='text-3xl font-medium text-center w-1/2'>
            {item.title}
          </h1>
          <p className='w-1/2 text-center text-sm text-zinc-500'>
            {item.smalldesc}
          </p>
          <Image
            src={item.imageUrl || '/default-image.jpg'}
            alt='Preview of the article'
            className='w-4/6 rounded-xl'
            width={100}
            height={100}
          />
          <section
            className={`flex gap-2 justify-start w-4/6 text-xs ${poppins.className}`}
          >
            <div className='flex flex-col gap-3'>
              <h2 className='text-sm font-semibold'>bere is another preview</h2>
              <p className='text-zinc-500 '>{item.description}</p>
            </div>
          </section>
        </article>
      </main>
    </>
  );
};

export default Singlenews;
