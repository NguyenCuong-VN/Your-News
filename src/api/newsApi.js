import {EP_TO_JSON, EP_NEWS} from '../constants/endpoints';
import axiosClient from './axiosClient';

export const getNews = () => {
  return axiosClient.get(
    EP_TO_JSON,
    {
      params: {rss_url: EP_NEWS},
    }
    );
};
