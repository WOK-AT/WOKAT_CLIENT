import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import centerBtn from '@/assets/icons/center_button.svg';

declare global {
  interface Window {
    kakao: any;
  }
}

function Map() {
  const [mapLoaded, setMapLoaded] = useState<boolean>(false);
  const [cmap, setMap] = useState();
  const [cposition, setPosition] = useState();

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
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(async (position) => {
          const lat = position.coords.latitude; // 위도
          const lon = position.coords.longitude; // 경도
          const locPosition = new window.kakao.maps.LatLng(lat, lon);

          const mapContainer = document.getElementById('map');
          const mapOption = {
            center: locPosition, // 지도의 중심좌표
            level: 3, // 지도의 확대 레벨
          };
          const map = await new window.kakao.maps.Map(mapContainer, mapOption);
          setMap(map);

          const places = new window.kakao.maps.services.Places();

          const callback = (result: any, status: any) => {
            if (status === window.kakao.maps.services.Status.OK) {
              setPosition(
                new window.kakao.maps.LatLng(result[0].y, result[0].x),
              );
            }
          };
          const options = {
            location: locPosition,
            radius: 10000,
            sort: window.kakao.maps.services.SortBy.DISTANCE,
            size: 1,
          };

          await places.keywordSearch('지하철역', callback, options);
          if (cmap) {
            console.log('중심잡기');
            cmap.setCenter(cposition);
          }
        });
      } else {
        console.log('위치 정보 못 받아옴..');
      }
    });
  }, [mapLoaded]);

  //근처 지하철역으로 중심좌표 이동 및 마커 표시
  useEffect(() => {
    if (cmap) {
      cmap.setCenter(cposition);

      const markerImage = new window.kakao.maps.MarkerImage(
        'http://127.0.0.1:5500/src/assets/icons/marker.svg',
        new window.kakao.maps.Size(30, 35),
      );

      // 마커를 생성합니다
      const markers = new window.kakao.maps.Marker({
        position: cposition,
        image: markerImage,
      });

      //마커가 지도 위에 표시되도록 설정합니다
      markers.setMap(cmap);
    }
  }, [cposition]);

  const onCenter = () => {
    if (cmap) {
      cmap.setCenter(cposition);
    }
  };

  return (
    <div className="relative -ml-4 h-[500px] w-screen overflow-hidden">
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
