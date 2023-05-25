import axios from 'axios';

const BaseURL = axios.create({
  baseURL: 'https://www.wokat.link/',
});

export const getPlaceDetail = async () => {
  const { data } = await BaseURL.get('place/0/646c9fe21f66c2fbf4321562');
  return data;
};
