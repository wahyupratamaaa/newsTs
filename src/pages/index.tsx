// import Image from "next/image";
// import { Geist, Geist_Mono } from "next/font/google";
import Head from 'next/head';
import Homapage from '../components/views/';

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export default function Home() {
  return (
    <>
      <Head>
        <title>Homepage</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='./iconhead.png' />
      </Head>
      <Homapage />
    </>
  );
}
