import Image from 'next/image';
import list_profile from '@/assets/icons/list_profile.svg';
import list_location from '@/assets/icons/list_location.svg';
import ImageFallback from '../common/ImageFallback';
import { Place } from '@/services/list/types';

interface PlaceItemProps {
  data: Place;
}

function PlaceItem(props: PlaceItemProps) {
  const {
    data: { place, count, hashtags = [], distance, imageURL },
  } = props;

  return (
    <>
      <div className="relative">
        <div className="relative flex h-[120px] w-[100px] items-center justify-center max-[360px]:h-[100px] max-[360px]:w-[80px]">
          <ImageFallback src={imageURL} alt={place} />
        </div>
      </div>
      <div className="flex flex-col items-start justify-between ml-3">
        <div className="flex-col w-full">
          <h1 className="mb-2 text-system3_bold font-system3_bold text-GRAY_900 max-[360px]:text-system4">
            {place}
          </h1>
          <div className="flex mb-1">
            <div className="relative flex w-5 h-5 mb-1">
              <Image src={list_location} alt="location icon" fill />
            </div>
            <p className="text-system5 font-system5 text-GRAY_600 max-[360px]:text-system6">
              {distance}
            </p>
          </div>
          <div className="flex">
            <div className="relative w-5 h-5">
              <Image src={list_profile} alt="profile icon" fill />
            </div>
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
                marginRight: index === hashtags.length - 1 ? '0px' : '8px',
              }}
            >
              {tag}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default PlaceItem;
