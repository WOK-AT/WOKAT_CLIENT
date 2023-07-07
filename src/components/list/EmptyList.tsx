import Image from 'next/image';
import noResult_Img from '@/assets/images/noResult.webp';
import { useRouter } from 'next/router';

function EmptyList() {
  const router = useRouter();
  const isListPage = router.pathname.includes('list');

  return (
    <div
      className="flex flex-col items-center"
      style={{
        height: `${isListPage ? '100%' : 'auto'}`,
      }}
    >
      {isListPage && (
        <Image
          src={noResult_Img}
          alt="noResultImg"
          width={103}
          height={132}
          className="mb-[20px] mt-[132px]"
        />
      )}
      <div className="mb-[8px] font-system4_medium text-GRAY_900">
        주변 추천 업무공간이 없어요.
      </div>
      <div className=" font-system5 text-GRAY_400">
        다른 역을 검색하거나 지도를 이동해주세요.
      </div>
    </div>
  );
}

export default EmptyList;
