import { useQuery } from '@tanstack/react-query';
import { fetchPlaceList } from '../../services/list';
import { GetPlaceListOutput } from '../../services/list/types';
import { useRouter } from 'next/router';
import { NavType } from '../useNavigation';

interface PlaceListProps {
  station: string;
  navType: NavType;
}

const navTypeMapper: Record<NavType, 0 | 1 | 2> = {
  '무료 공간': 0,
  '무료 회의룸': 1,
  카페: 2,
  '': 0,
};

export const usePlaceList = (props: PlaceListProps) => {
  const { station, navType } = props;
  const router = useRouter();

  const isNearbyPlace = router.pathname.includes('nearby-place');

  const title = router.query.title as string;

  const stationParam: string = isNearbyPlace ? station : title;

  const { data } = useQuery(
    ['placeList', navTypeMapper[navType], stationParam],
    () =>
      fetchPlaceList({
        navType: navTypeMapper[navType],
        station: stationParam,
        filter: '0', // TODO : 서버 추가 개발 이후 수정 예정, 현재는 0 고정값
        page: 0,
      }),
    {
      enabled: !!stationParam,
      suspense: true,
    },
  );

  const isDataValid = (data: unknown): data is GetPlaceListOutput => {
    return (
      data !== null &&
      typeof data === 'object' &&
      'placeList' in data &&
      typeof (data as unknown as GetPlaceListOutput).placeList === 'object' &&
      Array.isArray((data as unknown as GetPlaceListOutput).placeList.data)
    );
  };

  return {
    data: isDataValid(data) ? data.placeList.data : [],
  };
};
