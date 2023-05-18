import Layout from '@/components/common/Layout';
import { useRouter } from 'next/router';
import profile from '@/assets/icons/profile.svg';
import { useReservationForm } from '@/hooks/useReservationForm';

function Calendar() {
  const router = useRouter();
  const title = router.query.title as string;
  const { date, person, modifyDate, modifyPersonCount } = useReservationForm();

  return (
    <Layout title={`${title}역`} right={profile}>
      <section>{/* calendar */}</section>

      <section>
        <h1>이용 인원</h1>

        <div>
          <p>인원 수</p>

          <div>
            <button onClick={() => modifyPersonCount('decrease')}>-</button>
            <span>{person}</span>
            <button onClick={() => modifyPersonCount('increase')}>+</button>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default Calendar;
