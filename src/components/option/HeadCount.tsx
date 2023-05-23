import Image from 'next/image';
import increase from '@/assets/icons/increase.svg';
import decrease from '@/assets/icons/decrease.svg';
import { useOption } from '@/hooks/useOption';

function HeadCount() {
  const { headCount, modifyHeadCount } = useOption();

  return (
    <section className="flex-col">
      <h1 className="mb-4 font-system3_bold text-system3_bold text-GRAY_800">
        이용 인원
      </h1>

      <div className="flex items-center justify-between">
        <p className="font-system4_medium text-system4_medium text-GRAY_600">
          인원 수
        </p>

        <div className="flex">
          <Image
            src={decrease}
            alt="decrease person count"
            onClick={() => modifyHeadCount('decrease')}
            className="cursor-pointer"
          />
          <span className="w-[50px] text-center font-system4_medium text-system4_medium text-GRAY_900">
            {headCount}
          </span>

          <Image
            src={increase}
            alt="increase person count"
            onClick={() => modifyHeadCount('increase')}
            className="cursor-pointer"
          />
        </div>
      </div>
    </section>
  );
}

export default HeadCount;
