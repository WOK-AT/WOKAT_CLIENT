import Layout from '@/components/common/Layout';
import profile from '@/assets/icons/profile.svg';
import FAB from '@/components/list/FAB';
import Navigation from '@/components/common/Navigation';
import PlaceList from './PlaceList';
import { useRouter } from 'next/router';

function ListLanding() {
  const router = useRouter();
  const title = router.query.title as string;

  return (
    <Layout title={`${title}역`} right={profile}>
      <FAB />
      <Navigation />
      <PlaceList />
    </Layout>
  );
}

export default ListLanding;
