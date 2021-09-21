import React from 'react';
import {View, Text, Image} from 'react-native';
import {useSelector} from 'react-redux';
import styles from './styles';

const NewsItem = ({item}) => {
  const theme = useSelector(state => state.themeReducer);

  const customStyles = styles(theme);

  return (
    <View style={customStyles.wrapperNews}>
      <Image
        source={{
          uri: item.thumbnail,
        }}
        style={customStyles.newsThumbnail}
      />
      <Text style={customStyles.newsTitle}>{item.title}</Text>
      <Text>{item.content}</Text>
      <View style={customStyles.newsInfo}>
        <Text style={customStyles.newsSource}>{item.source}</Text>
        <Text style={customStyles.newsSource}>{item.time}</Text>
      </View>
    </View>
  );
};

export default NewsItem;
