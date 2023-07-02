import { client } from '..';
import { GetPlaceAddressInput, GetPlaceDetailInput } from './types';

export const getPlaceDetail = async (payload: GetPlaceDetailInput) => {
  const { placeId, station } = payload;
  const { data } = await client.get(`/place/${placeId}?station=${station}`);
  return data;
};

export const getPlaceAddress = async (payload: GetPlaceAddressInput) => {
  const { placeId, isRoadName } = payload;
  const { data } = await client.get(`/place/${placeId}/address/${isRoadName}`);
  return data;
};
