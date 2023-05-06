import facilityInformation from '@/assets/icons/facilityInformation.svg';
import phone from '@/assets/icons/phone.svg';
import internet from '@/assets/icons/internet.svg';
import elec from '@/assets/icons/elec.svg';
import parking from '@/assets/icons/parking.svg';
import hdmi from '@/assets/icons/hdmi.svg';
import person from '@/assets/icons/person.svg';
import wifi from '@/assets/icons/wifi.svg';

import Image from 'next/image';

const FACILITY_LIST = [
  { icon: elec, title: '콘센트', status: '있음' },
  { icon: parking, title: '주차 공간 여부', status: '있음' },
  { icon: hdmi, title: 'HDMI / 스크린 여부', status: '없음' },
  { icon: person, title: '최대 수용 인원', status: '최대 10명' },
];

function FacilityInformation() {
  return (
    <section className="mb-9">
      <article className=" mb-3.5 flex flex-row items-center font-system3_bold text-system3_bold text-GRAY_600">
        <Image
          src={facilityInformation}
          alt="facilityInformation icon"
          className="mr-2"
        />
        <h1>시설 정보</h1>
      </article>
      <article className="flex-column mb-3 flex rounded-[10px] bg-GRAY_50 px-4 py-5 ">
        <div className="mb-1.5 flex flex-col items-start">
          <div className="mb-3 flex flex-row">
            <Image src={phone} alt="phone icon" className="mr-4" />
            <h2 className="mr-4 font-system4 text-system4 text-GRAY_400">
              031-235-4826
            </h2>
          </div>
          <div className="flex flex-row">
            <Image src={internet} alt="internet icon" className="mr-4" />
            <h2 className="mr-4 font-system4 text-system4 text-GRAY_400">
              www.wokat.com
            </h2>
          </div>
        </div>
      </article>
      <article className="mb-3 flex flex-row rounded-[10px] bg-GRAY_50 px-4 py-5">
        <Image src={wifi} alt="wifi icon" className="mr-4" />
        <div>
          <div className="mb-1.5 flex flex-row items-start">
            <h2 className="mr-2 w-[40px] font-system4_bold text-system4_bold text-GRAY_600">
              ID :
            </h2>
            <p className="font-system4 text-system4 text-GRAY_600">
              KT_GIGA_2G_Wave3_B829
            </p>
          </div>
          <div className="mb-1.5 flex flex-row items-start">
            <h2 className="mr-2 w-[40px] font-system4_bold text-system4_bold text-GRAY_600">
              PW :
            </h2>
            <p className="font-system4 text-system4 text-GRAY_600">
              234475869003
            </p>
          </div>
        </div>
      </article>
      <article className="mb-3 flex flex-col  rounded-[10px] bg-GRAY_50 px-4 pb-1 pt-5">
        {FACILITY_LIST.map((item, index) => {
          return (
            <div
              className="mb-4 flex w-full flex-row items-center justify-between"
              key={index}
            >
              <div className="flex flex-row items-center">
                <Image src={item.icon} alt="info icon" className="mr-3" />
                <h2 className="font-system4_medium text-system4_medium text-GRAY_600">
                  {item.title}
                </h2>
              </div>
              <p className="font-system4 text-system4 text-GRAY_400">
                {item.status}
              </p>
            </div>
          );
        })}
      </article>
    </section>
  );
}

export default FacilityInformation;
