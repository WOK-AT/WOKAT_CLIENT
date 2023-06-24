import { useRouter } from 'next/router';
import Layout from '@/components/common/Layout';
import Navigation from '@/components/common/Navigation';
import PlaceList from '@/components/list/PlaceList';
import FAB from '@/components/list/FAB';

function List() {
  const router = useRouter();
  const title = router.query.title as string;

  return (
    <Layout title={title ? `${title}역` : ''}>
      <Navigation />
      <PlaceList station={title} />
      <FAB />
    </Layout>
  );
}

export default List;
