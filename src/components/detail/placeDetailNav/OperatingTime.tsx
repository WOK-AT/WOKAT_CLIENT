import React from 'react';
import operatingTime from '@/assets/icons/operatingTime.svg';
import DetailInformationTitle from '@/components/common/detail/DetailInformationTitle';
import DetailInformationTextBox from '@/components/common/detail/DetailInformationTextBox';
import { OperationHours } from '@/types/operationHours';

interface OperatingTimeProps {
  operationHours: OperationHours;
}
function OperatingTime({ operationHours }: OperatingTimeProps) {
  return (
    <section id="nav-1" className="mb-9 scroll-mt-[50px]">
      <DetailInformationTitle icon={operatingTime} title="운영 시간" />
      <DetailInformationTextBox>
        <div className="mb-1.5 flex flex-row items-start">
          <h2 className="mr-4  w-[60px] font-system4_bold text-system4_bold text-GRAY_600">
            영업 시간
          </h2>
          <div>
            {operationHours &&
              Object.entries(operationHours.open).map(
                ([timeRange, day], index: number) => {
                  return (
                    <article
                      key={index}
                      className="flex flex-row font-system4 text-system4 text-GRAY_600"
                    >
                      <p className="mr-2">{day}</p>
                      {timeRange}
                    </article>
                  );
                },
              )}
          </div>
        </div>
        <div className="flex flex-row items-start">
          <h2 className="mr-4  w-[60px] font-system4_bold text-system4_bold text-GRAY_600">
            휴무일
          </h2>
          <p className="font-system4 text-system4 text-GRAY_600">
            {operationHours?.closed}
          </p>
        </div>
      </DetailInformationTextBox>
    </section>
  );
}

export default OperatingTime;
