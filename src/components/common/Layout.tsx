import { PropsWithChildren } from 'react';
import Header from './Header';

interface LayoutProps {
  title?: string;
  right?: string;
}

function Layout(props: PropsWithChildren<LayoutProps>) {
  const { children, title, right } = props;

  return (
    <main>
      <Header title={title} right={right} />
      <div>{children}</div>
    </main>
  );
}

export default Layout;
