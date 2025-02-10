import axios from 'axios';
import typesApi from '../../types/typesApi';
import { useState, useEffect } from 'react';

const ApiData = 'http://localhost:3000/api/fakeapi';

const useFetchNews = () => {
  const [data, setData] = useState<typesApi[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get<typesApi[]>(ApiData);
        setData(response.data);
      } catch (e) {
        console.error('Error fetching news:', e);
        setError('Terjadi kesalahan saat mengambil data.');
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);
  return { data, loading, error };
};

export default useFetchNews;
