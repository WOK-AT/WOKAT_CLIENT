import type { AppProps } from 'next/app';
import {
  QueryClient,
  QueryClientProvider,
  QueryErrorResetBoundary,
} from '@tanstack/react-query';
import '@/styles/globals.css';
import WokatSEO from '@/components/WokatSEO';
import { NavigationContextProvider } from '@/context/NavigationContext';
import { ToastContextProvider } from '@/context/ToastContext';
import { ErrorBoundary } from 'react-error-boundary';
import Link from 'next/link';
import GAScript from '@/components/list/GAScript';

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

  function fallbackRender({
    error,
    resetErrorBoundary,
  }: {
    error: Error;
    resetErrorBoundary: any;
  }) {
    return (
      <div>
        <h1>오류가 발생했습니다!</h1>
        <p>{error.message}</p>
        <Link href="/" onClick={() => resetErrorBoundary()}>
          돌아가기
        </Link>
      </div>
    );
  }

  return (
    <>
      <GAScript />
      <QueryClientProvider client={queryClient}>
        <QueryErrorResetBoundary>
          {({ reset }) => (
            <ErrorBoundary onReset={reset} fallbackRender={fallbackRender}>
              <NavigationContextProvider>
                <ToastContextProvider>
                  <Component {...pageProps} />
                </ToastContextProvider>
              </NavigationContextProvider>
            </ErrorBoundary>
          )}
        </QueryErrorResetBoundary>
        <WokatSEO />
      </QueryClientProvider>
    </>
  );
}
