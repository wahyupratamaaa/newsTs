import type { NextApiRequest, NextApiResponse } from 'next';
import typesApi from '../../types/typesApi';

export default function fakeapi(
  req: NextApiRequest,
  res: NextApiResponse<typesApi[]>
) {
  const currentDate = new Date().toLocaleDateString('id-ID', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  const fakeapi: typesApi[] = [
    {
      id: 1,
      title: 'Leading The Bio Energy Revolution',
      smalldesc: 'Mendorong revolusi energi bio dengan teknologi terkini.',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque modi culpa animi sint itaque, repellendus earum libero dolore quod ex illo sequi velit. Accusantium ex, cumque id facilis itaque cupiditate.',
      imageUrl:
        'https://images.unsplash.com/photo-1739032713558-017ad58b0fbb?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw4fHx8ZW58MHx8fHx8',
      socialMedia: ['Facebook', 'LinkedIn', 'Pinterest'],
      smalltag: 'Bio Energy',
      popularPost: true,
      date: currentDate,
    },
    {
      id: 2,
      title: 'Inovasi dalam Teknologi Kuantum',
      smalldesc: 'Membuka peluang baru dengan teknologi kuantum.',
      description:
        'Pada era saat ini, teknologi kuantum membuka peluang baru dalam berbagai bidang, termasuk komputasi, kriptografi, dan simulasi molekuler.',
      imageUrl:
        'https://images.unsplash.com/photo-1444724334165-e7050f2229a1?w=800&auto=format&fit=crop&q=60',
      socialMedia: ['Facebook', 'LinkedIn'],
      smalltag: 'Quantum Technology',
      popularPost: false,
      date: currentDate,
    },
    {
      id: 3,
      title: 'Perubahan Iklim dan Solusi Ramah Lingkungan',
      smalldesc: 'Menangani perubahan iklim dengan solusi ramah lingkungan.',
      description:
        'Perubahan iklim menjadi isu global yang harus dihadapi dengan solusi ramah lingkungan, seperti penggunaan energi terbarukan dan pengurangan emisi gas rumah kaca.',
      imageUrl:
        'https://plus.unsplash.com/premium_photo-1673980029859-9e5ddaee1577?w=800&auto=format&fit=crop&q=60',
      socialMedia: ['Reddit', 'Snapchat', 'TikTok'],
      smalltag: 'Climate Change',
      popularPost: true,
      date: currentDate,
    },
    {
      id: 4,
      title: 'Revolusi Industri 4.0',
      smalldesc: 'Meningkatkan efisiensi dengan Industri 4.0.',
      description:
        'Industri 4.0 menggabungkan teknologi canggih seperti IoT, AI, dan big data untuk meningkatkan efisiensi dan produktivitas.',
      imageUrl:
        'https://images.unsplash.com/photo-1502252430442-aac78f397426?w=800&auto=format&fit=crop&q=60',
      socialMedia: ['WhatsApp', 'Viber', 'Line'],
      smalltag: 'Industry 4.0',
      popularPost: false,
      date: currentDate,
    },
    {
      id: 5,
      title: 'Pengembangan AI dalam Kesehatan',
      smalldesc: 'Meningkatkan kesehatan dengan AI.',
      description:
        'Pengembangan AI dalam kesehatan membantu dalam diagnosis penyakit, perawatan pasien, dan penelitian medis.',
      imageUrl:
        'https://images.unsplash.com/photo-1535025075092-5a1cf795130b?w=800&auto=format&fit=crop&q=60',
      socialMedia: ['Instagram', 'LinkedIn', 'Reddit'],
      smalltag: 'AI in Healthcare',
      popularPost: true,
      date: currentDate,
    },
    {
      id: 6,
      title: 'Tantangan dan Peluang di Era Digital',
      smalldesc: 'Adaptasi cepat dalam era digital.',
      description:
        'Tantangan dan peluang di era digital membutuhkan adaptasi cepat dan inovasi terus-menerus dalam berbagai sektor.',
      imageUrl:
        'https://images.unsplash.com/photo-1503903587778-5124b6d043b8?w=800&auto=format&fit=crop&q=60',
      socialMedia: ['Snapchat', 'TikTok', 'Viber'],
      smalltag: 'Digital Era',
      popularPost: false,
      date: currentDate,
    },
    {
      id: 7,
      title: 'Penerapan Blockchain dalam Bisnis',
      smalldesc: 'Meningkatkan keamanan dengan blockchain.',
      description:
        'Penerapan blockchain dalam bisnis meningkatkan keamanan dan transparansi dalam transaksi digital.',
      imageUrl:
        'https://plus.unsplash.com/premium_photo-1673714604652-f3d6ce2cfdd4?w=800&auto=format&fit=crop&q=60',
      socialMedia: ['Line', 'Discord', 'Slack'],
      smalltag: 'Blockchain',
      popularPost: true,
      date: currentDate,
    },
    {
      id: 8,
      title: 'Perkembangan Teknologi Solar Energy',
      smalldesc: 'Penggunaan energi surya yang ramah lingkungan.',
      description:
        'Perkembangan teknologi solar energy membuka peluang baru dalam penggunaan energi terbarukan yang ramah lingkungan.',
      imageUrl:
        'https://images.unsplash.com/photo-1476362555312-ab9e108a0b7e?w=800&auto=format&fit=crop&q=60',
      socialMedia: ['Telegram', 'WhatsApp', 'Facebook'],
      smalltag: 'Solar Energy',
      popularPost: false,
      date: currentDate,
    },
    {
      id: 9,
      title: 'Inovasi dalam Pembelajaran Jarak Jauh',
      smalldesc: 'Pendidikan yang lebih luas dan fleksibel.',
      description:
        'Inovasi dalam pembelajaran jarak jauh memungkinkan akses pendidikan yang lebih luas dan fleksibel.',
      imageUrl:
        'https://images.unsplash.com/photo-1738830656378-c8f96e01ec50?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzfHx8ZW58MHx8fHx8',
      socialMedia: ['Instagram', 'LinkedIn', 'Reddit'],
      smalltag: 'Distance Learning',
      popularPost: true,
      date: currentDate,
    },
    {
      id: 10,
      title: 'Pengaruh Teknologi pada Masyarakat Modern',
      smalldesc: 'Perubahan cara berkomunikasi, bekerja, dan berbelanja.',
      description:
        'Pengaruh teknologi pada masyarakat modern mencakup perubahan cara berkomunikasi, bekerja, dan berbelanja.',
      imageUrl:
        'https://images.unsplash.com/photo-1736354485341-d165463e0133?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzNHx8fGVufDB8fHx8fA%3D%3D',
      socialMedia: ['Skype', 'Telegram', 'bagus'],
      smalltag: 'Modern Society',
      popularPost: false,
      date: currentDate,
    },
    {
      id: 11,
      title: 'Teknologi 5G dan Masa Depan Komunikasi',
      smalldesc: 'Komunikasi yang lebih cepat dengan 5G.',
      description:
        'Teknologi 5G membawa perubahan besar dalam cara kita berkomunikasi, dengan kecepatan yang lebih tinggi dan latensi yang lebih rendah.',
      imageUrl:
        'https://images.unsplash.com/photo-1581091870622-3a5f1c6e4f8e?w=800&auto=format&fit=crop&q=60',
      socialMedia: ['Facebook', 'Twitter', 'LinkedIn'],
      smalltag: '5G Technology',
      popularPost: true,
      date: currentDate,
    },
    {
      id: 12,
      title: 'Inovasi dalam Teknologi Pertanian',
      smalldesc: 'Pertanian yang lebih efisien dengan teknologi.',
      description:
        'Teknologi pertanian terus berkembang dengan penggunaan drone, sensor, dan AI untuk meningkatkan hasil panen dan efisiensi.',
      imageUrl:
        'https://images.unsplash.com/photo-1504198458649-3128b932f49b?w=800&auto=format&fit=crop&q=60',
      socialMedia: ['Instagram', 'Pinterest', 'LinkedIn'],
      smalltag: 'Agriculture Technology',
      popularPost: false,
      date: currentDate,
    },
    {
      id: 13,
      title: 'Keamanan Siber di Era Digital',
      smalldesc: 'Keamanan siber dalam era digital.',
      description:
        'Keamanan siber menjadi semakin penting di era digital, dengan ancaman yang terus berkembang dan semakin canggih.',
      imageUrl:
        'https://images.unsplash.com/photo-1510511459019-5dda7724fd87?w=800&auto=format&fit=crop&q=60',
      socialMedia: ['Reddit', 'Twitter', 'LinkedIn'],
      smalltag: 'Cyber Security',
      popularPost: true,
      date: currentDate,
    },
    {
      id: 14,
      title: 'Pengembangan Teknologi VR dan AR',
      smalldesc: 'Peluang baru dengan VR dan AR.',
      description:
        'Teknologi VR dan AR membuka peluang baru dalam berbagai bidang, termasuk pendidikan, hiburan, dan kesehatan.',
      imageUrl:
        'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&auto=format&fit=crop&q=60',
      socialMedia: ['Facebook', 'Instagram', 'Snapchat'],
      smalltag: 'VR and AR',
      popularPost: false,
      date: currentDate,
    },
    {
      id: 15,
      title: 'Inovasi dalam Teknologi Transportasi',
      smalldesc: 'Transportasi yang lebih canggih.',
      description:
        'Teknologi transportasi terus berkembang dengan adanya kendaraan listrik, mobil otonom, dan sistem transportasi cerdas.',
      imageUrl:
        'https://images.unsplash.com/photo-1517430816045-df4b7de01c9d?w=800&auto=format&fit=crop&q=60',
      socialMedia: ['LinkedIn', 'Twitter', 'Facebook'],
      smalltag: 'Transportation Technology',
      popularPost: true,
      date: currentDate,
    },
    {
      id: 16,
      title: 'Perkembangan Teknologi Energi Terbarukan',
      smalldesc: 'Energi terbarukan untuk masa depan.',
      description:
        'Energi terbarukan menjadi fokus utama dalam upaya mengurangi ketergantungan pada bahan bakar fosil dan mengurangi emisi karbon.',
      imageUrl:
        'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?w=800&auto=format&fit=crop&q=60',
      socialMedia: ['Instagram', 'LinkedIn', 'Reddit'],
      smalltag: 'Renewable Energy',
      popularPost: false,
      date: currentDate,
    },
    {
      id: 17,
      title: 'Inovasi dalam Teknologi Pendidikan',
      smalldesc: 'Pendidikan yang lebih inovatif.',
      description:
        'Teknologi pendidikan terus berkembang dengan adanya platform pembelajaran online, aplikasi edukasi, dan alat bantu belajar digital.',
      imageUrl:
        'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&auto=format&fit=crop&q=60',
      socialMedia: ['Facebook', 'LinkedIn', 'Pinterest'],
      smalltag: 'Education Technology',
      popularPost: true,
      date: currentDate,
    },
    {
      id: 18,
      title: 'Pengembangan Teknologi Kesehatan Digital',
      smalldesc: 'Kesehatan yang lebih efisien dengan teknologi.',
      description:
        'Teknologi kesehatan digital membantu dalam pemantauan kesehatan, diagnosis penyakit, dan perawatan pasien secara lebih efisien.',
      imageUrl:
        'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=800&auto=format&fit=crop&q=60',
      socialMedia: ['Instagram', 'LinkedIn', 'Reddit'],
      smalltag: 'Digital Health',
      popularPost: false,
      date: currentDate,
    },
    {
      id: 19,
      title: 'Inovasi dalam Teknologi Keuangan',
      smalldesc: 'Keuangan yang lebih canggih.',
      description:
        'Teknologi keuangan terus berkembang dengan adanya fintech, blockchain, dan sistem pembayaran digital yang semakin canggih.',
      imageUrl:
        'https://images.unsplash.com/photo-1518186233392-c232efbf2373?w=800&auto=format&fit=crop&q=60',
      socialMedia: ['Facebook', 'LinkedIn', 'Twitter'],
      smalltag: 'Financial Technology',
      popularPost: true,
      date: currentDate,
    },
    {
      id: 20,
      title: 'Perkembangan Teknologi Robotika',
      smalldesc: 'Robotika yang lebih canggih.',
      description:
        'Teknologi robotika terus berkembang dengan adanya robot industri, robot layanan, dan robot medis yang semakin canggih.',
      imageUrl:
        'https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?w=800&auto=format&fit=crop&q=60',
      socialMedia: ['Instagram', 'LinkedIn', 'Reddit'],
      smalltag: 'Robotics',
      popularPost: false,
      date: currentDate,
    },
    {
      id: 21,
      title: 'Inovasi dalam Teknologi Pangan',
      smalldesc: 'Pangan yang lebih efisien.',
      description:
        'Teknologi pangan terus berkembang dengan adanya inovasi dalam produksi, pengolahan, dan distribusi makanan yang lebih efisien dan ramah lingkungan.',
      imageUrl:
        'https://images.unsplash.com/photo-1506806732259-39c2d0268443?w=800&auto=format&fit=crop&q=60',
      socialMedia: ['Facebook', 'Instagram', 'Pinterest'],
      smalltag: 'Food Technology',
      popularPost: true,
      date: currentDate,
    },
    {
      id: 22,
      title: 'Pengembangan Teknologi Lingkungan',
      smalldesc: 'Pelestarian alam dengan teknologi.',
      description:
        'Teknologi lingkungan membantu dalam upaya pelestarian alam, pengelolaan limbah, dan pengurangan polusi.',
      imageUrl:
        'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?w=800&auto=format&fit=crop&q=60',
      socialMedia: ['Instagram', 'LinkedIn', 'Reddit'],
      smalltag: 'Environmental Technology',
      popularPost: false,
      date: currentDate,
    },
    {
      id: 23,
      title: 'Inovasi dalam Teknologi Komunikasi',
      smalldesc: 'Komunikasi yang lebih canggih dan efisien.',
      description:
        'Teknologi komunikasi terus berkembang dengan adanya inovasi dalam jaringan, perangkat, dan aplikasi komunikasi yang semakin canggih.',
      imageUrl:
        'https://images.unsplash.com/photo-1517430816045-df4b7de01c9d?w=800&auto=format&fit=crop&q=60',
      socialMedia: ['LinkedIn', 'Twitter', 'Facebook'],
      smalltag: 'Communication Technology',
      popularPost: true,
      date: currentDate,
    },
    {
      id: 24,
      title: 'Perkembangan Teknologi Energi Hijau',
      smalldesc: 'Energi hijau untuk masa depan yang berkelanjutan.',
      description:
        'Energi hijau menjadi fokus utama dalam upaya mengurangi ketergantungan pada bahan bakar fosil dan mengurangi emisi karbon.',
      imageUrl:
        'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?w=800&auto=format&fit=crop&q=60',
      socialMedia: ['Instagram', 'LinkedIn', 'Reddit'],
      smalltag: 'Green Energy',
      popularPost: false,
      date: currentDate,
    },
  ];

  res.status(200).json(fakeapi);
}
