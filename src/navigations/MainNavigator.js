import React from 'react'
import {mainNavigatorMenu} from '../menus/mainNavigatorMenu';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { NAME_WEATHER_SCREEN, NAME_COVID_SCREEN } from '../constants/strings';
import { ScaledSheet } from 'react-native-size-matters';

const MainNavigator = () => {

  const Tab = createMaterialBottomTabNavigator();

  const showContentMenus = (menus) => {
    let result = null;
    result = menus.map((menu, key) => {
      return <Tab.Screen key={key} name={menu.name} component={menu.data} options={menu.options} />
    });
    return result;
  }

  return (
    <Tab.Navigator 
      initialRouteName={NAME_WEATHER_SCREEN} 
      backBehavior='history' 
      shifting={true} 
      activeColor="#7203FF" 
      inactiveColor="#837295"
      barStyle={styles.barStyle}
      >
      {showContentMenus(mainNavigatorMenu)}
    </Tab.Navigator>
  )
}

const styles = ScaledSheet.create({
  barStyle: {
    backgroundColor: '#F8F8F8',
  },
});

export default MainNavigator;
