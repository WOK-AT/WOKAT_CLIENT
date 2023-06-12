import Layout from '@/components/common/Layout';
import login from '@/assets/icons/login.svg';
import PlaceInfo from '@/components/detail/placeInfo';
import ImageCarousel from '@/components/detail/imageCarousel';
import PlaceDetailInfo from '@/components/detail/PlaceDetailInfo';
import { useGetPlaceDetail } from '@/hooks/useDetail';
import { useRouter } from 'next/router';

function Detail() {
  const router = useRouter();
  const placeId = router.query.id as string;
  const { list } = useGetPlaceDetail(placeId);

  return (
    <Layout right={login}>
      <ImageCarousel imageURLs={list?.data.imageURLs} />
      <PlaceInfo
        category={list?.data.category}
        place={list?.data.placeName}
        distance={list?.data.distance}
        hashtags={list?.data.hashtags}
      />
      <PlaceDetailInfo
        place={list?.data.placeName}
        category={list?.data.category}
        operationHours={list?.data.operationHours}
        introduce={list?.data.introduce}
        information={list?.data.information}
        maxPeopleCount={list?.data.count}
        location={list?.data.location}
        bookingURL={list?.data.bookingURL}
      />
    </Layout>
  );
}

export default Detail;
