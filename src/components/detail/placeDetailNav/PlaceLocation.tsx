import React from 'react';
import placeLocation from '@/assets/icons/placeLocation.svg';
import DetailInformationTitle from '@/components/common/detail/DetailInformationTitle';

function PlaceLocation() {
  return (
    <section id="nav-3" className="scroll-mt-[50px]">
      <DetailInformationTitle icon={placeLocation} title="공간 위치" />
      <div className="h-[300px] bg-BLUE_100">지도가 들어갈 부분입니다.</div>
    </section>
  );
}

export default PlaceLocation;
