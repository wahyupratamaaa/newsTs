// import { useEffect, useRef, useState } from 'react';
// import { motion } from 'framer-motion';
// import Image from 'next/image';
// import useFetchNews from '../hooks/useFetchNews';
// import types from '../../types/typesApi';

// const Slide = () => {
//   const [visibleImages, setVisibleImages] = useState<boolean[]>([]);
//   const { data, loading, error } = useFetchNews();

//   // Debugging: Log data, loading, dan error
//   useEffect(() => {
//     console.log('Data:', data);
//     console.log('Loading:', loading);
//     console.log('Error:', error);
//   }, [data, loading, error]);

//   // Filter data untuk memastikan hanya item yang valid
//   const filteredData = data.filter(
//     (item): item is types => item.id !== undefined
//   );

//   // Mengacak data untuk menampilkan gambar secara acak
//   const randomImages = filteredData.sort(() => 0.5 - Math.random()).slice(0, 3);

//   const refs = useRef<(HTMLDivElement | null)[]>([]);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           const index = Number(entry.target.getAttribute('data-index'));
//           if (entry.isIntersecting) {
//             setVisibleImages((prev) => {
//               const newVisibleImages = [...prev];
//               newVisibleImages[index] = true;
//               return newVisibleImages;
//             });
//           } else {
//             setVisibleImages((prev) => {
//               const newVisibleImages = [...prev];
//               newVisibleImages[index] = false;
//               return newVisibleImages;
//             });
//           }
//         });
//       },
//       { threshold: 0.1 }
//     );

//     const currentRefs = refs.current;
//     currentRefs.forEach((ref) => {
//       if (ref) observer.observe(ref);
//     });

//     return () => {
//       currentRefs.forEach((ref) => {
//         if (ref) observer.unobserve(ref);
//       });
//     };
//   }, [randomImages]);

//   if (loading) {
//     return (
//       <div className='w-screen h-screen flex items-center justify-center'>
//         <p>Loading...</p>
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div className='w-screen h-screen flex items-center justify-center'>
//         <p>Error loading data: {error}</p>
//       </div>
//     );
//   }

//   if (randomImages.length === 0) {
//     return (
//       <div className='w-screen h-screen flex items-center justify-center'>
//         <p>No data available</p>
//       </div>
//     );
//   }

//   return (
//     <div className='w-screen h-auto px-4 sm:px-8 md:px-16 lg:px-28'>
//       <div className='flex gap-4 mb-4'>
//         {randomImages.map((item, index) => (
//           <motion.div
//             key={item.id}
//             ref={(el) => {
//               refs.current[index] = el;
//             }}
//             data-index={index}
//             className={`h-[${Math.random() * 300 + 200}px] w-[${
//               Math.random() * 200 + 100
//             }px]`}
//             initial={{ opacity: 0, filter: 'blur(20px)' }}
//             animate={
//               visibleImages[index] ? { opacity: 1, filter: 'blur(0px)' } : {}
//             }
//             transition={{ duration: 0.5 }}
//           >
//             <Image
//               src={item.imageUrl || ''}
//               alt={`Slide ${index + 1}`}
//               className='w-full h-full object-cover rounded-lg'
//               width={400}
//               height={400}
//             />
//           </motion.div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Slide;
