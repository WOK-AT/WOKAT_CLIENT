import Layout from '@/components/common/Layout';
import PlaceInfo from '@/components/detail/PlaceInfo';
import ImageCarousel from '@/components/detail/ImageCarousel';
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
