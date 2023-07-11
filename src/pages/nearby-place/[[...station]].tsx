import { Suspense, useState } from 'react';
import { useRouter } from 'next/router';
import Layout from '@/components/common/Layout';
import Map from '@/components/nearby-place/Map';
import Navigation from '@/components/common/Navigation';
import BottomSheet from '@/components/nearby-place/BottomSheet';
import ListSkeleton from '@/components/list/Skeleton';
import Spinner from '@/components/nearby-place/Spinner';

function NearbyPlace() {
  const router = useRouter();
  const query = router.query.station as string[];

  const station = query ? query[0] : '';
  const [stationName, setStationName] = useState('');

  const onChange = (station: string) => {
    setStationName(station);
  };

  return (
    <Layout title={station || stationName}>
      <Navigation />

      <Suspense fallback={<Spinner />}>
        <div className="flex">
          <Map onChange={onChange} stationName={station || stationName} />
          <Suspense fallback={<ListSkeleton />}>
            <BottomSheet stationName={station || stationName} />
          </Suspense>
        </div>
      </Suspense>
    </Layout>
  );
}

export default NearbyPlace;
