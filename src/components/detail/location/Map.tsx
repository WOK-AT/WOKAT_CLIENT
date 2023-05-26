import React, { useState, useEffect } from 'react';
import centerButton from '@/assets/icons/center_button.svg';
import Image from 'next/image';

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
  place: string;
  location: string;
}

function Map({ place, location }: MapProps) {
  const [mapLoaded, setMapLoaded] = useState<boolean>(false);
  const [cmap, setMap]: any = useState();

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
            setMap(map);

            // 공간 정보 마커 표시
            const imageSize = new window.kakao.maps.Size(130, 130);

            const markerImage = new window.kakao.maps.MarkerImage(
              'https://wokat-default-image.s3.ap-northeast-2.amazonaws.com/default-mapMarker.svg',
              imageSize,
            );

            // 결과값으로 받은 위치를 마커로 표시합니다
            new window.kakao.maps.Marker({
              map: map,
              position: coords,
              image: markerImage,
            });

            // HTML 문자열 또는 Dom Element의 커스텀 오버레이에 표시할 내용입니다
            const customOverlayContent = `
            <article style="color:#0066FF; text-shadow: -0.5px 0 white, 0 0.5px white, 0.5px 0 white, 0 -0.5px white; font-family: 'Pretendard';
            font-style: normal;
            font-weight: 700;
            font-size: 14px;
            line-height: 150%;
            text-align: center;
            letter-spacing: -0.02em;">${place}</article>`;
            const customOverlay = new window.kakao.maps.CustomOverlay({
              position: coords,
              content: customOverlayContent,
            });

            customOverlay.setMap(map);
          }
        },
      );
    });
  }, [mapLoaded]);

  const onCenter = () => {
    if (cmap) {
      window.kakao.maps.load(async () => {
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(async (position) => {
            const lat = position.coords.latitude; // 위도
            const lon = position.coords.longitude; // 경도
            const locPosition = new window.kakao.maps.LatLng(lat, lon);

            cmap.setCenter(locPosition);
          });
        }
      });
    }
  };

  return (
    <div className="relative -ml-4 -mr-4 h-[90vh] w-screen overflow-hidden ">
      <article
        id="map"
        className="relative z-0 h-full w-full overflow-hidden "
      ></article>
      <button
        type="button"
        className="z-1 absolute bottom-[250px] left-[16px] flex h-[40px] w-[40px] items-center justify-center rounded-lg bg-white drop-shadow-lg"
        onClick={() => onCenter()}
      >
        <Image priority={true} src={centerButton} alt="center button" />
      </button>
    </div>
  );
}

export default Map;
