import React, { useEffect, useState } from 'react';
import { fetchApps } from '../../pages/api/fetchApps';

const Sosmed: React.FC = () => {
  const [sosmedItems, setSosmedItems] = useState<string[] | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchApps();
        const item = data.find((item) => item.id === 10);
        if (item && item.socialMedia) {
          setSosmedItems(item.socialMedia);
        } else {
          setError(
            'Data tidak cukup, item dengan id 1 tidak ada atau tidak memiliki socialMedia.'
          );
        }
      } catch (e) {
        console.error('Error fetching data:', e);
        setError('Terjadi kesalahan saat mengambil data.');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div className='text-white'>{error}</div>;
  }

  return (
    <>
      {sosmedItems &&
        sosmedItems.map((item, id) => (
          <div
            key={id}
            className='text-sm font-medium text-black w-auto h-auto py-3 px-4 rounded-2xl bg-white mr-4'
          >
            {item}
          </div>
        ))}
    </>
  );
};
export default Sosmed;
