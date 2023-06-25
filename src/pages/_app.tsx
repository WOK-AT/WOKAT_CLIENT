import type { AppProps } from 'next/app';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import '@/styles/globals.css';
import WokatSEO from '@/components/WokatSEO';
import { NavigationContextProvider } from '@/context/NavigationContext';
import { ToastContextProvider } from '@/context/ToastContext';

declare global {
  interface Window {
    Kakao: any;
  }
}

export default function App({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
        retry: 0,
      },
    },
  });
  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContextProvider>
        <ToastContextProvider>
          <Component {...pageProps} />
        </ToastContextProvider>
      </NavigationContextProvider>
      <WokatSEO />
    </QueryClientProvider>
  );
}
