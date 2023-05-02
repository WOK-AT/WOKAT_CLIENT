import { PropsWithChildren, useContext } from 'react';
import Header from './Header';
import Navigation from './Navigation';
import { NavContext } from '@/Contexts/Navagation';

interface LayoutProps {
  title?: string;
  right?: string;
}

function Layout(props: PropsWithChildren<LayoutProps>) {
  const { children, title, right } = props;
  const { navType } = useContext(NavContext);

  return (
    <main>
      <Header title={title} right={right} />
      <Navigation></Navigation>
      <div>{children}</div>
    </main>
  );
}

export default Layout;
