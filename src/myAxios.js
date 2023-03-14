import axios from 'axios';

export const myAxios = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  params: { api_key: 'e26e5abb31121dbbb9bf7d0b3fd42c46' },
});
