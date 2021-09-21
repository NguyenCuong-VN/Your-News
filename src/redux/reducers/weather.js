import {UPDATE_WEATHER, UPDATE_LOCATION, UPDATE_BACKGROUND, FETCH_WEATHER} from '../actions/actionsType';
import { BACKGROUND_WEATHER_RAIN } from '../../assets/theme/background';

const initWeather = {
  loading: false,
  background: BACKGROUND_WEATHER_RAIN,
  location: 'Hà Nội',
};

const weather = (state = initWeather, action) => {
  switch (action.type) {
    case UPDATE_WEATHER:
      return {...state, ...action.weather, loading: false};
    case UPDATE_LOCATION:
      return {...state, location: action.location};
    case UPDATE_BACKGROUND:
      return {...state, background: action.background};
    case FETCH_WEATHER:
      return {...state, loading: true};
    default:
      return state;
  }
};

export default weather;
