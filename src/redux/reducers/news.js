import {UPDATE_NEWS, FETCH_NEWS} from '../actions/actionsType';

const initNews = {
  loadingNews: true,
};

const news = (state = initNews, action) => {
  switch (action.type) {
    case FETCH_NEWS:
      return {...state, loadingNews: true};
    case UPDATE_NEWS:
      return {...state, loadingNews: false, ...action.data};
    default:
      return state;
  }
};

export default news;
