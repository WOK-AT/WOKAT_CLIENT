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
    </Layout>
  );
}

export default Option;
