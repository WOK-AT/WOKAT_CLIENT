import { client } from '..';
import { GetPlaceAddressInput } from './types';

export const getPlaceDetail = async (placeId: string) => {
  const { data } = await client.get(`/place/${placeId}`);
  return data;
};

export const getPlaceAddress = async (payload: GetPlaceAddressInput) => {
  const { placeId, isRoadName } = payload;
  const { data } = await client.get(`/place/${placeId}/address/${isRoadName}`);
  return data;
};
