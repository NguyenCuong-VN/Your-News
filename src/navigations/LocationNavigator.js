import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {
  NAME_LOCATION_SCREEN,
  NAME_WEATHER_SCREEN_STACK,
} from '../constants/strings';
import ChangeLocationScreen from '../screens/ChangeLocationScreen';
import WeatherScreen from '../screens/WeatherScreen';

const Stack = createStackNavigator();

const LocationNavigator = () => {
  return (
    <Stack.Navigator initialRouteName={NAME_WEATHER_SCREEN_STACK}>
      <Stack.Screen
        name={NAME_WEATHER_SCREEN_STACK}
        component={WeatherScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={NAME_LOCATION_SCREEN}
        component={ChangeLocationScreen}
      />
    </Stack.Navigator>
  );
};

export default LocationNavigator;
