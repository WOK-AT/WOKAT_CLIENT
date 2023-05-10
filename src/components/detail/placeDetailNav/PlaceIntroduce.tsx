import React from 'react';
import placeIntroduce from '@/assets/icons/placeIntroduce.svg';
import DetailInformationTitle from '@/components/common/detail/DetailInformationTitle';

function PlaceIntroduce() {
  return (
    <section id="nav-0" className="mb-9 scroll-mt-[50px]">
      <DetailInformationTitle icon={placeIntroduce} title="공간 소개" />
      <p className="font-system4 text-system4 text-GRAY_600">
        지방자치단체는 주민의 복리에 관한 사무를 처리하고 재산을 관리하며,
        법령의 범위안에서 자치에 관한 규정을 제정할 수 있다. 모든 국민은
        행위시의 법률에 의하여 범죄를 구성하지 아니하는 행위로 소추되지
        아니하며, 동일한 범죄에 대하여 거듭 처벌받지 아니한다.
      </p>
    </section>
  );
}

export default PlaceIntroduce;
