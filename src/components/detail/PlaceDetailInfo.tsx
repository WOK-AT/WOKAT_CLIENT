import React, { useRef } from 'react';
import DetailNavigator from './DetailNavigator';
import FacilityInformation from './placeDetailNav/FacilityInformation';
import OperatingTime from './placeDetailNav/OperatingTime';
import PlaceIntroduce from './placeDetailNav/PlaceIntroduce';
import PlaceLocation from './placeDetailNav/PlaceLocation';

function PlaceDetailInfo() {
  const scrollRef = useRef<HTMLDivElement[]>([]);

  return (
    <main>
      <DetailNavigator scrollRef={scrollRef} />
      <PlaceIntroduce ref={scrollRef} />
      <OperatingTime ref={scrollRef} />
      <FacilityInformation ref={scrollRef} />
      <PlaceLocation ref={scrollRef} />
    </main>
  );
}

export default PlaceDetailInfo;
