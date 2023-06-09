import { useQuery } from '@tanstack/react-query';
import { getPlaceDetail, getPlaceAddress } from '@/services/detail';

export const useGetPlaceDetail = (placeId: string, station: string) => {
  const { data } = useQuery(
    ['PlaceDetail'],
    () => getPlaceDetail({ placeId, station }),
    {
      enabled: !!placeId,
    },
  );
  return { list: data };
};

export const useGetPlaceAddress = (
  payload: { placeId: string; isRoadName: boolean },
  address: string,
) => {
  const { placeId, isRoadName } = payload;

  const param = isRoadName ? 1 : 0;
  const { data } = useQuery(
    ['PlaceAddress', isRoadName, address],
    () => getPlaceAddress({ placeId, isRoadName: param }),
    {
      staleTime: 1000 * 30,
      enabled: !!placeId,
    },
  );
  return { value: data };
};
