import React from 'react';
import {View, Text, Image} from 'react-native';
import {useSelector} from 'react-redux';
import styles from './styles';

const WeatherByDate = ({item}) => {
  const theme = useSelector(state => state.themeReducer);

  const customStyles = styles(theme);

  return (
    <View style={customStyles.itemWrapper}>
      <Text style={customStyles.itemTitle}>{item.date}</Text>
      <Text style={customStyles.itemDesc}>{item.maxTemper + '°C'}</Text>
      <Image source={{uri: item.icon}} style={customStyles.itemIcon} />
      <Text style={customStyles.itemDesc}>{item.minTemper + '°C'}</Text>
    </View>
  );
};

export default WeatherByDate;
