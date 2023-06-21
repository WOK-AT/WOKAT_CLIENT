import React from 'react';
import facilityInformation from '@/assets/icons/facilityInformation.svg';
import DetailInformationTitle from '@/components/common/detail/DetailInformationTitle';
import DetailInformationTextBox from '@/components/common/detail/DetailInformationTextBox';
import phone from '@/assets/icons/phone.svg';
import internet from '@/assets/icons/internet.svg';
import elec from '@/assets/icons/elec.svg';
import parking from '@/assets/icons/parking.svg';
import hdmi from '@/assets/icons/hdmi.svg';
import person from '@/assets/icons/person.svg';
import wifi from '@/assets/icons/wifi.svg';
import Image from 'next/image';
import { Information } from '@/types/information';

interface FacilityInformationProps {
  information: Information;
  maxPeopleCount: string;
}

function FacilityInformation({
  information,
  maxPeopleCount,
}: FacilityInformationProps) {
  let wifiId: string[] = ['-'];
  let wifiPW: string[] = ['-'];

  if (information['wi-fi']) {
    wifiId = information['wi-fi'].ID;
    wifiPW = information['wi-fi'].PW;
  }

  const FACILITY_LIST = [
    { icon: elec, title: '콘센트', status: information?.socket },
    {
      icon: parking,
      title: '주차 공간 여부',
      status: information?.parking,
    },
    {
      icon: hdmi,
      title: 'HDMI / 스크린 여부',
      status: information?.['hdmi-screen'],
    },
    { icon: person, title: '최대 수용 인원', status: maxPeopleCount },
  ];

  return (
    <section id="nav-2" className="mb-9 scroll-mt-[50px]">
      <DetailInformationTitle icon={facilityInformation} title="시설 정보" />
      <DetailInformationTextBox>
        <div className="mb-1.5 flex flex-col items-start">
          <div className="mb-3 flex flex-row">
            <Image src={phone} alt="phone icon" className="mr-4" />
            <h2 className="mr-4 text-system4 font-system4 text-GRAY_400">
              {information?.contact}
            </h2>
          </div>
          <div className="flex flex-row">
            <Image src={internet} alt="internet icon" className="mr-4" />
            <h2
              className="mr-4 w-full break-all text-system4 font-system4 text-GRAY_400"
              onClick={() => window.open(information?.homepage)}
            >
              {information?.homepage}
            </h2>
          </div>
        </div>
      </DetailInformationTextBox>
      <DetailInformationTextBox>
        <div className="flex flex-row">
          <Image src={wifi} alt="wifi icon" className="mr-4" />
          <div>
            <div className="mb-1.5 flex flex-row items-start">
              <h2 className="mr-2 w-[40px] text-system4_bold font-system4_bold text-GRAY_600">
                ID :
              </h2>
              <div className="flex flex-col">
                {wifiId.map((value: string, index: number) => {
                  return (
                    <p
                      key={index}
                      className="text-system4 font-system4 text-GRAY_600"
                    >
                      {value}
                    </p>
                  );
                })}
              </div>
            </div>
            <div className="mb-1.5 flex flex-row items-start">
              <h2 className="mr-2 w-[40px] text-system4_bold font-system4_bold text-GRAY_600">
                PW :
              </h2>
              <div className="flex flex-col">
                {wifiPW.map((value: string, index: number) => {
                  return (
                    <p
                      key={index}
                      className="text-system4 font-system4 text-GRAY_600"
                    >
                      {value}
                    </p>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </DetailInformationTextBox>
      <DetailInformationTextBox>
        {FACILITY_LIST.map((item, index) => {
          return (
            <div
              className="mb-4 flex w-full flex-row items-center justify-between last:mb-0"
              key={index}
            >
              <div className="flex flex-row items-center">
                <Image src={item.icon} alt="info icon" className="mr-3" />
                <h2 className="text-system4_medium font-system4_medium text-GRAY_600">
                  {item.title}
                </h2>
              </div>
              <p className="flex flex-row justify-end text-system4 font-system4 text-GRAY_400">
                {item.status === null ? '-' : item.status}
              </p>
            </div>
          );
        })}
      </DetailInformationTextBox>
    </section>
  );
}

export default FacilityInformation;
