import React from 'react';
import { Image } from 'react-native';
import NewsScreen from '../screens/NewsScreen';
import CovidScreen from '../screens/CovidScreen';
import {NAME_WEATHER_SCREEN, NAME_COVID_SCREEN, NAME_NEWS_SCREEN, NAME_SETTING_SCREEN, TITLE_WEATHER_SCREEN, TITLE_COVID_SCREEN, TITLE_NEWS_SCREEN, TITLE_SETTING_SCREEN} from '../constants/strings';
import { ScaledSheet } from 'react-native-size-matters';
import LocationNavigator from '../navigations/LocationNavigator';

export const mainNavigatorMenu = [
  {
    name:  NAME_WEATHER_SCREEN,
    data: () => <LocationNavigator />,
    options: {
      tabBarLabel: TITLE_WEATHER_SCREEN,
      tabBarIcon: ({color}) => (
        <Image source={require('../assets/images/cloud_icon.png')} style={[style.icon, {tintColor: color}]} />
      ),
    }
  },
  {
    name:  NAME_COVID_SCREEN,
    data: () => <CovidScreen />,
    options: {
      tabBarLabel: TITLE_COVID_SCREEN,
      tabBarIcon: ({color}) => (
        <Image source={require('../assets/images/covid_icon.png')} style={[style.icon, {tintColor: color}]} />
      ),
    }
  },
  {
    name:  NAME_NEWS_SCREEN,
    data: () => <NewsScreen />,
    options: {
      tabBarLabel: TITLE_NEWS_SCREEN,
      tabBarIcon: ({color}) => (
        <Image source={require('../assets/images/news_icon.png')} style={[style.icon, {tintColor: color}]} />
      ),
    }
  },
];

const style = ScaledSheet.create({
  icon: {
    width: '23@s',
    height: '23@s',
  }
});
