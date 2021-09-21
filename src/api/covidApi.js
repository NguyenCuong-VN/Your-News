import {EP_COVID, EP_TO_JSON, EP_NEWS_COVID} from '../constants/endpoints';
import axiosClient from './axiosClient';

export const getCovidInfo = () => {
  return axiosClient.get(EP_COVID);
};

export const getCovidNews = () => {
  return axiosClient.get(
    EP_TO_JSON,
    {
      params: {rss_url: EP_NEWS_COVID},
    }
    );
};
