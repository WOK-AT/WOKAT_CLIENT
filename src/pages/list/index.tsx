import { useState } from 'react';
import Image from 'next/image';
import Layout from '@/components/common/Layout';
import { useRouter } from 'next/router';
import profile from '@/assets/icons/profile.svg';
import list_profile from '@/assets/icons/list_profile.svg';
import list_location from '@/assets/icons/list_location.svg';
import bookmark from '@/assets/icons/bookmark.svg';
import testImage from '@/assets/images/main_background.svg';
import FAB from '@/components/list/FAB';
import ListFilter from '@/components/common/ListFilter';

interface PlaceListType {
  imgUrl: string;
  title: string;
  placeInfo: {
    distance: string;
    capacity: number;
  };
  tags: string[];
}

const dummy = [
  {
    imgUrl: '',
    title: '홍대 유유기지',
    placeInfo: { distance: '홍대입구역 5번 출구에서 도보 10분', capacity: 10 },
    tags: ['해쉬태그', '해쉬태그', '해쉬태그'],
  },
  {
    imgUrl: '',
    title: '홍대 유유기지',
    placeInfo: { distance: '홍대입구역 5번 출구에서 도보 10분', capacity: 10 },
    tags: ['해쉬태그', '해쉬태그', '해쉬태그'],
  },
  {
    imgUrl: '',
    title: '홍대 유유기지',
    placeInfo: { distance: '홍대입구역 5번 출구에서 도보 10분', capacity: 10 },
    tags: ['해쉬태그', '해쉬태그', '해쉬태그'],
  },
  {
    imgUrl: '',
    title: '홍대 유유기지',
    placeInfo: { distance: '홍대입구역 5번 출구에서 도보 10분', capacity: 10 },
    tags: ['해쉬태그', '해쉬태그', '해쉬태그'],
  },
  {
    imgUrl: '',
    title: '홍대 유유기지',
    placeInfo: { distance: '홍대입구역 5번 출구에서 도보 10분', capacity: 10 },
    tags: ['해쉬태그', '해쉬태그', '해쉬태그'],
  },
];

function List() {
  const router = useRouter();
  const title = router.query.title as string;

  const [placeList, setPlaceList] = useState<PlaceListType[]>(dummy);

  return (
    <Layout title={`${title}역`} right={profile}>
      <FAB />
      <ListFilter />
      {placeList.map(({ imgUrl, title, placeInfo, tags }, index) => (
        <article
          key={index}
          className="flex w-full pb-4 mb-4 border-b-2 h-30 border-GRAY_100 scrollbar-hide"
        >
          <div className="relative">
            <Image
              src={imgUrl || testImage}
              alt="place image"
              className="h-[120px] w-[100px] overflow-hidden rounded border border-black max-[360px]:h-[100px] max-[360px]:w-[80px]"
            />
            <Image
              src={bookmark}
              alt="bookmark button"
              className="absolute bottom-2 right-2"
            />
          </div>
          <div className="flex flex-col items-center justify-between ml-3">
            <div className="flex-col">
              <h1 className="mb-2 font-system3_bold text-system3_bold text-GRAY_900 max-[360px]:text-system4">
                {title}
              </h1>
              <div className="flex mb-1">
                <Image
                  src={list_location}
                  alt="location icon"
                  width={20}
                  height={20}
                />
                <p className=" font-system5 text-system5 text-GRAY_600 max-[360px]:text-system6">
                  {placeInfo.distance}
                </p>
              </div>
              <div className="flex">
                <Image
                  src={list_profile}
                  alt="profile icon"
                  width={20}
                  height={20}
                />
                <p className="font-system5 text-system5 text-GRAY_600 max-[360px]:text-system6">
                  최대 {placeInfo.capacity}명
                </p>
              </div>
            </div>
            <ul className="flex">
              {tags.map((tag, index) => (
                <li
                  key={index}
                  className="rounded-full bg-[#E0EDFFB2] px-2 py-0.5 font-system6 text-system6 text-BLUE_600 max-[360px]:px-1 "
                  style={{
                    marginRight: index === tags.length - 1 ? 0 : '8px',
                  }}
                >
                  <span className="mr-[3px]">#</span>
                  {tag}
                </li>
              ))}
            </ul>
          </div>
        </article>
      ))}
    </Layout>
  );
}

export default List;
