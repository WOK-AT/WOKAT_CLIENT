import React from 'react';
import placeIntroduce from '@/assets/icons/placeIntroduce.svg';
import DetailInformationTitle from '@/components/common/detail/DetailInformationTitle';

interface PlaceIntroduceProps {
  introduce: string;
}
function PlaceIntroduce({ introduce }: PlaceIntroduceProps) {
  return (
    <section id="nav-0" className="mb-9 scroll-mt-[50px]">
      <DetailInformationTitle icon={placeIntroduce} title="공간 소개" />
      <p className="break-keep font-system4 text-system4 text-GRAY_600">
        {introduce}
      </p>
    </section>
  );
}

export default PlaceIntroduce;
