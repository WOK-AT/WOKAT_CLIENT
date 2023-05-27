import { useQuery } from '@tanstack/react-query';
import { getPlaceDetail, getPlaceAddress } from '@/services/api';

export const useGetPlaceDetail = () => {
  const { data } = useQuery(['PlaceDetail'], getPlaceDetail);
  return { list: data };
};

export const useGetPlaceAddress = (isRoadName: boolean, address: string) => {
  const param = isRoadName ? 1 : 0;
  const { data } = useQuery(
    ['PlaceAddress', isRoadName, address],
    () => getPlaceAddress(param),
    {
      staleTime: 1000 * 30,
    },
  );
  return { value: data };
};
