import {EP_WEATHER, EP_WEATHER_ICON} from '../constants/endpoints';
import axiosClient from './axiosClient';
import configOpenWeatherMap from '../configs/openWeatherMap';

export const getAllData = params => {
  return axiosClient.get(EP_WEATHER, {
    params: {...params, ...configOpenWeatherMap},
  });
};