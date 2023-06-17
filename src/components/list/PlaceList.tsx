import Link from 'next/link';
import Image from 'next/image';
import list_profile from '@/assets/icons/list_profile.svg';
import list_location from '@/assets/icons/list_location.svg';
import noReulst_Img from '@/assets/images/noResult.webp';
import bookmark from '@/assets/icons/bookmark.svg';
import ImageFallback from '../common/ImageFallback';
import { usePlaceList } from '@/hooks/queries/usePlaceList';
import Loading from '../common/Loading';
import { useContext } from 'react';
import { useRouter } from 'next/router';
import { NavigationContext } from '@/context/NavigationContext';

interface PlaceListProps {
  station: string;
}

function PlaceList(props: PlaceListProps) {
  const { station } = props;
  const { navType } = useContext(NavigationContext);
  const { data: placeList, isLoading } = usePlaceList({ station, navType });
  const router = useRouter();
  const isNearbyPlace = router.pathname.includes('nearby-place');

  if (isLoading) return <Loading />;

  return (
    <div
      className="mt-4 overflow-y-scroll scrollbar-hide"
      style={{
        height: `${
          navType === '무료 회의룸'
            ? 'calc(100vh - 247px)'
            : 'calc(100vh - 190px)'
        }`,
      }}
    >
      {placeList.length > 0 ? (
        placeList.map(
          ({ id, place, count, hashtags = [], location, imageURL }) => (
            <Link
              href={`detail/${id}`}
              key={id}
              className="flex w-full pb-4 mb-4 border-b-2 border-GRAY_100"
            >
              <div className="relative">
                <div className="flex h-[120px] w-[100px] items-center justify-center max-[360px]:h-[100px] max-[360px]:w-[80px]">
                  <ImageFallback src={imageURL} alt={place} />
                </div>
                <Image
                  src={bookmark}
                  alt="bookmark button"
                  className="absolute bottom-2 right-2"
                />
              </div>
              <div className="flex flex-col items-start justify-between ml-3">
                <div className="flex-col">
                  <h1 className="mb-2 text-system3_bold font-system3_bold text-GRAY_900 max-[360px]:text-system4">
                    {place}
                  </h1>
                  <div className="relative flex mb-1">
                    <Image
                      src={list_location}
                      alt="location icon"
                      width={20}
                      height={20}
                    />
                    <p className=" text-system5 font-system5 text-GRAY_600 max-[360px]:text-system6">
                      {location}
                    </p>
                  </div>
                  <div className="flex">
                    <Image
                      src={list_profile}
                      alt="profile icon"
                      width={20}
                      height={20}
                    />
                    <p className="text-system5 font-system5 text-GRAY_600 max-[360px]:text-system6">
                      {count || '제한 없음'}
                    </p>
                  </div>
                </div>
                <ul className="flex w-full">
                  {hashtags.map((tag: string, index: number) => (
                    <li
                      key={index}
                      className="rounded-full bg-[#E0EDFFB2] px-2 py-0.5 text-system6 font-system6 text-BLUE_600 max-[360px]:px-1 "
                      style={{
                        marginRight:
                          index === hashtags.length - 1 ? '0px' : '8px',
                      }}
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
              </div>
            </Link>
          ),
        )
      ) : isNearbyPlace ? (
        <div className="flex flex-col items-center justify-center h-auto">
          <div className="mb-[8px] font-system4_medium text-GRAY_900">
            주변 추천 업무 공간이 없어요.
          </div>
          <div className=" font-system5 text-GRAY_400">
            다른 역을 검색하거나 지도를 이동해주세요.
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center w-full h-full ">
          <Image
            src={noReulst_Img}
            alt="noReusltImg"
            width={103}
            height={132}
            className="mb-[20px] mt-[-50px]"
          />
          <div className="mb-[8px] font-system4_medium text-GRAY_900">
            주변 추천 업무 공간이 없어요.
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
