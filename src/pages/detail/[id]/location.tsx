import { useContext } from 'react';
import { useRouter } from 'next/router';
import Layout from '@/components/common/Layout';
import Map from '@/components/detail/location/Map';
import { ToastContext } from '@/context/ToastContext';
interface ctxType {
  query: {
    place: string;
    location: string;
  };
}

interface LocationProps {
  place: string;
  location: string;
}

function Location({ place, location }: LocationProps) {
  const router = useRouter();
  const { showToast } = useContext(ToastContext);

  const copyLocation = () => {
    navigator.clipboard.writeText(`${router.query.location}`);
    showToast('클립 보드에 복사되었습니다.');
  };

  return (
    <Layout>
      <Map place={place} location={location} />
      <article
        id="detail-location-bottomSheet"
        className="z-1 fixed bottom-0 -ml-4 w-full rounded-t-[20px] bg-WHTIE p-[16px] shadow-[0_-6px_34px_rgb(0,0,0,0.15)]"
      >
        <h1 className="mt-[14px] text-system3_bold font-system3_bold text-GRAY_800">
          {router.query.place}
        </h1>
        <div className="mt-[17px] flex flex-row items-center justify-between text-system5_medium font-system5_medium ">
          <p className="text-GRAY_600">{router.query.location}</p>
          <button
            type="button"
            className="w-[25px] cursor-pointer text-BLUE_500"
            onClick={copyLocation}
            id="click_space_location_ad_copy"
          >
            복사
          </button>
        </div>
        <button
          type="button"
          className="mt-[20px] flex h-[52px] w-full items-center justify-center rounded-[38px] bg-BLUE_50 text-system4_bold font-system4_bold text-BLUE_500"
          onClick={() =>
            window.open(`http://map.naver.com/?query=${router.query.location}`)
          }
          id="click_space_location_direction_naver"
        >
          네이버 지도로 길찾기
        </button>
      </article>
    </Layout>
  );
}

export default Location;

export const getServerSideProps = async (context: ctxType) => {
  const { query } = context;
  const { place, location } = query;
  return { props: { place, location } };
};
