import { useState } from 'react';
import { useRouter } from 'next/router';
import profile from '@/assets/icons/profile.svg';
import Layout from '@/components/common/Layout';
import Map from '@/components/nearby-place/Map';
import Navigation from '@/components/common/Navigation';
import BottomSheet from '@/components/nearby-place/BottomSheet';
import { NavigationContextProvider } from '@/context/NavigationContext';

function NearbyPlace() {
  const router = useRouter();
  const query = router.query.station as string[];

  const station = query ? query[0] : '';
  const [stationName, setStationName] = useState('');

  return (
    <NavigationContextProvider>
      <Layout title={station || stationName} right={profile}>
        <Navigation />
        <div className="flex">
          <Map
            setStationName={setStationName}
            station={station.replace('역', '') || stationName}
          ></Map>
          <BottomSheet stationName={station || stationName} />
        </div>
      </Layout>
    </NavigationContextProvider>
  );
}

export default NearbyPlace;
