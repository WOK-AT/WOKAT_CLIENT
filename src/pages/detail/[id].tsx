import Layout from '@/components/common/Layout';
import login from '@/assets/icons/login.svg';
import PlaceInfo from '@/components/detail/placeInfo';

function Detail() {
  const dummyData = { tags: ['🥲 음악이 좋은', '🤮 분위기 있는', '💩 조용한'] };
  return (
    <Layout right={login}>
      <div>이미지 캐러셀</div>
      <PlaceInfo tags={dummyData.tags} />
    </Layout>
  );
}

export default Detail;
