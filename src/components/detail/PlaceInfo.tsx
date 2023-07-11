import book from '@/assets/icons/book.svg';
import spot from '@/assets/icons/spot.svg';
import Image from 'next/image';
import ShareModal from './ShareModal';
import { useGetPlaceDetail } from '@/hooks/queries/useDetail';
import { useRouter } from 'next/router';

interface PlaceInfo {
  category: string;
  placeName: string;
  distance: string;
  hashtags: string[];
}

function PlaceInfo() {
  const router = useRouter();
  const id = router.query.id as string;
  const station = router.query.station as string;
  const { list } = useGetPlaceDetail(id, station);
  if (!list) return <h1></h1>;
  const { category, placeName, distance, hashtags }: PlaceInfo = list?.data;

  return (
    <>
      <section className="mb-2 mt-8 flex flex-row items-center justify-between">
        <p className="text-system6_medium font-system6_medium text-GRAY_400">
          {category === '0'
            ? '무료 대여 공간'
            : category === '1'
            ? '무료 회의룸'
            : '카페'}
        </p>
        <article className="flex flex-row items-center justify-center">
          <ShareModal />
          {/* <Image src={book} alt="book" className="cursor-pointer" /> */}
        </article>
      </section>
      <h1 className="mb-2 text-system2_bold font-system2_bold text-GRAY_800">
        {placeName}
      </h1>
      <section className="mb-2 flex flex-row items-center">
        <Image src={spot} alt="spot" className="mr-[4px]" />
        <p className="text-system5 font-system5 text-GRAY_600">{distance}</p>
      </section>
      <section className="mb-5 flex flex-row items-center">
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