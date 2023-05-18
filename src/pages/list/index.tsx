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
import Navigation from '@/components/common/Navigation';
import Link from 'next/link';
import ReservationForm from '@/components/list/ReservationForm';
import useNavigation from '@/hooks/useNavigation';

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
  const { navType, switchNavType } = useNavigation();

  return (
    <Layout title={`${title}역`} right={profile}>
      <FAB />
      <Navigation onChange={(navType) => switchNavType(navType)} />
      <ListFilter />
      {navType === '무료 회의룸' && <ReservationForm />}
    </Layout>
  );
}

export default List;
