import Layout from '@/components/common/Layout';
import login from '@/assets/icons/login.svg';
import PlaceInfo from '@/components/detail/PlaceInfo.tsx';
import ImageCarousel from '@/components/detail/ImageCarousel';
import PlaceDetailInfo from '@/components/detail/PlaceDetailInfo';

function Detail() {
  const dummyData = {
    tags: ['🥲 음악이 좋은', '🤮 분위기 있는', '💩 조용한'],
    imgUrls: ['111', '222', '333'],
  };
  return (
    <div className="h-screen ">
      <Layout right={login}>
        <ImageCarousel imgUrls={dummyData.imgUrls} />
        <PlaceInfo tags={dummyData.tags} />
        <PlaceDetailInfo />
      </Layout>
    </div>
  );
}

export default Detail;
