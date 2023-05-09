import { useState } from 'react';
import Image from 'next/image';
import Layout from '@/components/common/Layout';
import { useRouter } from 'next/router';
import profile from '@/assets/icons/profile.svg';
import list_profile from '@/assets/icons/list_profile.svg';
import list_location from '@/assets/icons/list_location.svg';

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
];

function List() {
  const router = useRouter();
  const title = router.query.title as string;

  const [placeList, setPlaceList] = useState<PlaceListType[]>(dummy);

  return (
    <Layout title={`${title}역`} right={profile}>
      {placeList.map(({ imgUrl, title, placeInfo, tags }, index) => (
        <article
          key={index}
          className="h-30 mb-4 flex w-full border-b-2 border-GRAY_100 pb-4"
        >
          <div>
            <Image
              src={imgUrl || ''}
              alt="place image"
              width={100}
              height={120}
              className="overflow-hidden rounded"
            />
          </div>
          <div className="ml-3 flex flex-col items-center justify-between">
            <div className="flex-col">
              <h1 className="mb-2 font-system3_bold text-system3_bold text-GRAY_900">
                {title}
              </h1>
              <div className="mb-1 flex">
                <Image
                  src={list_location}
                  alt="location icon"
                  width={20}
                  height={20}
                />
                <p className=" font-system5 text-system5 text-GRAY_600">
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
                <p className="font-system5 text-system5 text-GRAY_600">
                  최대 {placeInfo.capacity}명
                </p>
              </div>
            </div>
            <ul className="flex">
              {tags.map((tag, index) => (
                <li
                  key={index}
                  className="rounded-full bg-[#E0EDFFB2] px-2 py-0.5 font-system6 text-system6 text-BLUE_600"
                  style={{ marginRight: index === tags.length - 1 ? 0 : '8px' }}
                >
                  # {tag}
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
