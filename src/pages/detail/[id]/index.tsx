import Layout from '@/components/common/Layout';
import PlaceInfo from '@/components/detail/PlaceInfo';
import ImageCarousel from '@/components/detail/ImageCarousel';
import PlaceDetailInfo from '@/components/detail/PlaceDetailInfo';
import { useEffect } from 'react';

function Detail() {
  useEffect(() => {
    document.body.style.overflow = 'scroll';
  }, []);

  return (
    <Layout>
      <ImageCarousel />
      <PlaceInfo />
      <PlaceDetailInfo />
    </Layout>
  );
}

export default Detail;
