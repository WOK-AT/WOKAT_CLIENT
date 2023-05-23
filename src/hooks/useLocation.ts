import { useEffect, useState } from 'react';

const useLocation = () => {
  const [userLocation, setUserLocation] = useState();
  const [stationName, setStationName] = useState();
  const [stationLocation, setStationLocation] = useState();

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(async (position) => {
        const lat = position.coords.latitude; // 위도
        const lon = position.coords.longitude; // 경도
        const locPosition = new window.kakao.maps.LatLng(lat, lon);
        setUserLocation(locPosition);

        const places = new window.kakao.maps.services.Places();

        const callback = (result: any, status: any) => {
          if (status === window.kakao.maps.services.Status.OK) {
            setStationLocation(
              new window.kakao.maps.LatLng(result[0].y, result[0].x),
            );
            setStationName(result[0].place_name.split(' ')[0]);
          }
        };
        const options = {
          location: locPosition,
          radius: 10000,
          sort: window.kakao.maps.services.SortBy.DISTANCE,
          size: 1,
        };

        await places.keywordSearch('지하철역', callback, options);
      });
    } else {
      alert('위치 정보를 받아오는데 실패했습니다');
    }
  }, []);

  return { userLocation, stationName, stationLocation };
};

export default useLocation;
