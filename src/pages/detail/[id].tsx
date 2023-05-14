import Layout from '@/components/common/Layout';
import login from '@/assets/icons/login.svg';
import PlaceInfo from '@/components/detail/PlaceInfo.tsx';
import ImageCarousel from '@/components/detail/ImageCarousel';
import PlaceDetailInfo from '@/components/detail/PlaceDetailInfo';

function Detail() {
  const imageData = {
    // 장소 image 데이터는  현재 서버 노션에 적혀있는 response에 없어서 따로 적어두었습니다.
    imgUrls: ['111', '222', '333'],
  };

  const data = {
    category: 1,
    place: '홍대 유유기지',
    distance: '홍대입구역 5번 출구에서 도보 10분',
    count: '최대 10명',
    hashtags: ['🤭 음악이 좋은', '💓 분위기 있는', '📚 조용한'],
    introduce:
      '지방자치단체는 주민의 복리에 관한 사무를 처리하고 재산을 관리하며, 법령의 범위안에서 자치에 관한 규정을 제정할 수 있다. 모든 국민은 행위시의 법률에 의하여 범죄를 구성하지 아니하는 행위로 소추되지 아니하며, 동일한 범죄에 대하여 거듭 처벌받지 아니한다.',
    'operation-hours': [
      {
        open: ['화~금 08:00 ~ 22:00', '토,일 09:00 ~ 18:00'],
        closed: ['월요일'],
      },
    ],
    information: [
      {
        contact: '000-0000-0000',
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
    location: '인천 연수구 아트센터로 168번길 100', // default: 도로명주소
  };

  return (
    <Layout right={login}>
      <ImageCarousel imgUrls={imageData.imgUrls} />
      <PlaceInfo
        category={data.category}
        place={data.place}
        distance={data.distance}
        hashtags={data.hashtags}
      />
      <PlaceDetailInfo
        category={data.category}
        operationHours={data['operation-hours']}
        introduce={data.introduce}
        information={data.information}
        maxPeopleCount={data.count}
      />
    </Layout>
  );
}

export default Detail;
