import React from 'react';
import placeIntroduce from '@/assets/icons/placeIntroduce.svg';
import DetailInformationTitle from '@/components/common/detail/DetailInformationTitle';
import { PlaceDetail } from '@/services/detail/types';

function PlaceIntroduce({ introduce }: Pick<PlaceDetail, 'introduce'>) {
  return (
    <section id="nav-0" className="mb-9 scroll-mt-[36px]">
      <DetailInformationTitle icon={placeIntroduce} title="공간 소개" />
      {introduce &&
        introduce.split('\n').map((line: string, index: number) => {
          return (
            <p
              key={index}
              className="break-keep text-system4 font-system4 text-GRAY_600"
            >
              {line}
            </p>
          );
        })}
    </section>
  );
}

export default PlaceIntroduce;
