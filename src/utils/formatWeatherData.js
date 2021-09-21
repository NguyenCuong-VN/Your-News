import {EP_WEATHER_ICON} from '../constants/endpoints';
import {
  BACKGROUND_WEATHER_RAIN,
  BACKGROUND_WEATHER_SNOW,
  BACKGROUND_WEATHER_CLOUD,
} from '../assets/theme/background';

export const formatWeather = data => {
  const result = {};

  if (data) {
    //handle current weather format
    if (data.current && data.current.weather) {
      const date = new Date(data.current.dt * 1000);
      const dateTime =
        date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear();
      result.current = {
        background: data.current.weather[0].id,
        dateTime: dateTime,
        icon: EP_WEATHER_ICON + data.current.weather[0].icon + '@2x.png',
        temper: data.current.temp.toFixed(0),
        desc: data.current.weather[0].description,
      };
    }

    //handle hourly weather format
    if (data.hourly) {
      result.hourly = data.hourly.map(hours => {
        const date = new Date(hours.dt * 1000);
        const time = date.getHours() + 'h';
        return {
          id: hours.dt,
          hours: time,
          icon: EP_WEATHER_ICON + hours.weather[0].icon + '@2x.png',
          temper: hours.temp.toFixed(0),
          desc: hours.weather[0].description,
        };
      });
    }

    //handle daily weather format
    if (data.daily) {
      result.daily = data.daily.map(date => {
        const time = new Date(date.dt * 1000);
        const dateTime =
          time.getDate() + '/' + time.getMonth() + '/' + time.getFullYear();
        return {
          id: date.dt,
          date: dateTime,
          icon: EP_WEATHER_ICON + date.weather[0].icon + '@2x.png',
          maxTemper: date.temp.max.toFixed(0),
          minTemper: date.temp.min.toFixed(0),
        };
      });

      result.daily[0].date = 'Hôm nay';
    }

    //handle info weather format
    if (data.current) {
      result.info = [
        {
          id: 1,
          iconUrl: require('../assets/images/temper_icon.png'),
          desc: 'Nhiệt độ C',
          info: data.current.temp + '°C',
        },
        {
          id: 2,
          iconUrl: require('../assets/images/visibility_icon.png'),
          desc: 'Tầm nhìn',
          info: data.current.visibility + ' km',
        },
        {
          id: 3,
          iconUrl: require('../assets/images/uv.png'),
          desc: 'UVI',
          info: data.current.uvi,
        },
        {
          id: 4,
          iconUrl: require('../assets/images/humidity.png'),
          desc: 'Độ ẩm',
          info: data.current.humidity + '%',
        },
        {
          id: 5,
          iconUrl: require('../assets/images/wind_speed.png'),
          desc: 'Tốc độ gió',
          info: data.current.wind_speed + 'km/h',
        },
        {
          id: 6,
          iconUrl: require('../assets/images/pressure.png'),
          desc: 'Áp suất KK',
          info: data.current.pressure + ' hPa',
        },
      ];
    }
  }

  return result;
};

export const formatBackground = data => {
  switch (true) {
    case data >= 200 && data < 600:
      return BACKGROUND_WEATHER_RAIN;
    case data >= 600 && data < 700:
      return BACKGROUND_WEATHER_SNOW;
    case data >= 700:
      return BACKGROUND_WEATHER_CLOUD;
    default:
      return BACKGROUND_WEATHER_CLOUD;
  }
};
