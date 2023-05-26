import { useContext } from 'react';
import Image from 'next/image';
import Layout from '@/components/common/Layout';
import profile from '@/assets/icons/profile.svg';
import info from '@/assets/icons/info.svg';
import FAB from '@/components/list/FAB';
import ListFilter from '@/components/common/ListFilter';
import Navigation from '@/components/common/Navigation';
import ReservationOption from '@/components/list/ReservationOption';
import PlaceList from './PlaceList';
import { useRouter } from 'next/router';
import { COLOR } from '@/styles/color';
import { OptionContext } from '@/context/OptionContext';
import { NavigationContext } from '@/context/NavigationContext';

const RESERVATION_MESSAGE = '무료 회의룸은 예약이 필요한 공간입니다.';

function ListLanding() {
  const router = useRouter();
  const title = router.query.title as string;
  const { headCount } = useContext(OptionContext);
  const { navType } = useContext(NavigationContext);

  return (
    <Layout title={title ? `${title}역` : ''} right={profile}>
      <FAB />
      <Navigation />
      {navType === '무료 회의룸' && <ReservationOption />}

      <section className="flex justify-end">
        {navType === '무료 회의룸' && (
          <div
            style={{
              color: `${headCount ? COLOR.GRAY_600 : COLOR.BLUE_600}`,
            }}
            className="mr-[13px] flex h-[26px] items-center rounded-full bg-BLUE_50 px-1.5 py-1 font-system6 text-system6"
          >
            <Image
              src={info}
              alt="reservation check message icon"
              style={{
                fill: `${headCount ? COLOR.GRAY_600 : COLOR.BLUE_600}`,
              }}
              className="mr-1"
            />
            {RESERVATION_MESSAGE}
          </div>
        )}
        <ListFilter />
      </section>
      <PlaceList />
    </Layout>
  );
}

export default ListLanding;
