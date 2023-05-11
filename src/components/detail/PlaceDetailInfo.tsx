import React from 'react';
import DetailNavigator from './DetailNavigator';
import FacilityInformation from './placeDetailNav/FacilityInformation';
import OperatingTime from './placeDetailNav/OperatingTime';
import PlaceIntroduce from './placeDetailNav/PlaceIntroduce';
import PlaceLocation from './placeDetailNav/PlaceLocation';

function PlaceDetailInfo() {
  return (
    <main>
      <DetailNavigator />
      <PlaceIntroduce />
      <OperatingTime />
      <FacilityInformation />
      <PlaceLocation />
    </main>
  );
}

export default PlaceDetailInfo;
