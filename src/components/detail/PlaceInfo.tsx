import Image from 'next/image';
import book from '@/assets/icons/book.svg';
import spot from '@/assets/icons/spot.svg';
import ShareModal from './ShareModal';
import { useGetPlaceDetail } from '@/hooks/queries/useDetail';
import { useRouter } from 'next/router';
import { PlaceDetail } from '@/services/detail/types';

const default_place =
  'https://wokat-default-image.s3.ap-northeast-2.amazonaws.com/default_place.png';

type PlaceInfo = Pick<
  PlaceDetail,
  'category' | 'placeName' | 'distance' | 'hashtags' | 'imageURLs'
>;

function PlaceInfo() {
  const router = useRouter();
  const id = router.query.id as string;
  const station = router.query.station as string;
  const { list } = useGetPlaceDetail(id, station);
  if (!list) return <h1></h1>;
  const { category, placeName, distance, hashtags, imageURLs }: PlaceInfo =
    list?.data;

  const shareModalProps = {
    placeName,
    imageURL: imageURLs.length ? imageURLs[0] : default_place,
    hashtags,
  };

  return (
    <>
      <section className="flex flex-row items-center justify-between mt-8 mb-2">
        <p className="text-system6_medium font-system6_medium text-GRAY_400">
          {category === '0'
            ? '무료 대여 공간'
            : category === '1'
            ? '무료 회의룸'
            : '카페'}
        </p>
        <article className="flex flex-row items-center justify-center">
          <ShareModal {...shareModalProps} />
          {/* <Image src={book} alt="book" className="cursor-pointer" /> */}
        </article>
      </section>
      <h1 className="mb-2 text-system2_bold font-system2_bold text-GRAY_800">
        {placeName}
      </h1>
      <section className="flex flex-row items-center mb-2">
        <Image src={spot} alt="spot" className="mr-1" />
        <p className="text-system5 font-system5 text-GRAY_600">{distance}</p>
      </section>
      <section className="flex flex-row items-center mb-5">
        {hashtags?.map((tag: string, index: number) => {
          return (
            <article
              key={index}
              className="mr-1.5 rounded-3xl bg-BLUE_100 pb-1 pl-2  pr-2 pt-1 text-system6 font-system6 text-BLUE_700"
            >
              {tag}
            </article>
          );
        })}
      </section>
    </>
  );
}

export default PlaceInfo;
