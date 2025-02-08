import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import Apps from '../components/apps/apps';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Apps>
      <Component {...pageProps} />
    </Apps>
  );
}
