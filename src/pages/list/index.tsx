import { useRouter } from 'next/router';
import Layout from '@/components/common/Layout';
import Navigation from '@/components/common/Navigation';
import FAB from '@/components/list/FAB';
import { Suspense, lazy } from 'react';
import Skeleton from '@/components/list/Skeleton';
import { disableScroll } from '@/utils/disableScroll';

const PlaceList = lazy(() => import('@/components/list/PlaceList'));

function List() {
  const router = useRouter();
  const title = router.query.title as string;

  disableScroll();

  return (
    <Layout title={title ? `${title}역` : ''}>
      <Navigation />
      <Suspense fallback={<Skeleton />}>
        <PlaceList station={title} />
      </Suspense>
      <FAB />
    </Layout>
  );
}

export default List;
