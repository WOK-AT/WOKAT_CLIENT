import React, { useState, useEffect } from 'react';

declare global {
  interface Window {
    kakao: any;
  }
}

function Map() {
  useEffect(() => {
    const mapScript = document.createElement('script');

    mapScript.async = true;
    mapScript.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAOMAP_KEY}&autoload=false&libraries=services`;

    document.head.appendChild(mapScript);

    const onLoadKakaoMap = () => {
      window.kakao.maps.load(() => {
        const mapContainer = document.getElementById('map');

        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition((position) => {
            const lat = position.coords.latitude; // 위도
            const lon = position.coords.longitude; // 경도

            const locPosition = new window.kakao.maps.LatLng(lat, lon); // 마커가 표시될 위치를 geolocation으로 얻어온 좌표로 생성합니다
            const mapOption = {
              center: locPosition, // 지도의 중심좌표
              level: 3, // 지도의 확대 레벨
            };
            const map = new window.kakao.maps.Map(mapContainer, mapOption);

            const markerImage = new window.kakao.maps.MarkerImage(
              'http://127.0.0.1:5500/src/assets/icons/marker.svg',
              new window.kakao.maps.Size(30, 35),
            );

            // 마커를 생성합니다
            const markers = new window.kakao.maps.Marker({
              position: locPosition,
              image: markerImage,
            });

            const places = new window.kakao.maps.services.Places();

            const callback = (result, status) => {
              if (status === window.kakao.maps.services.Status.OK) {
                console.log(result[0].place_name);
              }
            };
            const options = {
              location: locPosition,
              radius: 10000,
              sort: window.kakao.maps.services.SortBy.DISTANCE,
              size: 1,
            };

            places.keywordSearch('지하철역', callback, options);

            // 마커가 지도 위에 표시되도록 설정합니다
            markers.setMap(map);
            map.setCenter(locPosition);
          });
        } else {
          console.log('위치 정보 못 받아옴..');
        }
      });
    };
    mapScript.addEventListener('load', onLoadKakaoMap);
  }, []);

  return (
    <>
      <div id="map" className="mx-0 h-[500px] w-[375px]"></div>
    </>
  );
}

export default Map;
