import profile from '@/assets/icons/profile.svg';
import Layout from '@/components/common/Layout';
import Map from '@/components/nearby-place/Map';
import Navigation from '@/components/common/Navigation';
import BottomSheet from '@/components/nearby-place/BottomSheet';
import useLocation from '@/hooks/useLocation';
import { useEffect, useState } from 'react';

declare global {
  interface Window {
    kakao: any;
  }
}

function NearbyPlace() {
  const [station, setStation] = useState('');
  const { stationName } = useLocation();
  useEffect(() => {
    if (stationName) setStation(stationName);
  }, [stationName]);

  return (
    <Layout title={station} right={profile}>
      <Navigation />
      <div className="flex">
        <Map></Map>
        <BottomSheet />
      </div>
    </Layout>
  );
}

export default NearbyPlace;
