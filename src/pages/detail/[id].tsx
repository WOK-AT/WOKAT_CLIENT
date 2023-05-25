import Layout from '@/components/common/Layout';
import login from '@/assets/icons/login.svg';
import PlaceInfo from '@/components/detail/placeInfo';
import ImageCarousel from '@/components/detail/imageCarousel';
import PlaceDetailInfo from '@/components/detail/PlaceDetailInfo';
import { useGetPlaceDetail } from '@/hooks/useDetail';

function Detail() {
  const { list } = useGetPlaceDetail();

  return (
    <Layout right={login}>
      <ImageCarousel imageURLs={list?.data.imageURLs} />
      <PlaceInfo
        category={list?.data.category}
        place={list?.data.placeName}
        distance={list?.data.distance}
        hashtags={list?.data.hashtags}
      />
      {/* <PlaceDetailInfo
        place={data.place}
        category={data.category}
        operationHours={data.operationHours}
        introduce={data.introduce}
        information={data.information}
        maxPeopleCount={data.count}
        location={data.location}
      /> */}
    </Layout>
  );
}

export default Detail;
