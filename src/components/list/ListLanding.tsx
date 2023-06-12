import FAB from '@/components/list/FAB';
import Navigation from '@/components/common/Navigation';
import PlaceList from './PlaceList';
import { useContext } from 'react';
import { OptionContext } from '@/context/OptionContext';
import OptionSelector from './OptionSelector';
import { NavigationContext } from '@/context/NavigationContext';
import { useQuery } from '@tanstack/react-query';
import { fetchPlaceList } from '@/services/list';
import { useRouter } from 'next/router';
import { GetPlaceListOutput, Place } from '@/services/list/types';

function ListLanding() {
  const router = useRouter();
  const station = router.query.title as string;
  const { isOpen: optionSelectorOpen } = useContext(OptionContext);
  const { navType } = useContext(NavigationContext);

  const { data } = useQuery(
    ['placeList', navType],
    () =>
      fetchPlaceList({
        navType: getNavType(),
        station,
        filter: '0', // TODO : 서버 추가 개발 이후 수정, 현재는 0 고정값
        page: 0,
      }),
    {
      enabled: !!station,
    },
  );

  const getNavType = () => {
    switch (navType) {
      case '무료 공간':
        return 0;
      case '무료 회의룸':
        return 1;
      default:
        return 2;
    }
  };

  const isDataValid = (data: unknown): data is GetPlaceListOutput => {
    return (
      data !== null &&
      typeof data === 'object' &&
      'placeList' in data &&
      typeof (data as unknown as GetPlaceListOutput).placeList === 'object' &&
      Array.isArray((data as unknown as GetPlaceListOutput).placeList.data)
    );
  };

  const getPlaceListData = (): Place[] => {
    if (isDataValid(data)) {
      return data.placeList.data;
    }
    return [];
  };

  return optionSelectorOpen ? (
    <OptionSelector />
  ) : (
    <>
      <Navigation />
      <PlaceList placeList={getPlaceListData()} navType={navType} />
      <FAB />
    </>
  );
}

export default ListLanding;
