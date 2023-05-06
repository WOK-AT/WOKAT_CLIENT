import profile from '@/assets/icons/profile.svg';
import Layout from '@/components/common/Layout';
import Map from '@/components/nearby-place/Map';

function NearbyPlace() {
  return (
    <Layout title={'역삼역'} right={profile}>
      <Map></Map>
    </Layout>
  );
}

export default NearbyPlace;
