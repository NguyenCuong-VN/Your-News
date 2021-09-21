import React from 'react';
import {View, Text, Image} from 'react-native';
import {useSelector} from 'react-redux';
import styles from './styles';

const InfoComponent = ({item}) => {
  const theme = useSelector(state => state.themeReducer);

  const customStyles = styles(theme);

  return (
    <View style={customStyles.infoWrapper}>
      <Image source={item.iconUrl} style={customStyles.infoIcon} />
      <Text style={customStyles.infoItem}>{item.info}</Text>
      <Text style={customStyles.infoItem}>{item.desc}</Text>
    </View>
  );
};

export default InfoComponent;
