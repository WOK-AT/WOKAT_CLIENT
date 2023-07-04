import { useState } from 'react';
import { useRouter } from 'next/router';
import profile from '@/assets/icons/profile.svg';
import Layout from '@/components/common/Layout';
import Map from '@/components/nearby-place/Map';
import Navigation from '@/components/common/Navigation';
import BottomSheet from '@/components/nearby-place/BottomSheet';

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
      <div className="flex">
        <Map onChange={onChange} stationName={station || stationName} />
        <BottomSheet stationName={station || stationName} />
      </div>
    </Layout>
  );
}

export default NearbyPlace;
