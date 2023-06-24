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
    <main>
      <Header title={title} right={right} />
      <div className="mx-auto px-4" style={{ minHeight: 'calc(100% - 56px)' }}>
        {children}
      </div>
    </main>
  );
}

export default Layout;
