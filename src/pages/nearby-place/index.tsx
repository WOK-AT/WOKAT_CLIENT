import profile from '@/assets/icons/profile.svg';
import Layout from '@/components/common/Layout';
import Map from '@/components/nearby-place/Map';
import Navigation from '@/components/common/Navigation';
import BottomSheet from '@/components/nearby-place/BottomSheet';

function NearbyPlace() {
  return (
    <Layout title={'역삼역'} right={profile}>
      <Navigation />
      <div className="flex">
        <Map></Map>
        <BottomSheet />
      </div>
    </Layout>
  );
}

export default NearbyPlace;
