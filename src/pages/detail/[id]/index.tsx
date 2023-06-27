import Layout from '@/components/common/Layout';
import PlaceInfo from '@/components/detail/placeInfo';
import ImageCarousel from '@/components/detail/imageCarousel';
import PlaceDetailInfo from '@/components/detail/PlaceDetailInfo';

function Detail() {
  return (
    <Layout>
      <ImageCarousel />
      <PlaceInfo />
      <PlaceDetailInfo />
    </Layout>
  );
}

export default Detail;
