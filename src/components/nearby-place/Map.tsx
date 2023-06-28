import React, { useState, useEffect, useContext } from 'react';
import Image from 'next/image';
import centerBtn from '@/assets/icons/center_button.svg';
import { usePlaceList } from '@/hooks/queries/usePlaceList';
import { useRouter } from 'next/router';
import { NavigationContext } from '@/context/NavigationContext';

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
  onChange: (station: string) => void;
  stationName: string;
}

function Map(props: MapProps) {
  const { onChange, stationName } = props;
  const [cmap, setMap]: any = useState();
  const [cposition, setPosition] = useState();
  const [markers, setMarkers]: any = useState([]);
  const [overlays, setOverlays]: any = useState([]);

  const station =
    stationName.charAt(stationName.length - 1) === '역'
      ? stationName.substring(0, stationName.length - 1)
      : stationName;

  const { navType } = useContext(NavigationContext);
  const { data: placeList } = usePlaceList({ station, navType });
  const router = useRouter();
  const stationQuery = router.query.station as string[];
  let selectedMarker: any = null;
  let selectedCustomOverlay: any = null;

  const getOverlayContent = (placeName: string) => {
    const customOverlayContent = `
            <article  style="color : #576981;text-shadow: -0.5px 0 white, 0 0.5px white, 0.5px 0 white, 0 -0.5px white; font-family: 'Pretendard'; font-style: normal;
            font-weight: 600;
            font-size: 13px;
            line-height: 16px;
            text-align: center;"
            >${placeName}</article>`;
    return customOverlayContent;
  };

  //주변 지하철 역 찾고 지도 로드하기
  useEffect(() => {
    const mapScript = document.createElement('script');
    mapScript.async = false;
    mapScript.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAOMAP_KEY}&autoload=false&libraries=services`;
    document.head.appendChild(mapScript);

    const handleScriptLoad = () => {
      window.kakao.maps.load(async () => {
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(async (position) => {
            const lat = position.coords.latitude; // 위도
            const lon = position.coords.longitude; // 경도
            const locPosition = new window.kakao.maps.LatLng(lat, lon);

            const mapContainer = document.getElementById('map');
            const mapOption = {
              center: locPosition, // 지도의 중심좌표
              level: 6, // 지도의 확대 레벨
            };
            const map = await new window.kakao.maps.Map(
              mapContainer,
              mapOption,
            );
            setMap(map);

            //근처 지하철역 찾기
            if (stationQuery !== undefined && stationQuery[0] !== '') {
              const places = new window.kakao.maps.services.Places();
              const callback = (result: any, status: any) => {
                if (status === window.kakao.maps.services.Status.OK) {
                  setPosition(
                    new window.kakao.maps.LatLng(result[0].y, result[0].x),
                  );
                  onChange(result[0].place_name.split(' ')[0]);
                }
              };

              places.keywordSearch(stationQuery, callback);
              if (cmap) {
                cmap.panTo(cposition);
              }
            } else {
              const places = new window.kakao.maps.services.Places();

              const callback = (result: any, status: any) => {
                if (status === window.kakao.maps.services.Status.OK) {
                  setPosition(
                    new window.kakao.maps.LatLng(result[0].y, result[0].x),
                  );
                  onChange(result[0].place_name.split(' ')[0]);
                } else {
                  setPosition(locPosition);
                  onChange('역없음');
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
                cmap.setCenter(cposition);
              }
            }
          });
        } else {
          alert('주변 장소 찾기에 실패했어요');
        }
      });
    };
    mapScript.addEventListener('load', handleScriptLoad);
    return () => {
      if (location) mapScript.removeEventListener('load', handleScriptLoad);
      document.head.removeChild(mapScript);
    };
  }, []);

  //근처 지하철역으로 중심좌표 이동 및 마커 표시
  useEffect(() => {
    //저번에 찍혔던 마커와 오버레이는 모두 삭제하고 새로운 마커와 오버레이를 찍습니다
    for (let i = 0; i < markers.length; i++) {
      markers[i].setMap(null);
    }

    for (let i = 0; i < overlays.length; i++) {
      overlays[i].setMap(null);
    }

    if (!cmap) return;

    if (cmap !== undefined) {
      cmap.panTo(cposition);

      //위치마다 마커를 생성합니다
      for (let i = 0; i < placeList.length; i++) {
        const markerImageUrl =
          'https://wokat-default-image.s3.ap-northeast-2.amazonaws.com/default-mapMarker.png';
        const normalMarkerImage = new window.kakao.maps.MarkerImage(
          markerImageUrl,
          new window.kakao.maps.Size(35, 50),
        );
        const clickMarkerImage = new window.kakao.maps.MarkerImage(
          markerImageUrl,
          new window.kakao.maps.Size(44, 62),
        );
        const geocoder = new window.kakao.maps.services.Geocoder();
        // 주소로 좌표를 검색합니다

        let placeLocation = placeList[i].location;

        if (placeList[i].location.indexOf('(') !== -1) {
          placeLocation = placeList[i].location.slice(
            0,
            placeList[i].location.indexOf('('),
          );
        }

        geocoder.addressSearch(
          placeLocation,
          (result: Array<PlacePosition>, status: string) => {
            // 정상적으로 검색이 완료됐으면
            if (status === window.kakao.maps.services.Status.OK) {
              const coords = new window.kakao.maps.LatLng(
                result[0].y,
                result[0].x,
              );

              const marker = new window.kakao.maps.Marker({
                map: cmap,
                position: coords,
                image: normalMarkerImage,
              });

              markers.push(marker);

              const customOverlayContent = getOverlayContent(
                placeList[i].place,
              );
              const customOverlay = new window.kakao.maps.CustomOverlay({
                position: coords,
                content: customOverlayContent,
                yAnchor: -0.2,
              });

              customOverlay.setMap(cmap);

              overlays.push(customOverlay);

              window.kakao.maps.event.addListener(marker, 'click', () => {
                // 클릭된 마커가 없고, click 마커가 클릭된 마커가 아니면
                // 마커의 이미지를 클릭 이미지로 변경합니다
                if (!selectedMarker || selectedMarker !== marker) {
                  // 클릭된 마커 객체가 null이 아니면
                  // 클릭된 마커의 이미지를 기본 이미지로 변경하고
                  // 커스텀 오버레이도 다시 회색으로 변경합니다
                  if (!!selectedMarker && !!selectedCustomOverlay) {
                    selectedMarker.setImage(normalMarkerImage);

                    const oriOverlayContent = getOverlayContent(
                      selectedCustomOverlay.a.innerText,
                    );

                    selectedCustomOverlay.a.innerHTML = oriOverlayContent;
                  }
                }

                marker.setImage(clickMarkerImage);

                const newOverlayContent = `
              <article style="color:#0066FF; text-shadow: -0.5px 0 white, 0 0.5px white, 0.5px 0 white, 0 -0.5px white; font-family: 'Pretendard';
              font-style: normal;
              font-weight: 700;
              font-size: 14px;
              line-height: 150%;
              text-align: center;
              letter-spacing: -0.02em;">${placeList[i].place}</article>`;

                customOverlay.a.innerHTML = newOverlayContent;
                // 클릭된 마커와 커스텀오버레이를 현재 클릭된 마커 객체/클릭된 오버레이 객체로 설정합니다
                selectedMarker = marker;
                selectedCustomOverlay = customOverlay;
              });
            }
          },
        );
      }
    }
  }, [cposition, placeList]);

  const onCenter = () => {
    if (cmap) {
      cmap.panTo(cposition);
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
