// pages/api/fakeapi.ts

import type { NextApiRequest, NextApiResponse } from 'next';
import typesApi from './types/typesApi';

export default function fakeapi(
  req: NextApiRequest,
  res: NextApiResponse<typesApi[]>
) {
  const fakeapi: typesApi[] = [
    {
      id: 1, // Menambahkan id
      title: 'Leading The Bio Energy Revolution',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque modi culpa animi sint itaque, repellendus earum libero dolore quod ex illo sequi velit. Accusantium ex, cumque id facilis itaque cupiditate',
      imageUrl:
        'https://plus.unsplash.com/premium_photo-1675355675464-2deabb1f893b?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      socialMedia: ['Facebook', 'LinkedIn', 'Pinterest'],
    },
    {
      id: 2, // Menambahkan id
      title: 'Inovasi dalam Teknologi Kuantum',
      description:
        'Pada era saat ini, teknologi kuantum membuka peluang baru dalam berbagai bidang, termasuk komputasi, kriptografi, dan simulasi molekuler.',
      imageUrl:
        'https://images.unsplash.com/photo-1444724334165-e7050f2229a1?w=800&auto=format&fit=crop&q=60',
      socialMedia: ['Facebook', 'LinkedIn', 'Pinterest'],
    },
    {
      id: 3, // Menambahkan id
      title: 'Perubahan Iklim dan Solusi Ramah Lingkungan',
      description:
        'Perubahan iklim menjadi isu global yang harus dihadapi dengan solusi ramah lingkungan, seperti penggunaan energi terbarukan dan pengurangan emisi gas rumah kaca.',
      imageUrl:
        'https://plus.unsplash.com/premium_photo-1673980029859-9e5ddaee1577?w=800&auto=format&fit=crop&q=60',
      socialMedia: ['Reddit', 'Snapchat', 'TikTok'],
    },
    {
      id: 4, // Menambahkan id
      title: 'Revolusi Industri 4.0',
      description:
        'Industri 4.0 menggabungkan teknologi canggih seperti IoT, AI, dan big data untuk meningkatkan efisiensi dan produktivitas.',
      imageUrl:
        'https://images.unsplash.com/photo-1502252430442-aac78f397426?w=800&auto=format&fit=crop&q=60',
      socialMedia: ['WhatsApp', 'Viber', 'Line'],
    },
    {
      id: 5, // Menambahkan id
      title: 'Pengembangan AI dalam Kesehatan',
      description:
        'Pengembangan AI dalam kesehatan membantu dalam diagnosis penyakit, perawatan pasien, dan penelitian medis.',
      imageUrl:
        'https://images.unsplash.com/photo-1535025075092-5a1cf795130b?w=800&auto=format&fit=crop&q=60',
      socialMedia: ['Instagram', 'LinkedIn', 'Reddit'],
    },
    {
      id: 6, // Menambahkan id
      title: 'Tantangan dan Peluang di Era Digital',
      description:
        'Tantangan dan peluang di era digital membutuhkan adaptasi cepat dan inovasi terus-menerus dalam berbagai sektor.',
      imageUrl:
        'https://images.unsplash.com/photo-1503903587778-5124b6d043b8?w=800&auto=format&fit=crop&q=60',
      socialMedia: ['Snapchat', 'TikTok', 'Viber'],
    },
    {
      id: 7, // Menambahkan id
      title: 'Penerapan Blockchain dalam Bisnis',
      description:
        'Penerapan blockchain dalam bisnis meningkatkan keamanan dan transparansi dalam transaksi digital.',
      imageUrl:
        'https://plus.unsplash.com/premium_photo-1673714604652-f3d6ce2cfdd4?w=800&auto=format&fit=crop&q=60',
      socialMedia: ['Line', 'Discord', 'Slack'],
    },
    {
      id: 8, // Menambahkan id
      title: 'Perkembangan Teknologi Solar Energy',
      description:
        'Perkembangan teknologi solar energy membuka peluang baru dalam penggunaan energi terbarukan yang ramah lingkungan.',
      imageUrl:
        'https://images.unsplash.com/photo-1476362555312-ab9e108a0b7e?w=800&auto=format&fit=crop&q=60',
      socialMedia: ['Telegram', 'WhatsApp', 'Facebook'],
    },
    {
      id: 9, // Menambahkan id
      title: 'Inovasi dalam Pembelajaran Jarak Jauh',
      description:
        'Inovasi dalam pembelajaran jarak jauh memungkinkan akses pendidikan yang lebih luas dan fleksibel.',
      imageUrl:
        'https://images.unsplash.com/photo-1738830656378-c8f96e01ec50?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzfHx8ZW58MHx8fHx8',
      socialMedia: ['Instagram', 'LinkedIn', 'Reddit'],
    },
    {
      id: 10, // Menambahkan id
      title: 'Pengaruh Teknologi pada Masyarakat Modern',
      description:
        'Pengaruh teknologi pada masyarakat modern mencakup perubahan cara berkomunikasi, bekerja, dan berbelanja.',
      imageUrl:
        'https://images.unsplash.com/photo-1736354485341-d165463e0133?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzNHx8fGVufDB8fHx8fA%3D%3D',
      socialMedia: ['Skype', 'Telegram', 'bagus'],
    },
  ];

  res.status(200).json(fakeapi);
}
