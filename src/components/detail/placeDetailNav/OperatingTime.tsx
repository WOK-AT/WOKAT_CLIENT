import operatingTime from '@/assets/icons/operatingTime.svg';
import Image from 'next/image';

function OperatingTime() {
  return (
    <section className="mb-9">
      <article className=" mb-3.5 flex flex-row items-center font-system3_bold text-system3_bold text-GRAY_600">
        <Image src={operatingTime} alt="operatingTime icon" className="mr-2" />
        <h1>운영 시간</h1>
      </article>
      <article className="rounded-[10px] bg-GRAY_50 px-4 py-5">
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
      </article>
    </section>
  );
}

export default OperatingTime;
