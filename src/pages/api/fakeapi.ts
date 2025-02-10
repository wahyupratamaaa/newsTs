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
      title: 'Keajaiban Alam Islandia',
      smalldesc: 'Pemandangan spektakuler dari geyser dan air terjun.',
      description:
        'Islandia dikenal dengan keajaibannya alam, termasuk geyser, air terjun, dan gunung berapi. Salah satu destinasi populer adalah Geysir, yang merupakan sumber inspirasi untuk kata "geyser". Anda juga dapat menikmati pemandangan air terjun Dettifoss, yang merupakan air terjun tertinggi di Eropa. lorem ipsum dolor sit amet consectetur adipiscing elit. lorem ipsum dolor sit amet consectetur adipiscing elit. lorem ipsum dolor sit amet consectetur adipiscing elit. lorem ipsum dolor sit amet consectetur adipiscing elit. lorem ipsum dolor sit amet consectetur adipiscing elit.Islandia dikenal dengan keajaibannya alam, termasuk geyser, air terjun, dan gunung berapi. Salah satu destinasi populer adalah Geysir, yang merupakan sumber inspirasi untuk kata "geyser". Anda juga dapat menikmati pemandangan air terjun Dettifoss, yang merupakan air terjun tertinggi di Eropa. lorem ipsum dolor sit amet consectetur adipiscing elit. lorem ipsum dolor sit amet consectetur adipiscing elit. lorem ipsum dolor sit amet consectetur adipiscing elit. lorem ipsum dolor sit amet consectetur adipiscing elit. lorem ipsum dolor sit amet consectetur adipiscing elit.Islandia dikenal dengan keajaibannya alam, termasuk geyser, air terjun, dan gunung berapi. Salah satu destinasi populer adalah Geysir, yang merupakan sumber inspirasi untuk kata "geyser". Anda juga dapat menikmati pemandangan air terjun Dettifoss, yang merupakan air terjun tertinggi di Eropa. lorem ipsum dolor sit amet consectetur adipiscing elit. lorem ipsum dolor sit amet consectetur adipiscing elit. lorem ipsum dolor sit amet consectetur adipiscing elit. lorem ipsum dolor sit amet consectetur adipiscing elit. lorem ipsum dolor sit amet consectetur adipiscing elit.Islandia dikenal dengan keajaibannya alam, termasuk geyser, air terjun, dan gunung berapi. Salah satu destinasi populer adalah Geysir, yang merupakan sumber inspirasi untuk kata "geyser". Anda juga dapat menikmati pemandangan air terjun Dettifoss, yang merupakan air terjun tertinggi di Eropa. lorem ipsum dolor sit amet consectetur adipiscing elit. lorem ipsum dolor sit amet consectetur adipiscing elit. lorem ipsum dolor sit amet consectetur adipiscing elit. lorem ipsum dolor sit amet consectetur adipiscing elit. lorem ipsum dolor sit amet consectetur adipiscing elit.',
      imageUrl:
        'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&auto=format&fit=crop&q=60',
      socialMedia: ['Facebook', 'LinkedIn', 'Pinterest'],
      smalltag: 'Islandia',
      popularPost: true,
      date: currentDate,
    },
    {
      id: 2,
      title: 'Pantai Pasir Putih di Bali',
      smalldesc: 'Pantai pasir putih yang menawan di Bali.',
      description:
        'Bali dikenal dengan pantainya yang indah, termasuk Pantai Nusa Dua dan Pantai Jimbaran. Pantai pasir putih di Bali menawarkan suasana yang santai dan pemandangan yang menawan. Anda dapat menikmati keindahan pantai sambil berenang atau bermain di pasir putih.',
      imageUrl:
        'https://images.unsplash.com/photo-1537500059284-6dec490c4d3a?w=800&auto=format&fit=crop&q=60',
      socialMedia: ['Facebook', 'Instagram', 'Twitter'],
      smalltag: 'Bali',
      popularPost: false,
      date: currentDate,
    },
    {
      id: 3,
      title: 'Pemandangan Gunung Fuji di Jepang',
      smalldesc: 'Gunung Fuji yang indah di Jepang.',
      description:
        'Gunung Fuji, ikon Jepang, menawarkan pemandangan yang menakjubkan. Anda dapat menikmati pemandangan Gunung Fuji dari berbagai sudut, termasuk dari kota Tokyo atau saat berjalan-jalan di Kawaguchiko. Gunung Fuji juga merupakan destinasi populer untuk mendaki.',
      imageUrl:
        'https://images.unsplash.com/photo-1516972810927-80185027ca84?w=800&auto=format&fit=crop&q=60',
      socialMedia: ['Instagram', 'Pinterest', 'LinkedIn'],
      smalltag: 'Jepang',
      popularPost: true,
      date: currentDate,
    },
    {
      id: 4,
      title: 'Pantai Pink di Australia',
      smalldesc: 'Pantai pink yang unik di Australia.',
      description:
        'Pantai Pink di Western Australia menawarkan pemandangan yang sangat menarik dengan pasir berwarna merah muda. Pantai ini terletak di perairan Indian Ocean dan menawarkan suasana yang santai dan pemandangan yang menakjubkan.',
      imageUrl:
        'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&auto=format&fit=crop&q=60',
      socialMedia: ['Facebook', 'Instagram', 'Twitter'],
      smalltag: 'Australia',
      popularPost: false,
      date: currentDate,
    },
    {
      id: 5,
      title: 'Pemandangan Gunung Himalaya di Nepal',
      smalldesc: 'Gunung Himalaya yang indah di Nepal.',
      description:
        'Gunung Himalaya di Nepal menawarkan pemandangan yang menakjubkan dengan puncak-puncak gunung tertinggi di dunia. Anda dapat menikmati pemandangan Gunung Himalaya dari berbagai sudut, termasuk dari kota Kathmandu atau saat berjalan-jalan di Pokhara. Gunung Himalaya juga merupakan destinasi populer untuk mendaki.',
      imageUrl:
        'https://images.unsplash.com/photo-1567122181169-4f6632ed2d8d?w=800&auto=format&fit=crop&q=60',
      socialMedia: ['Instagram', 'Pinterest', 'LinkedIn'],
      smalltag: 'Nepal',
      popularPost: true,
      date: currentDate,
    },
    {
      id: 6,
      title: 'Pemandangan Pantai di Maldives',
      smalldesc: 'Pantai yang indah di Maldives.',
      description:
        'Maldives dikenal dengan pantainya yang indah dan air lautnya yang jernih. Anda dapat menikmati keindahan pantai Maldives dengan berenang, snorkeling, atau diving. Pantai di Maldives juga menawarkan suasana yang santai dan pemandangan yang menakjubkan.',
      imageUrl:
        'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&auto=format&fit=crop&q=60',
      socialMedia: ['Facebook', 'Instagram', 'Twitter'],
      smalltag: 'Maldives',
      popularPost: false,
      date: currentDate,
    },
    {
      id: 7,
      title: 'Pemandangan Gunung Besokko di Indonesia',
      smalldesc: 'Gunung Besokko yang indah di Indonesia.',
      description:
        'Gunung Besokko di Indonesia menawarkan pemandangan yang menakjubkan dengan puncaknya yang tinggi dan pemandangan kota Bandung dari atas. Anda dapat menikmati pemandangan Gunung Besokko dengan berjalan-jalan atau mendaki. Gunung Besokko juga merupakan destinasi populer untuk menikmati sunset.',
      imageUrl:
        'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&auto=format&fit=crop&q=60',
      socialMedia: ['Instagram', 'Pinterest', 'LinkedIn'],
      smalltag: 'Indonesia',
      popularPost: true,
      date: currentDate,
    },
    {
      id: 8,
      title: 'Pemandangan Pantai di Thailand',
      smalldesc: 'Pantai yang indah di Thailand.',
      description:
        'Thailand dikenal dengan pantainya yang indah dan air lautnya yang jernih. Anda dapat menikmati keindahan pantai Thailand dengan berenang, snorkeling, atau diving. Pantai di Thailand juga menawarkan suasana yang santai dan pemandangan yang menakjubkan.',
      imageUrl:
        'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&auto=format&fit=crop&q=60',
      socialMedia: ['Facebook', 'Instagram', 'Twitter'],
      smalltag: 'Thailand',
      popularPost: false,
      date: currentDate,
    },
    {
      id: 9,
      title: 'Pemandangan Gunung Fuji di Jepang',
      smalldesc: 'Gunung Fuji yang indah di Jepang.',
      description:
        'Gunung Fuji, ikon Jepang, menawarkan pemandangan yang menakjubkan. Anda dapat menikmati pemandangan Gunung Fuji dari berbagai sudut, termasuk dari kota Tokyo atau saat berjalan-jalan di Kawaguchiko. Gunung Fuji juga merupakan destinasi populer untuk mendaki.',
      imageUrl:
        'https://images.unsplash.com/photo-1516972810927-80185027ca84?w=800&auto=format&fit=crop&q=60',
      socialMedia: ['Instagram', 'Pinterest', 'LinkedIn'],
      smalltag: 'Jepang',
      popularPost: true,
      date: currentDate,
    },
    {
      id: 10,
      title: 'Pemandangan Pantai di Indonesia',
      smalldesc: 'Pantai yang indah di Indonesia.',
      description:
        'Indonesia dikenal dengan pantainya yang indah dan air lautnya yang jernih. Anda dapat menikmati keindahan pantai Indonesia dengan berenang, snorkeling, atau diving. Pantai di Indonesia juga menawarkan suasana yang santai dan pemandangan yang menakjubkan.',
      imageUrl:
        'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&auto=format&fit=crop&q=60',
      socialMedia: ['Facebook', 'Instagram', 'Twitter'],
      smalltag: 'Indonesia',
      popularPost: false,
      date: currentDate,
    },
    {
      id: 11,
      title: 'Pemandangan Gunung di Swiss',
      smalldesc: 'Gunung yang indah di Swiss.',
      description:
        'Swiss dikenal dengan keindahan alamnya, termasuk gunung-gunungnya yang tinggi dan pemandangan pegunungan yang menakjubkan. Anda dapat menikmati pemandangan gunung Swiss dengan berjalan-jalan atau mendaki. Swiss juga merupakan destinasi populer untuk menikmati ski dan snowboard.',
      imageUrl:
        'https://images.unsplash.com/photo-1516972810927-80185027ca84?w=800&auto=format&fit=crop&q=60',
      socialMedia: ['Instagram', 'Pinterest', 'LinkedIn'],
      smalltag: 'Swiss',
      popularPost: true,
      date: currentDate,
    },
    {
      id: 12,
      title: 'Pemandangan Pantai di Malaysia',
      smalldesc: 'Pantai yang indah di Malaysia.',
      description:
        'Malaysia dikenal dengan pantainya yang indah dan air lautnya yang jernih. Anda dapat menikmati keindahan pantai Malaysia dengan berenang, snorkeling, atau diving. Pantai di Malaysia juga menawarkan suasana yang santai dan pemandangan yang menakjubkan.',
      imageUrl:
        'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&auto=format&fit=crop&q=60',
      socialMedia: ['Facebook', 'Instagram', 'Twitter'],
      smalltag: 'Malaysia',
      popularPost: false,
      date: currentDate,
    },
    {
      id: 13,
      title: 'Pemandangan Gunung di Kanada',
      smalldesc: 'Gunung yang indah di Kanada.',
      description:
        'Kanada dikenal dengan keindahan alamnya, termasuk gunung-gunungnya yang tinggi dan pemandangan pegunungan yang menakjubkan. Anda dapat menikmati pemandangan gunung Kanada dengan berjalan-jalan atau mendaki. Kanada juga merupakan destinasi populer untuk menikmati ski dan snowboard.',
      imageUrl:
        'https://images.unsplash.com/photo-1516972810927-80185027ca84?w=800&auto=format&fit=crop&q=60',
      socialMedia: ['Instagram', 'Pinterest', 'LinkedIn'],
      smalltag: 'Kanada',
      popularPost: true,
      date: currentDate,
    },
    {
      id: 14,
      title: 'Pemandangan Pantai di Filipina',
      smalldesc: 'Pantai yang indah di Filipina.',
      description:
        'Filipina dikenal dengan pantainya yang indah dan air lautnya yang jernih. Anda dapat menikmati keindahan pantai Filipina dengan berenang, snorkeling, atau diving. Pantai di Filipina juga menawarkan suasana yang santai dan pemandangan yang menakjubkan.',
      imageUrl:
        'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&auto=format&fit=crop&q=60',
      socialMedia: ['Facebook', 'Instagram', 'Twitter'],
      smalltag: 'Filipina',
      popularPost: false,
      date: currentDate,
    },
    {
      id: 15,
      title: 'Pemandangan Gunung di Perancis',
      smalldesc: 'Gunung yang indah di Perancis.',
      description:
        'Perancis dikenal dengan keindahan alamnya, termasuk gunung-gunungnya yang tinggi dan pemandangan pegunungan yang menakjubkan. Anda dapat menikmati pemandangan gunung Perancis dengan berjalan-jalan atau mendaki. Perancis juga merupakan destinasi populer untuk menikmati ski dan snowboard.',
      imageUrl:
        'https://images.unsplash.com/photo-1516972810927-80185027ca84?w=800&auto=format&fit=crop&q=60',
      socialMedia: ['Instagram', 'Pinterest', 'LinkedIn'],
      smalltag: 'Perancis',
      popularPost: true,
      date: currentDate,
    },
    {
      id: 16,
      title: 'Pemandangan Pantai di Indonesia',
      smalldesc: 'Pantai yang indah di Indonesia.',
      description:
        'Indonesia dikenal dengan pantainya yang indah dan air lautnya yang jernih. Anda dapat menikmati keindahan pantai Indonesia dengan berenang, snorkeling, atau diving. Pantai di Indonesia juga menawarkan suasana yang santai dan pemandangan yang menakjubkan.',
      imageUrl:
        'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&auto=format&fit=crop&q=60',
      socialMedia: ['Facebook', 'Instagram', 'Twitter'],
      smalltag: 'Indonesia',
      popularPost: false,
      date: currentDate,
    },
    {
      id: 17,
      title: 'Pemandangan Gunung di Norwegia',
      smalldesc: 'Gunung yang indah di Norwegia.',
      description:
        'Norwegia dikenal dengan keindahan alamnya, termasuk gunung-gunungnya yang tinggi dan pemandangan pegunungan yang menakjubkan. Anda dapat menikmati pemandangan gunung Norwegia dengan berjalan-jalan atau mendaki. Norwegia juga merupakan destinasi populer untuk menikmati ski dan snowboard.',
      imageUrl:
        'https://images.unsplash.com/photo-1516972810927-80185027ca84?w=800&auto=format&fit=crop&q=60',
      socialMedia: ['Instagram', 'Pinterest', 'LinkedIn'],
      smalltag: 'Norwegia',
      popularPost: true,
      date: currentDate,
    },
    {
      id: 18,
      title: 'Pemandangan Pantai di Indonesia',
      smalldesc: 'Pantai yang indah di Indonesia.',
      description:
        'Indonesia dikenal dengan pantainya yang indah dan air lautnya yang jernih. Anda dapat menikmati keindahan pantai Indonesia dengan berenang, snorkeling, atau diving. Pantai di Indonesia juga menawarkan suasana yang santai dan pemandangan yang menakjubkan.',
      imageUrl:
        'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&auto=format&fit=crop&q=60',
      socialMedia: ['Facebook', 'Instagram', 'Twitter'],
      smalltag: 'Indonesia',
      popularPost: false,
      date: currentDate,
    },
    {
      id: 19,
      title: 'Pemandangan Gunung di Austria',
      smalldesc: 'Gunung yang indah di Austria.',
      description:
        'Austria dikenal dengan keindahan alamnya, termasuk gunung-gunungnya yang tinggi dan pemandangan pegunungan yang menakjubkan. Anda dapat menikmati pemandangan gunung Austria dengan berjalan-jalan atau mendaki. Austria juga merupakan destinasi populer untuk menikmati ski dan snowboard.',
      imageUrl:
        'https://images.unsplash.com/photo-1516972810927-80185027ca84?w=800&auto=format&fit=crop&q=60',
      socialMedia: ['Instagram', 'Pinterest', 'LinkedIn'],
      smalltag: 'Austria',
      popularPost: true,
    },
    {
      id: 20,
      title: 'Keindahan Pulau Bora Bora, Polinesia Prancis',
      smalldesc: 'Pulau tropis dengan laguna yang menakjubkan.',
      description:
        'Pulau Bora Bora di Polinesia Prancis adalah salah satu pulau tropis terindah di dunia. Dikenal dengan laguna yang menakjubkan dan pantai berpasir putih, Bora Bora adalah tempat yang sempurna untuk bersantai. Anda dapat snorkeling, menyelam, atau sekadar bersantai di tepi pantai. Keindahan alam yang menakjubkan dan suasana yang tenang menjadikan Bora Bora sebagai destinasi yang wajib dikunjungi.',
      imageUrl:
        'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?w=800&auto=format&fit=crop&q=60',
      socialMedia: ['Instagram', 'Facebook', 'Twitter'],
      smalltag: 'Bora Bora',
      popularPost: true,
      date: currentDate,
    },
    {
      id: 21,
      title: 'Keindahan Taman Nasional Rocky Mountain, Amerika Serikat',
      smalldesc:
        'Taman nasional dengan pemandangan pegunungan yang menakjubkan.',
      description:
        'Taman Nasional Rocky Mountain di Colorado adalah salah satu taman nasional terindah di Amerika Serikat. Dikenal dengan pemandangan pegunungan yang menakjubkan, danau yang jernih, dan hutan yang rimbun, Rocky Mountain adalah tempat yang sempurna untuk petualangan luar ruangan. Anda dapat melakukan hiking, bersepeda, atau sekadar menikmati pemandangan yang menakjubkan. Keindahan alam yang luar biasa dan satwa liar yang beragam menjadikan Rocky Mountain sebagai destinasi yang wajib dikunjungi.',
      imageUrl:
        'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?w=800&auto=format&fit=crop&q=60',
      socialMedia: ['Instagram', 'Facebook', 'Twitter'],
      smalltag: 'Rocky Mountain',
      popularPost: true,
      date: currentDate,
    },
    {
      id: 22,
      title: 'Keindahan Taman Nasional Saguaro, Amerika Serikat',
      smalldesc: 'Taman nasional dengan kaktus raksasa yang menakjubkan.',
      description:
        'Taman Nasional Saguaro di Arizona adalah rumah bagi kaktus raksasa Saguaro yang ikonik. Dengan pemandangan gurun yang menakjubkan dan satwa liar yang beragam, Saguaro adalah tempat yang sempurna untuk menjelajahi keindahan alam. Anda dapat melakukan hiking, bersepeda, atau sekadar menikmati pemandangan yang menakjubkan. Keindahan alam yang luar biasa dan suasana yang tenang menjadikan Saguaro sebagai destinasi yang wajib dikunjungi.',
      imageUrl:
        'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?w=800&auto=format&fit=crop&q=60',
      socialMedia: ['Instagram', 'Facebook', 'Twitter'],
      smalltag: 'Saguaro National Park',
      popularPost: true,
      date: currentDate,
    },
    {
      id: 23,
      title: 'Keindahan Taman Nasional Olympic, Amerika Serikat',
      smalldesc:
        'Taman nasional dengan hutan hujan dan pegunungan yang menakjubkan.',
      description:
        'Taman Nasional Olympic di Washington adalah salah satu taman nasional terindah di Amerika Serikat. Dikenal dengan hutan hujan yang lebat, pegunungan yang menjulang tinggi, dan pantai yang indah, Olympic adalah tempat yang sempurna untuk petualangan luar ruangan. Anda dapat melakukan hiking, berkemah, atau menjelajahi jalur-jalur hiking yang menakjubkan. Keindahan alam yang luar biasa dan satwa liar yang beragam menjadikan Olympic sebagai destinasi yang wajib dikunjungi.',
      imageUrl:
        'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?w=800&auto=format&fit=crop&q=60',
      socialMedia: ['Instagram', 'Facebook', 'Twitter'],
      smalltag: 'Olympic National Park',
      popularPost: true,
      date: currentDate,
    },
    {
      id: 24,
      title: 'Keindahan Taman Nasional Shenandoah, Amerika Serikat',
      smalldesc:
        'Taman nasional dengan pemandangan pegunungan yang menakjubkan.',
      description:
        'Taman Nasional Shenandoah di Virginia adalah salah satu taman nasional terindah di Amerika Serikat. Dikenal dengan pemandangan pegunungan yang menakjubkan, jalur-jalur hiking yang indah, dan satwa liar yang beragam, Shenandoah adalah tempat yang sempurna untuk petualangan luar ruangan. Anda dapat melakukan hiking, bersepeda, atau sekadar menikmati pemandangan yang menakjubkan. Keindahan alam yang luar biasa dan suasana yang tenang menjadikan Shenandoah sebagai destinasi yang wajib dikunjungi.',
      imageUrl:
        'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?w=800&auto=format&fit=crop&q=60',
      socialMedia: ['Instagram', 'Facebook', 'Twitter'],
      smalltag: 'Shenandoah National Park',
      popularPost: true,
      date: currentDate,
    },
    {
      id: 25,
      title: 'Keindahan Taman Nasional Joshua Tree, Amerika Serikat',
      smalldesc: 'Taman nasional dengan pemandangan gurun yang menakjubkan.',
      description:
        'Taman Nasional Joshua Tree di California adalah rumah bagi pohon Joshua yang ikonik dan pemandangan gurun yang menakjubkan. Dengan formasi batuan yang unik dan langit malam yang cerah, Joshua Tree adalah tempat yang sempurna untuk petualangan luar ruangan. Anda dapat melakukan hiking, berkemah, atau sekadar menikmati pemandangan yang menakjubkan. Keindahan alam yang luar biasa dan suasana yang tenang menjadikan Joshua Tree sebagai destinasi yang wajib dikunjungi.',
      imageUrl:
        'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?w=800&auto=format&fit=crop&q=60',
      socialMedia: ['Instagram', 'Facebook', 'Twitter'],
      smalltag: 'Joshua Tree National Park',
      popularPost: true,
      date: currentDate,
    },
    {
      id: 26,
      title: 'Keindahan Taman Nasional Glacier, Amerika Serikat',
      smalldesc:
        'Taman nasional dengan gletser dan pemandangan alam yang menakjubkan.',
      description:
        'Taman Nasional Glacier di Montana adalah salah satu taman nasional terindah di Amerika Serikat. Dikenal dengan gletser yang megah, danau yang jernih, dan pemandangan pegunungan yang menakjubkan, Glacier adalah tempat yang sempurna untuk petualangan luar ruangan. Anda dapat melakukan hiking, bersepeda, atau menjelajahi jalur-jalur hiking yang menakjubkan. Keindahan alam yang luar biasa dan satwa liar yang beragam menjadikan Glacier sebagai destinasi yang wajib dikunjungi.',
      imageUrl:
        'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?w=800&auto=format&fit=crop&q=60',
      socialMedia: ['Instagram', 'Facebook', 'Twitter'],
      smalltag: 'Glacier National Park',
      popularPost: true,
      date: currentDate,
    },
    {
      id: 27,
      title: 'Keindahan Taman Nasional Mount Rainier, Amerika Serikat',
      smalldesc: 'Taman nasional dengan gunung berapi yang menakjubkan.',
      description:
        'Taman Nasional Mount Rainier di Washington adalah rumah bagi gunung berapi yang megah dan pemandangan alam yang menakjubkan. Dikenal dengan padang bunga liar yang indah dan jalur-jalur hiking yang menakjubkan, Mount Rainier adalah tempat yang sempurna untuk petualangan luar ruangan. Anda dapat melakukan hiking, berkemah, atau sekadar menikmati pemandangan yang menakjubkan. Keindahan alam yang luar biasa dan suasana yang tenang menjadikan Mount Rainier sebagai destinasi yang wajib dikunjungi.',
      imageUrl:
        'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?w=800&auto=format&fit=crop&q=60',
      socialMedia: ['Instagram', 'Facebook', 'Twitter'],
      smalltag: 'Mount Rainier',
      popularPost: true,
      date: currentDate,
    },
    {
      id: 28,
      title: 'Keindahan Taman Nasional Lassen Volcanic, Amerika Serikat',
      smalldesc:
        'Taman nasional dengan gunung berapi dan pemandangan alam yang menakjubkan.',
      description:
        'Taman Nasional Lassen Volcanic di California adalah rumah bagi gunung berapi yang megah dan pemandangan alam yang menakjubkan. Dikenal dengan mata air panas, geyser, dan jalur-jalur hiking yang indah, Lassen Volcanic adalah tempat yang sempurna untuk petualangan luar ruangan. Anda dapat melakukan hiking, berkemah, atau menjelajahi keindahan alam yang luar biasa. Keindahan alam yang menakjubkan dan suasana yang tenang menjadikan Lassen Volcanic sebagai destinasi yang wajib dikunjungi.',
      imageUrl:
        'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?w=800&auto=format&fit=crop&q=60',
      socialMedia: ['Instagram', 'Facebook', 'Twitter'],
      smalltag: 'Lassen Volcanic National Park',
      popularPost: true,
      date: currentDate,
    },
    {
      id: 29,
      title: 'Keindahan Taman Nasional Cuyahoga Valley, Amerika Serikat',
      smalldesc: 'Taman nasional dengan pemandangan alam yang menakjubkan.',
      description:
        'Taman Nasional Cuyahoga Valley di Ohio adalah salah satu taman nasional terindah di Amerika Serikat. Dikenal dengan pemandangan alam yang menakjubkan, jalur-jalur hiking yang indah, dan air terjun yang megah, Cuyahoga Valley adalah tempat yang sempurna untuk petualangan luar ruangan. Anda dapat melakukan hiking, bersepeda, atau sekadar menikmati pemandangan yang menakjubkan. Keindahan alam yang luar biasa dan suasana yang tenang menjadikan Cuyahoga Valley sebagai destinasi yang wajib dikunjungi.',
      imageUrl:
        'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?w=800&auto=format&fit=crop&q=60',
      socialMedia: ['Instagram', 'Facebook', 'Twitter'],
      smalltag: 'Cuyahoga Valley National Park',
      popularPost: true,
      date: currentDate,
    },
    {
      id: 30,
      title: 'Keindahan Taman Nasional Congaree, Amerika Serikat',
      smalldesc: 'Taman nasional dengan hutan rawa yang menakjubkan.',
      description:
        'Taman Nasional Congaree di Carolina Selatan adalah rumah bagi hutan rawa yang menakjubkan dan keanekaragaman hayati yang kaya. Dikenal dengan jalur-jalur hiking yang indah dan pemandangan alam yang menakjubkan, Congaree adalah tempat yang sempurna untuk petualangan luar ruangan. Anda dapat melakukan hiking, berkemah, atau menjelajahi keindahan alam yang luar biasa. Keindahan alam yang menakjubkan dan suasana yang tenang menjadikan Congaree sebagai destinasi yang wajib dikunjungi.',
      imageUrl:
        'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?w=800&auto=format&fit=crop&q=60',
      socialMedia: ['Instagram', 'Facebook', 'Twitter'],
      smalltag: 'Congaree National Park',
      popularPost: true,
      date: currentDate,
    },
  ];

  res.status(200).json(fakeapi);
}
