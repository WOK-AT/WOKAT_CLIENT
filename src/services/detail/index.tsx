import { client } from '..';
import {
  GetPlaceAddressInput,
  GetPlaceDetailInput,
  GetPlaceDetailOutput,
} from './types';

export const getPlaceDetail = async (
  payload: GetPlaceDetailInput,
): Promise<GetPlaceDetailOutput> => {
  const { placeId, station } = payload;
  const { data } = await client.get<GetPlaceDetailOutput>(
    `/place/${placeId}?station=${station}`,
  );
  return data;
};

export const getPlaceAddress = async (payload: GetPlaceAddressInput) => {
  const { placeId, isRoadName } = payload;
  const { data } = await client.get(`/place/${placeId}/address/${isRoadName}`);
  return data;
};
