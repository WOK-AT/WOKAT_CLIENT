import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import centerBtn from '@/assets/icons/center_button.svg';
import useLocation from '@/hooks/useLocation';

declare global {
  interface Window {
    kakao: any;
  }
}

interface PlacePosition {
  x: string;
  y: string;
}

const dummy = [
  {
    place: '캐치카페 한양대',
    location: '서울 성동구 왕십리로 223 동우빌딩 2층 캐치카페 한양대',
  },
  {
    place: '스타벅스 한양대점',
    location: '서울 성동구 왕십리로 225',
  },
  {
    place: '덕수고등학교',
    location: '서울특별시 성동구 왕십리로 199',
  },
  {
    place: '정문약국',
    location: '서울특별시 성동구 왕십리로 236-1 1층 정문약국',
  },
];

function Map() {
  const [mapLoaded, setMapLoaded] = useState<boolean>(false);
  const [cmap, setMap]: any = useState();
  const { userLocation, stationLocation } = useLocation();

  //지도 로드하기
  useEffect(() => {
    const mapScript = document.createElement('script');
    mapScript.async = true;
    mapScript.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAOMAP_KEY}&autoload=false&libraries=services`;
    document.head.appendChild(mapScript);
    mapScript.addEventListener('load', () => setMapLoaded(true));
  }, []);

  //지도 로드 후 근처 지하철역 찾기
  useEffect(() => {
    if (!mapLoaded) return;
    window.kakao.maps.load(async () => {
      const mapContainer = document.getElementById('map');
      const mapOption = {
        center: userLocation, // 지도의 중심좌표
        level: 3, // 지도의 확대 레벨
      };
      const map = await new window.kakao.maps.Map(mapContainer, mapOption);
      setMap(map);
    });
  }, [mapLoaded]);

  //근처 지하철역으로 중심좌표 이동 및 마커 표시
  useEffect(() => {
    if (cmap) {
      cmap.setCenter(stationLocation);

      //위치마다 마커를 생성합니다
      for (let i = 0; i < dummy.length; i++) {
        const imageSize = new window.kakao.maps.Size(35, 35);

        const markerImage = new window.kakao.maps.MarkerImage(
          'http://127.0.0.1:5500/src/assets/icons/marker.svg',
          imageSize,
        );
        const geocoder = new window.kakao.maps.services.Geocoder();

        // 주소로 좌표를 검색합니다
        geocoder.addressSearch(
          dummy[i].location,
          (result: Array<PlacePosition>, status: string) => {
            // 정상적으로 검색이 완료됐으면
            if (status === window.kakao.maps.services.Status.OK) {
              const coords = new window.kakao.maps.LatLng(
                result[0].y,
                result[0].x,
              );

              new window.kakao.maps.Marker({
                map: cmap,
                position: coords,
                title: dummy[i].place,
                image: markerImage,
              });
            }
          },
        );
      }
    }
  }, [stationLocation]);

  const onCenter = () => {
    if (cmap) {
      cmap.setCenter(stationLocation);
    }
  };

  return (
    <div className="relative -ml-4 -mr-4 h-[600px] w-screen overflow-hidden ">
      <div
        id="map"
        className="relative z-0 w-full h-full overflow-hidden "
      ></div>
      <div
        className="z-1 absolute left-[85%] top-[16px] flex h-[40px] w-[40px] items-center justify-center rounded-lg bg-white drop-shadow-lg"
        onClick={() => onCenter()}
      >
        <Image priority={true} src={centerBtn} alt="center button" />
      </div>
    </div>
  );
}

export default Map;
