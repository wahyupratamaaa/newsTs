import React, { useEffect, useState } from 'react';
import useFetchNews from '../../hooks/useFetchNews';

interface NewsItem {
  id: number | undefined;
  socialMedia?: string[];
}

interface SosmedProps {
  id: number; // Accept id as a prop
}

const Sosmed: React.FC<SosmedProps> = ({ id }) => {
  const { data, loading, error } = useFetchNews();
  const [sosmedItems, setSosmedItems] = useState<string[] | null>(null);
  const [fetchError, setFetchError] = useState<string | null>(null);

  useEffect(() => {
    if (!loading && !error) {
      const filteredData = data.filter(
        (item): item is NewsItem => item.id !== undefined
      );
      const item: NewsItem | undefined = filteredData.find(
        (item) => item.id === id
      );
      if (item && item.socialMedia) {
        setSosmedItems(item.socialMedia);
      } else {
        setFetchError(
          `Data tidak cukup, item dengan id ${id} tidak ada atau tidak memiliki socialMedia.`
        );
      }
    } else if (error) {
      setFetchError('Terjadi kesalahan saat mengambil data.');
    }
  }, [data, loading, error, id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (fetchError) {
    return <div className='text-white'>{fetchError}</div>;
  }

  return (
    <>
      {sosmedItems &&
        sosmedItems.map((item, index) => (
          <div
            key={index}
            className='text-sm font-medium text-black w-auto h-auto py-3 px-4 rounded-2xl bg-white mr-4'
          >
            {item}
          </div>
        ))}
    </>
  );
};

export default Sosmed;
