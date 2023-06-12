import { useQuery } from '@tanstack/react-query';
import { fetchPlaceList } from '../../services/list';
import { GetPlaceListOutput } from '../../services/list/types';
import { useRouter } from 'next/router';
import { NavType } from '../useNavigation';

interface PlaceListProps {
  navType?: NavType;
}

export const usePlaceList = (props: PlaceListProps) => {
  const { navType } = props;
  const router = useRouter();
  const station = router.query.title as string;

  const getNavType = () => {
    switch (navType) {
      case '무료 회의룸':
        return 1;
      case '카페':
        return 2;
      default:
        return 0;
    }
  };

  const { data, isLoading } = useQuery(
    ['placeList', navType || '무료 공간'],
    () =>
      fetchPlaceList({
        navType: getNavType(),
        station,
        filter: '0', // TODO : 서버 추가 개발 이후 수정 예정, 현재는 0 고정값
        page: 0,
      }),
    {
      enabled: !!station,
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

  return { data: isDataValid(data) ? data.placeList.data : [], isLoading };
};
