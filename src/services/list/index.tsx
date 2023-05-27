import { client } from '..';
import { GetPlaceListInput, GetPlaceListOutput } from './types';

export const fetchPlaceList = async (
  payload: GetPlaceListInput,
): Promise<GetPlaceListOutput> => {
  const { station, filter, date, person } = payload;
  const { data } = await client.get(
    `/place/station=${station}?filter=${filter}?date=${date}?person=${person}`,
  );
  return data;
};
