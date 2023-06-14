import { useRouter } from 'next/router';
import profile from '@/assets/icons/profile.svg';
import Layout from '@/components/common/Layout';
import { NavigationContextProvider } from '@/context/NavigationContext';
import Navigation from '@/components/common/Navigation';
import PlaceList from '@/components/list/PlaceList';
import FAB from '@/components/list/FAB';

function List() {
  const router = useRouter();
  const title = router.query.title as string;

  return (
    <NavigationContextProvider>
      <Layout title={title ? `${title}역` : ''} right={profile}>
        <Navigation />
        <PlaceList />
        <FAB />
      </Layout>
    </NavigationContextProvider>
  );
}

export default List;
