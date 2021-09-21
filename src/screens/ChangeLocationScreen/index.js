import React from 'react';
import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import styles from './styles';
import {dataLocations} from '../../constants/data';
import { updateLocation } from '../../redux/actions/weatherActions';
import { NAME_WEATHER_SCREEN_STACK } from '../../constants/strings';

const ChangeLocationScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const theme = useSelector(state => state.themeReducer);

  const customStyles = styles(theme);

  const onClickLocation = ({item}) => {
    updateLocation(item)(dispatch);
    navigation.navigate(NAME_WEATHER_SCREEN_STACK);
  }

  return (
    <FlatList
      styles={customStyles.wrapper}
      data={dataLocations}
      keyExtractor={(item) => item.lat}
      style={{padding: 5}}
      renderItem={({item}) => {
        return (
          <TouchableOpacity style={customStyles.row} onPress={() => onClickLocation({item: item})} >
            <Text style={customStyles.item} >{item.location}</Text>
          </TouchableOpacity>
        );
      }}
    />
  );
};

export default ChangeLocationScreen;
