import { client } from '..';
import { GetPlaceAddressInput } from './types';

export const getPlaceDetail = async (placeId: string, station: string) => {
  const { data } = await client.get(`/place/${placeId}?station=${station}`);
  return data;
};

export const getPlaceAddress = async (payload: GetPlaceAddressInput) => {
  const { placeId, isRoadName } = payload;
  const { data } = await client.get(`/place/${placeId}/address/${isRoadName}`);
  return data;
};
