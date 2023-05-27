import React, { useState, useEffect } from 'react';

declare global {
  interface Window {
    kakao: any;
  }
}

interface PlacePosition {
  x: string;
  y: string;
}

interface MapProps {
  location: string;
}

function Map({ location }: MapProps) {
  const [mapLoaded, setMapLoaded] = useState<boolean>(false);

  //지도 로드하기
  useEffect(() => {
    const mapScript = document.createElement('script');
    mapScript.async = true;
    mapScript.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAOMAP_KEY}&autoload=false&libraries=services`;
    document.head.appendChild(mapScript);
    mapScript.addEventListener('load', () => setMapLoaded(true));
  }, []);

  //지도 로드 및 마커 표시
  useEffect(() => {
    if (!mapLoaded) return;

    window.kakao.maps.load(async () => {
      const geocoder = new window.kakao.maps.services.Geocoder();
      // 주소로 좌표를 검색합니다
      geocoder.addressSearch(
        location,
        (result: Array<PlacePosition>, status: string) => {
          // 정상적으로 검색이 완료됐으면
          if (status === window.kakao.maps.services.Status.OK) {
            const coords = new window.kakao.maps.LatLng(
              result[0].y,
              result[0].x,
            );

            const locPosition = new window.kakao.maps.LatLng(
              coords.Ma,
              coords.La,
            );

            const mapContainer = document.getElementById('map');
            const mapOption = {
              center: locPosition, // 지도의 중심좌표
              level: 3, // 지도의 확대 레벨
            };
            const map = new window.kakao.maps.Map(mapContainer, mapOption);

            // 공간 정보 마커 표시
            const imageSize = new window.kakao.maps.Size(20, 30);

            const markerImage = new window.kakao.maps.MarkerImage(
              'https://wokat-default-image.s3.ap-northeast-2.amazonaws.com/default-mapMarker.png',
              imageSize,
            );

            // 결과값으로 받은 위치를 마커로 표시합니다
            const marker = new window.kakao.maps.Marker({
              map: map,
              position: coords,
              image: markerImage,
            });
          }
        },
      );
    });
  }, [mapLoaded]);

  return (
    <div className="relative h-[216px]  overflow-hidden rounded-t-[10px] ">
      <article
        id="map"
        className="relative z-0 h-full w-full overflow-hidden "
      ></article>
    </div>
  );
}

export default Map;
