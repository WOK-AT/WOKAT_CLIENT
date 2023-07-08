import Layout from '@/components/common/Layout';
import PlaceInfo from '@/components/detail/Info';
import ImageCarousel from '@/components/detail/Carousel';
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
