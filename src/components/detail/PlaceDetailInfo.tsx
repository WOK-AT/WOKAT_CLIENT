import React from 'react';
import DetailNavigator from './DetailNavigator';
import FacilityInformation from './placeDetailNav/FacilityInformation';
import OperatingTime from './placeDetailNav/OperatingTime';
import PlaceIntroduce from './placeDetailNav/PlaceIntroduce';
import PlaceLocation from './placeDetailNav/PlaceLocation';
import BookingButton from './placeDetailNav/BookingButton';

function PlaceDetailInfo() {
  const data = {
    category: 1,
    place: '홍대 유유기지',
    distance: '홍대입구역 5번 출구에서 도보 10분',
    count: '최대 10명',
    hashtags: ['해쉬태그1', '해쉬태그2', '해쉬태그3'],
    introduce: '지방자치단체는 주민의 복리에 관한 사무를...',
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
    <main>
      <DetailNavigator />
      <PlaceIntroduce />
      <OperatingTime />
      <FacilityInformation />
      <PlaceLocation />
      {data.category === 1 && <BookingButton />}
    </main>
  );
}

export default PlaceDetailInfo;
