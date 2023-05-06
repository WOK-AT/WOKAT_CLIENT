import Layout from '@/components/common/Layout';
import login from '@/assets/icons/login.svg';
import PlaceInfo from '@/components/detail/placeInfo';
import ImageCarousel from '@/components/detail/imageCarousel';

function Detail() {
  const dummyData = {
    tags: ['🥲 음악이 좋은', '🤮 분위기 있는', '💩 조용한'],
    imgUrls: ['111', '222', '333'],
  };
  return (
    <Layout right={login}>
      <ImageCarousel imgUrls={dummyData.imgUrls} />
      <PlaceInfo tags={dummyData.tags} />
    </Layout>
  );
}

export default Detail;
