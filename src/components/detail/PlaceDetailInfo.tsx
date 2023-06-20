import React from 'react';
import DetailNavigator from './DetailNavigator';
import FacilityInformation from './placeDetailNav/FacilityInformation';
import OperatingTime from './placeDetailNav/OperatingTime';
import PlaceIntroduce from './placeDetailNav/PlaceIntroduce';
import PlaceLocation from './placeDetailNav/PlaceLocation';
import BookingButton from './placeDetailNav/BookingButton';
import { OperationHours } from '@/types/operationHours';
import { Information } from '@/types/information';
import { useGetPlaceDetail } from '@/hooks/queries/useDetail';
import { useRouter } from 'next/router';

interface PlaceDetailInfo {
  place: string;
  category: string;
  introduce: string[];
  information: Information;
  operationHours: OperationHours;
  maxPeopleCount: string;
  location: string;
  bookingURL: string;
}

function PlaceDetailInfo() {
  const router = useRouter();
  const placeId = router.query.id as string;
  const { list } = useGetPlaceDetail(placeId);
  if (!list) return <h1></h1>;
  const {
    place,
    category,
    introduce,
    information,
    operationHours,
    maxPeopleCount,
    location,
    bookingURL,
  }: PlaceDetailInfo = list?.data;

  return (
    <main>
      <DetailNavigator />
      <PlaceIntroduce introduce={introduce} />
      <OperatingTime operationHours={operationHours} />
      <FacilityInformation
        information={information}
        maxPeopleCount={maxPeopleCount}
      />
      <PlaceLocation place={place} location={location} />
      {category === '1' && <BookingButton bookingURL={bookingURL} />}
    </main>
  );
}

export default PlaceDetailInfo;
