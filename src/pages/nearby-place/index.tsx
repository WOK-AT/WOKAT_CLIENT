import profile from '@/assets/icons/profile.svg';
import Layout from '@/components/common/Layout';
import Map from '@/components/nearby-place/Map';
import Navigation from '@/components/common/Navigation';
import BottomSheet from '@/components/nearby-place/BottomSheet';
import { useState } from 'react';

function NearbyPlace() {
  const [stationName, setStationName] = useState('');
  return (
    <Layout title={stationName} right={profile}>
      <Navigation />
      <div className="flex">
        <Map setStationName={setStationName}></Map>
        <BottomSheet />
      </div>
    </Layout>
  );
}

export default NearbyPlace;
