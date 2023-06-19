import { client } from '..';
import { GetPlaceListInput, GetPlaceListOutput } from './types';

export const fetchPlaceList = async (
  payload: GetPlaceListInput,
): Promise<GetPlaceListOutput> => {
  const { navType, station, filter, page } = payload;
  const { data } = await client.get<GetPlaceListOutput>(
    `/place/filter/${navType}?station=${encodeURIComponent(
      station,
    )}&filter=${filter}&page=${page}`,
  );
  return data;
};
