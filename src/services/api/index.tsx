import axios from 'axios';

const BaseURL = axios.create({
  baseURL: 'https://www.wokat.link/',
});

export const getPlaceDetail = async () => {
  const { data } = await BaseURL.get('place/1/646c9fd61f66c2fbf43214f1');
  return data;
};
