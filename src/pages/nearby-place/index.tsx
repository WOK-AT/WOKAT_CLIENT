import profile from '@/assets/icons/profile.svg';
import Layout from '@/components/common/Layout';
import Map from '@/components/nearby-place/Map';
import Navigation from '@/components/common/Navigation';

function NearbyPlace() {
  return (
    <Layout title={'역삼역'} right={profile}>
      <Navigation />
      <Map></Map>
    </Layout>
  );
}

export default NearbyPlace;
