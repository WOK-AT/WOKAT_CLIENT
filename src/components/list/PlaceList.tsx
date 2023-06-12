import Link from 'next/link';
import Image from 'next/image';
import list_profile from '@/assets/icons/list_profile.svg';
import list_location from '@/assets/icons/list_location.svg';
import bookmark from '@/assets/icons/bookmark.svg';
import { Place } from '@/services/list/types';
import ImageFallback from '../common/ImageFallback';
import ListFilter, { filterOptions } from '../common/ListFilter';
import { useFilter } from '@/hooks/useFilter';

interface PlaceListProps {
  placeList: Place[];
  navType: string;
}

function PlaceList(props: PlaceListProps) {
  const { placeList, navType } = props;
  const { currentOption, changeOption } = useFilter(filterOptions[0]);

  return (
    <div>
      <section className="flex justify-end">
        <ListFilter currentOption={currentOption} onChange={changeOption} />
      </section>

      <div
        className="overflow-y-scroll scrollbar-hide"
        style={{
          height: `${
            navType === '무료 회의룸'
              ? 'calc(100vh - 247px)'
              : 'calc(100vh - 190px)'
          }`,
        }}
      >
        {placeList.map(
          ({ id, place, count, hashtags = [], location, imageURL }) => (
            <Link
              href={`detail/${id}`}
              key={id}
              className="mb-4 flex w-full border-b-2 border-GRAY_100 pb-4"
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
              <div className="ml-3 flex flex-col items-start justify-between">
                <div className="flex-col">
                  <h1 className="mb-2 text-system3_bold font-system3_bold text-GRAY_900 max-[360px]:text-system4">
                    {place}
                  </h1>
                  <div className="relative mb-1 flex">
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
                      최대 {count || 0}명
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
        )}
      </div>
    </div>
  );
}

export default PlaceList;
