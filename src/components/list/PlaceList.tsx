import Link from 'next/link';
import Image from 'next/image';
import { useContext } from 'react';
import info from '@/assets/icons/info.svg';
import list_profile from '@/assets/icons/list_profile.svg';
import list_location from '@/assets/icons/list_location.svg';
import bookmark from '@/assets/icons/bookmark.svg';
import testImage from '@/assets/images/main_background.svg';
import { OptionContext } from '@/context/OptionContext';
import ReservationOption from './ReservationOption';
import ListFilter, { filterOptions } from '@/components/common/ListFilter';
import { COLOR } from '@/styles/color';
import { useFilter } from '@/hooks/useFilter';
import { Place } from '@/services/list/types';

const RESERVATION_MESSAGE = '무료 회의룸은 예약이 필요한 공간입니다.';

interface PlaceListProps {
  placeList: Place[];
  navType: string;
}

function PlaceList(props: PlaceListProps) {
  const { placeList, navType } = props;
  const { headCount } = useContext(OptionContext);
  const { currentOption, changeOption } = useFilter(filterOptions[0]);

  return (
    <div>
      {navType === '무료 회의룸' && <ReservationOption />}

      <section className="flex justify-between">
        <div
          style={{
            color: `${headCount ? COLOR.GRAY_600 : COLOR.BLUE_600}`,
          }}
          className="mr-[13px] flex h-[26px] items-center rounded-full bg-BLUE_50 px-1.5 py-1 text-system6 font-system6"
        >
          {navType === '무료 회의룸' && (
            <>
              <Image
                src={info}
                alt="reservation check message icon"
                style={{
                  fill: `${headCount ? COLOR.GRAY_600 : COLOR.BLUE_600}`,
                }}
                className="mr-1"
              />
              {RESERVATION_MESSAGE}
            </>
          )}
        </div>
        <ListFilter currentOption={currentOption} onChange={changeOption} />
      </section>

      <div
        style={{
          height: `${
            navType === '무료 회의룸'
              ? 'calc(100vh - 247px)'
              : 'calc(100vh - 190px)'
          }`,
        }}
        className="overflow-y-scroll scrollbar-hide"
      >
        {placeList.map(
          ({ id, place, count, hashtags = [], location, imageURL }) => (
            <Link
              href={`detail/${id}`}
              key={id}
              className="mb-4 flex w-full border-b-2 border-GRAY_100 pb-4"
            >
              <div className="relative h-[120px] w-[100px] max-[360px]:h-[100px] max-[360px]:w-[80px]">
                <Image
                  src={imageURL || testImage}
                  alt="place image"
                  className="overflow-hidden rounded"
                  fill
                />
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
