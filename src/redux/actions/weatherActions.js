import {
  UPDATE_WEATHER,
  UPDATE_LOCATION,
  UPDATE_BACKGROUND,
  FETCH_WEATHER,
} from './actionsType';
import {getAllData, getIconWeather} from '../../api/weatherApi';
import {formatBackground, formatWeather} from '../../utils/formatWeatherData';

export const fetchWeather = coordinate => async (dispatch) => {
  dispatch({
    type: FETCH_WEATHER,
  });

  const response = await getAllData(coordinate);
  const data = formatWeather(response);
  updateWeather(data)(dispatch);
  if(data.current) {
    data.current.background = formatBackground(data.current.background);
    updateBackground(data.current.background)(dispatch);
  }
};

export const updateWeather = weather => dispatch => {
  dispatch({
    type: UPDATE_WEATHER,
    weather: weather,
  });
};

export const updateLocation = location => dispatch => {
  dispatch({
    type: UPDATE_LOCATION,
    location: location.location,
  });
  fetchWeather({lat: location.lat, lon: location.long})(dispatch);
};

export const updateBackground = background => dispatch => {
  dispatch({
    type: UPDATE_BACKGROUND,
    background: background,
  });
};
