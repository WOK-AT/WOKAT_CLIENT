import React from 'react';
import DetailNavigator from './DetailNavigator';
import FacilityInformation from './placeDetailNav/FacilityInformation';
import OperatingTime from './placeDetailNav/OperatingTime';
import PlaceIntroduce from './placeDetailNav/PlaceIntroduce';
import PlaceLocation from './placeDetailNav/PlaceLocation';
import BookingButton from './placeDetailNav/BookingButton';
import { useGetPlaceDetail } from '@/hooks/queries/useDetail';
import { useRouter } from 'next/router';
import { PlaceDetail } from '@/services/detail/types';

function PlaceDetailInfo() {
  const router = useRouter();
  const id = router.query.id as string;
  const station = router.query.station as string;
  const { list } = useGetPlaceDetail(id, station);
  if (!list) return <h1></h1>;

  const {
    placeName,
    category,
    introduce,
    information,
    operationHours,
    count,
    location,
    bookingURL,
  }: Omit<PlaceDetail, 'id' | 'distance' | 'hashtags' | 'imageURLs'> =
    list?.data;

  return (
    <main>
      <DetailNavigator />
      <PlaceIntroduce introduce={introduce} />
      <OperatingTime operationHours={operationHours} />
      <FacilityInformation
        category={category}
        information={information}
        maxPeopleCount={count}
      />
      <PlaceLocation
        category={category}
        placeName={placeName}
        location={location}
      />
      {category === '1' && <BookingButton bookingURL={bookingURL} />}
    </main>
  );
}

export default PlaceDetailInfo;
