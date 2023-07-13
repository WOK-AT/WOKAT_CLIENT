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
  category: string;
  information: Information;
  maxPeopleCount: string;
}

function FacilityInformation({
  category,
  information,
  maxPeopleCount,
}: FacilityInformationProps) {
  let wifiId: string[] = ['-'];
  let wifiPW: string[] = ['-'];

  if (information['wi-fi']) {
    wifiId = information['wi-fi'].ID;
    wifiPW = information['wi-fi'].PW;
  }

  return (
    <section id="nav-2" className="scroll-mt-[50px]">
      <DetailInformationTitle icon={facilityInformation} title="시설 정보" />
      {information?.contact[0] !== '-' && information?.homepageURL !== '-' && (
        <DetailInformationTextBox>
          <article className="flex flex-col items-start">
            {information?.contact[0] !== '-' && (
              <div className=" flex flex-row">
                <Image src={phone} alt="phone icon" className="mr-[18px]" />
                <h2 className="mr-4 text-system4 font-system4 text-GRAY_400">
                  {information?.contact}
                </h2>
              </div>
            )}
            {information?.homepageURL !== '-' && (
              <div className="mt-[18px] flex flex-row">
                <Image
                  src={internet}
                  alt="internet icon"
                  className="mr-[18px]"
                />
                <h2
                  className="w-full break-all text-system4 font-system4 text-GRAY_400"
                  onClick={() => window.open(information?.homepageURL)}
                >
                  {information?.homepageURL}
                </h2>
              </div>
            )}
          </article>
        </DetailInformationTextBox>
      )}
      {category === '2' && wifiId[0] !== '-' && (
        <DetailInformationTextBox>
          <article className="flex flex-row">
            <Image src={wifi} alt="wifi icon" className="mr-[18px]" />
            <article>
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
            </article>
          </article>
        </DetailInformationTextBox>
      )}
      <article className="mb-[10px] rounded-[10px] bg-GRAY_50 px-4 py-5">
        {information?.socket !== '' && (
          <Facility icon={elec} title={'콘센트'} status={information?.socket} />
        )}
        {information?.parking !== '-' && (
          <Facility
            icon={parking}
            title={'주차 공간'}
            status={information?.parking}
          />
        )}
        {category === '1' && information?.['hdmi-screen'] !== '-' && (
          <Facility
            icon={hdmi}
            title={'HDMI / 스크린 여부'}
            status={information?.['hdmi-screen']}
          />
        )}
        {category !== '2' && (
          <Facility
            icon={person}
            title={'최대 수용 인원'}
            status={maxPeopleCount}
          />
        )}
      </article>
    </section>
  );
}

export default FacilityInformation;

interface FacilityProps {
  icon: string;
  title: string;
  status: string;
}

function Facility({ icon, title, status }: FacilityProps) {
  return (
    <article className="mb-[20px] flex w-full flex-row items-center justify-between last:mb-0">
      <div className="flex flex-row items-center">
        <Image src={icon} alt="info icon" className="mr-3" />
        <h2 className="text-system4_medium font-system4_medium text-GRAY_600">
          {title}
        </h2>
      </div>
      <p className="flex flex-row justify-end text-system4 font-system4 text-GRAY_400">
        {!status ? '-' : status}
      </p>
    </article>
  );
}
