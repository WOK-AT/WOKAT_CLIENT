import Image from 'next/image';
import Layout from '@/components/common/Layout';
import { useRouter } from 'next/router';
import profile from '@/assets/icons/profile.svg';
import increase from '@/assets/icons/increase.svg';
import decrease from '@/assets/icons/decrease.svg';
import { useReservationForm } from '@/hooks/useReservationForm';
import Calendar from '@/components/list/Calendar';

function Option() {
  const router = useRouter();
  const title = router.query.title as string;
  const { person, formatDate, modifyPersonCount } = useReservationForm();

  return (
    <Layout title={`${title}역`} right={profile}>
      <section>
        <Calendar />
      </section>

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
              onClick={() => modifyPersonCount('decrease')}
              className="cursor-pointer"
            />
            <span className="w-[50px] text-center font-system4_medium text-system4_medium text-GRAY_900">
              {person}
            </span>

            <Image
              src={increase}
              alt="increase person count"
              onClick={() => modifyPersonCount('increase')}
              className="cursor-pointer"
            />
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default Option;
