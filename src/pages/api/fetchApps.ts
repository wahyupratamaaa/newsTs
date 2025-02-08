// api/apiClient.ts

import axios from 'axios';
import typesApi from './types/typesApi';

const ApiData = 'http://localhost:3000/api/';

export const fetchApps = async (): Promise<typesApi[]> => {
  try {
    const response = await axios.get<typesApi[]>(`${ApiData}/fakeapi`);
    return response.data;
  } catch (e) {
    console.error('Error fetching news:', e);
    throw e;
  }
};
