import {FETCH_NEWS, UPDATE_NEWS} from './actionsType';
import { EP_NEWS_COVID } from '../../constants/endpoints';
import {getNews} from '../../api/newsApi';
import {formatNews} from '../../utils/formatNewsData';

export const fetchNews = () => async dispatch => {
  dispatch({
    type: FETCH_NEWS,
  });

  const response = await getNews();
  if (response) {
    const newData = formatNews(response);
    updateNews(newData)(dispatch);
  };
};

export const updateNews = newData => dispatch => {
  dispatch({
    type: UPDATE_NEWS,
    data: newData,
  });
};