import {combineReducers} from 'redux';
import themeReducer from './themeReducer';
import weather from './weather';
import covid from './covid';
import news from './news';

const allReducers = combineReducers({
  themeReducer,
  weather,
  covid,
  news
});

export default allReducers;