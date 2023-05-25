import { useQuery } from '@tanstack/react-query';
import { getPlaceDetail } from '@/services/api';

export const useGetPlaceDetail = () => {
  const { data } = useQuery(['getPlaceDetail'], getPlaceDetail);
  return { list: data };
};
