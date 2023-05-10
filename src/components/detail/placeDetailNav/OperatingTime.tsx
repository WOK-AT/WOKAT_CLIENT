import React from 'react';
import operatingTime from '@/assets/icons/operatingTime.svg';
import DetailInformationTitle from '@/components/common/detail/DetailInformationTitle';
import DetailInformationTextBox from '@/components/common/detail/DetailInformationTextBox';

function OperatingTime() {
  return (
    <section id="nav-1" className="mb-9 scroll-mt-[50px]">
      <DetailInformationTitle icon={operatingTime} title="운영 시간" />
      <DetailInformationTextBox>
        <div className="mb-1.5 flex flex-row items-start">
          <h2 className="mr-4  w-[60px] font-system4_bold text-system4_bold text-GRAY_600">
            영업 시간
          </h2>
          <div>
            <p className="font-system4 text-system4 text-GRAY_600">
              화~금 08:00 ~ 22:00
            </p>
            <p className="font-system4 text-system4 text-GRAY_600">
              토,일 09:00 ~ 18:00
            </p>
          </div>
        </div>
        <div className="flex flex-row items-start">
          <h2 className="mr-4  w-[60px] font-system4_bold text-system4_bold text-GRAY_600">
            휴무일
          </h2>
          <p className="font-system4 text-system4 text-GRAY_600">월요일</p>
        </div>
      </DetailInformationTextBox>
    </section>
  );
}

export default OperatingTime;
