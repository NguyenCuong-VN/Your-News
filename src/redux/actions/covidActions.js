import {FETCH_COVID_NEWS , UPDATE_COVID_INFO, UPDATE_COVID_NEWS} from './actionsType';
import { EP_NEWS_COVID } from '../../constants/endpoints';
import {getCovidInfo, getCovidNews} from '../../api/covidApi';
import {formatCovidInfo} from '../../utils/formatCovidData';
import {formatNews} from '../../utils/formatNewsData';

export const fetchCovidInfo = () => async dispatch => {
  const response = await getCovidInfo();
  if (response) {
    const newData = formatCovidInfo(response);
    updateCovidInfo(newData)(dispatch);
  };
};

export const updateCovidInfo = newData => dispatch => {
  dispatch({
    type: UPDATE_COVID_INFO,
    data: newData,
  });
};

export const fetchCovidNews = () => async dispatch => {
  dispatch({
    type: FETCH_COVID_NEWS,
  });
  
  const response = await getCovidNews();
  if (response) {
    const newData = formatNews(response);
    updateCovidNews(newData)(dispatch);
  };
};

export const updateCovidNews = newData => dispatch => {
  dispatch({
    type: UPDATE_COVID_NEWS,
    data: newData,
  });
};