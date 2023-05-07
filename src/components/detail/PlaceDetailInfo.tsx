import React, { useRef } from 'react';
import DetailNavigator from './DetailNavigator';
import FacilityInformation from './placeDetailNav/FacilityInformation';
import OperatingTime from './placeDetailNav/OperatingTime';
import PlaceIntroduce from './placeDetailNav/PlaceIntroduce';
import PlaceLocation from './placeDetailNav/PlaceLocation';

function PlaceDetailInfo() {
  const scrollRef = useRef([]);

  return (
    <main>
      <DetailNavigator scrollRef={scrollRef} />
      <PlaceIntroduce />
      <OperatingTime />
      <FacilityInformation />
      <PlaceLocation />
    </main>
  );
}

export default PlaceDetailInfo;
