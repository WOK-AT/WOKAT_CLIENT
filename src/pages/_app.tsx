import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { NavProvider } from '@/Contexts/Navagation';
export default function App({ Component, pageProps }: AppProps) {
  return (
    <NavProvider>
      <Component {...pageProps} />
    </NavProvider>
  );
}
