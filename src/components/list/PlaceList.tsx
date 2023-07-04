import Link from 'next/link';
import Image from 'next/image';
import noResult_Img from '@/assets/images/noResult.webp';
import { usePlaceList } from '@/hooks/queries/usePlaceList';
import { useContext, useEffect, useRef } from 'react';
import { useRouter } from 'next/router';
import { NavigationContext } from '@/context/NavigationContext';
import PlaceItem from './PlaceItem';

interface PlaceListProps {
  station: string;
}

function PlaceList(props: PlaceListProps) {
  const { station } = props;
  const router = useRouter();
  const { navType } = useContext(NavigationContext);

  const { data: placeList } = usePlaceList({ station, navType });

  const isListPage = router.pathname.includes('list');
  const placeListWrapperRef = useRef<HTMLDivElement>(null);

  const setDisableOverflow = () => {
    document.body.style.overflow = 'hidden';
  };

  const resetDisableOverflow = () => {
    document.body.style.overflow = 'unset';
  };

  useEffect(() => {
    if (placeListWrapperRef.current) {
      const userAgent = navigator.userAgent.toLowerCase();

      const isSafari = /safari/i.test(userAgent);
      const isNaver = /naver/i.test(userAgent);
      if (isSafari && !isNaver) {
        // set id only safari
        placeListWrapperRef.current.id = 'place-list';
      }
    }

    setDisableOverflow();
    return () => {
      resetDisableOverflow();
    };
  }, []);

  return (
    <div
      ref={placeListWrapperRef}
      className="mt-4 h-[calc(100vh-150px)] overflow-y-scroll scrollbar-hide"
    >
      {placeList.length > 0 ? (
        placeList.map((data, index) => (
          <Link
            href={{
              pathname: `/detail/${data.id}`,
              query: {
                station,
              },
            }}
            key={index}
            className="mb-4 flex w-full border-b-2 border-GRAY_100 pb-4"
          >
            <PlaceItem data={data} />
          </Link>
        ))
      ) : (
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
      )}
    </div>
  );
}

export default PlaceList;
