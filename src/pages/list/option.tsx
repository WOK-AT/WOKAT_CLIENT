import Layout from '@/components/common/Layout';
import profile from '@/assets/icons/profile.svg';
import Calendar from '@/components/option/Calendar';
import HeadCount from '@/components/option/HeadCount';
import { useRouter } from 'next/router';

export interface DateType {
  year: number;
  month: number;
  day: number;
}

function Option() {
  const router = useRouter();
  const title = router.query.title as string;

  return (
    <Layout title={`${title}역`} right={profile}>
      <Calendar />
      <HeadCount />

      <button
        onClick={() => router.back()}
        className="mb-10 mt-10 w-full rounded-full bg-BLUE_500 py-[18px] text-center font-system4_bold text-system4_bold text-white"
      >
        확인
      </button>
    </Layout>
  );
}

export default Option;
