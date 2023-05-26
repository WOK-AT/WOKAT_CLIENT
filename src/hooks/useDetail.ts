import { useQuery } from '@tanstack/react-query';
import { getPlaceDetail, getPlaceAddress } from '@/services/api';

export const useGetPlaceDetail = () => {
  const { data } = useQuery(['getPlaceDetail'], getPlaceDetail);
  return { list: data };
};

export const useGetPlaceAddress = (isRoadName: boolean) => {
  const param = isRoadName ? 1 : 0;
  const { data } = useQuery(['getPlaceAddress', isRoadName], () =>
    getPlaceAddress(param),
  );
  return { value: data };
};
