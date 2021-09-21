import React from 'react';
import {View, Text, Image} from 'react-native';
import {useSelector} from 'react-redux';
import styles from './styles';

const InfoCovid = ({item}) => {
  const theme = useSelector(state => state.themeReducer);

  const customStyles = styles(theme);

  return (
    <View
      style={[
        customStyles.infoItem,
        {backgroundColor: item.style && item.style.backgroundColor},
      ]}>
      <Text style={customStyles.infoTitle}>{item.title}</Text>
      <Text style={[customStyles.infoNumber, {color: item.style && item.style.NumberColor}]}>
        {item.number}
      </Text>
      <Text style={customStyles.infoToday}>
        <Text
          style={[
            customStyles.infoNumberToday,
            {color: item.style && item.style.numberTodayColor},
          ]}>
          {'+' + item.todayNumber}
        </Text>
        <Text style={customStyles.infoNote}> hôm nay</Text>
      </Text>
    </View>
  );
};

export default InfoCovid;
