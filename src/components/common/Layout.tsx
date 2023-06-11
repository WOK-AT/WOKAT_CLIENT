import { PropsWithChildren, useEffect } from 'react';
import Header from './Header';
interface LayoutProps {
  title?: string;
  right?: string;
}

function Layout(props: PropsWithChildren<LayoutProps>) {
  const { children, title, right } = props;

  useEffect(() => {
    if (!window.Kakao.isInitialized()) {
      window.Kakao.init(process.env.NEXT_PUBLIC_KAKAO_KEY);
    }
  }, []);

  return (
    <main className="flex flex-col h-screen">
      <Header title={title} right={right} />
      <div
        className="h-full px-4 mx-auto"
        style={{ height: 'calc(100% - 80px)' }}
      >
        {children}
      </div>
    </main>
  );
}

export default Layout;
