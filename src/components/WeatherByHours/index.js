import React from 'react';
import {View, Text, Image} from 'react-native';
import {useSelector} from 'react-redux';
import styles from './styles';

const WeatherByHours = ({item}) => {
  const theme = useSelector(state => state.themeReducer);

  const customStyles = styles(theme);

  return (
    <View style={customStyles.itemWrapper}>
      <Text style={customStyles.itemTitle}>{item.hours}</Text>
      <Image source={{uri: item.icon}} style={customStyles.itemIcon} />
      <Text style={customStyles.itemDesc}>{item.desc}</Text>
      <Text style={customStyles.itemDesc}>{item.temper + '°C'}</Text>
    </View>
  );
};

export default WeatherByHours;
