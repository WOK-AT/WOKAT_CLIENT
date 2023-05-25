import Layout from '@/components/common/Layout';
import login from '@/assets/icons/login.svg';
import PlaceInfo from '@/components/detail/placeInfo';
import ImageCarousel from '@/components/detail/imageCarousel';
import PlaceDetailInfo from '@/components/detail/PlaceDetailInfo';
import { useGetPlaceDetail } from '@/hooks/useDetail';

function Detail() {
  const { list } = useGetPlaceDetail();

  const dummy = {
    category: 1,
    place: '캐치카페 한양대점',
    distance: '홍대입구역 5번 출구에서 도보 10분',
    count: '최대 10명',
    hashtags: ['🤭 음악이 좋은', '💓 분위기 있는', '📚 조용한'],
    introduce:
      '1. 공간소개 : 캐치카페는 무료로 커피를 마시면서 , 5시간동안 공부할수 있는 공간 입니다. 2. 공간상세정보 : 무료로 커피를 마시면서 , 5시간동안 공부할수 있는 공간 20명 이하 단체좌석 예약에 학생화 동아리대관도 가능합니다!',
    'operation-hours': [
      {
        open: ['화~금 08:00 ~ 22:00', '토,일 09:00 ~ 18:00'],
        closed: ['월요일'],
      },
    ],
    information: [
      {
        contact: '070-8800-7765',
        homepage: 'www.wokat.com',
        'wi-fi': [
          {
            ID: ['KT_GIGA_2G_Wave3_B829'],
            PW: ['123456789'],
          },
        ],
        socket: true,
        parking: true,
        'hdmi-screen': true,
      },
    ],
    imgUrls: ['111', '222', '333'],
    location: '서울 성동구 왕십리로 223 동우빌딩 2층 캐치카페 한양대', // default: 도로명주소
  };

  return (
    <Layout right={login}>
      <ImageCarousel imageURLs={list?.data.imageURLs} />
      {/* <PlaceInfo
        category={data.category}
        place={data.placeName}
        distance={data.distance}
        hashtags={data.hashtags}
      />
      <PlaceDetailInfo
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
