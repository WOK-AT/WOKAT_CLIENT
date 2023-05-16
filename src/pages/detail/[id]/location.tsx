import Layout from '@/components/common/Layout';
import { useRouter } from 'next/router';

function Location() {
  const router = useRouter();

  return (
    <Layout>
      <section className="bg-BLUE_100">지도</section>
      <article className="fixed bottom-0 z-10 -ml-4 h-[198px] w-full rounded-t-[20px] bg-WHTIE p-[16px] shadow-[0_-6px_34px_rgb(0,0,0,0.15)]">
        <h1 className="mt-[14px] font-system3_bold text-system3_bold text-GRAY_800">
          {router.query.title}
        </h1>
        <div className="mt-[17px] flex flex-row items-center justify-between font-system5_medium text-system5_medium ">
          <p className="text-GRAY_600">{router.query.location}</p>
          <button
            type="button"
            className="cursor-pointer text-BLUE_500"
            onClick={() => {
              navigator.clipboard.writeText(`${router.query.location}`);
            }}
          >
            복사
          </button>
        </div>
        <button
          type="button"
          className="mt-[20px] flex h-[52px] w-full items-center justify-center rounded-[38px] bg-BLUE_50 font-system4_bold text-system4_bold text-BLUE_500"
        >
          네이버 지도로 길찾기
        </button>
      </article>
    </Layout>
  );
}

export default Location;
