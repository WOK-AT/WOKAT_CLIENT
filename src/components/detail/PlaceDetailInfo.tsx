import React from 'react';
import DetailNavigator from './DetailNavigator';
import FacilityInformation from './placeDetailNav/FacilityInformation';
import OperatingTime from './placeDetailNav/OperatingTime';
import PlaceIntroduce from './placeDetailNav/PlaceIntroduce';
import PlaceLocation from './placeDetailNav/PlaceLocation';
import BookingButton from './placeDetailNav/BookingButton';
import { OperationHours } from '@/types/operationHours';
import { Information } from '@/types/information';

interface PlaceDetailInfoProps {
  category: number;
  introduce: string;
  information: Information[];
  operationHours: OperationHours[];
  maxPeopleCount: string;
}

function PlaceDetailInfo({
  category,
  introduce,
  information,
  operationHours,
  maxPeopleCount,
}: PlaceDetailInfoProps) {
  return (
    <main>
      <DetailNavigator />
      <PlaceIntroduce introduce={introduce} />
      <OperatingTime operationHours={operationHours} />
      <FacilityInformation
        information={information}
        maxPeopleCount={maxPeopleCount}
      />
      <PlaceLocation />
      {category === 1 && <BookingButton />}
    </main>
  );
}

export default PlaceDetailInfo;
