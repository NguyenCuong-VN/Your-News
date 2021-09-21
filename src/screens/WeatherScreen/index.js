import React, {useEffect} from 'react';
import {
  View,
  Text,
  ImageBackground,
  Image,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import Container from '../../components/commons/Container';
import styles from './styles';
import WeatherByHours from '../../components/WeatherByHours';
import WeatherByDate from '../../components/WeatherByDate';
import InfoComponent from '../../components/InfoComponent';
import {NAME_LOCATION_SCREEN} from '../../constants/strings';
import {fetchWeather} from '../../redux/actions/weatherActions';

const WeatherScreen = ({navigation}) => {
  const dispatch = useDispatch();

  const theme = useSelector(state => state.themeReducer);
  const customStyles = styles(theme);

  const weather = useSelector(state => state.weather);

  const renderInfo = () => {
    if (weather && weather.info) {
      return weather.info.map(item => {
        return <InfoComponent item={item} key={item.id} />;
      });
    }
  };

  const loadData = () => {
    const coordinate = {lat: 21.030653, lon: 105.84713};
    fetchWeather(coordinate)(dispatch);
  };

  useEffect(() => {
    loadData();
    
  }, []);

  return (
    <ImageBackground
      source={weather.background}
      resizeMode="stretch"
      style={customStyles.background}>
      <Container style={styles.container}>
        {/* change location */}
        <TouchableOpacity
          onPress={() => navigation.navigate(NAME_LOCATION_SCREEN)}>
          <Image
            source={require('../../assets/images/change_location_icon.png')}
            style={customStyles.changeLocation}
          />
        </TouchableOpacity>

        {weather.loading && <ActivityIndicator size='large' color="#999999" /> }

        {/* location - time */}
        <View style={customStyles.title}>
          <Text style={customStyles.titleLocation}>{weather.location}</Text>
          <Text style={customStyles.titleDate}>
            {weather.current && weather.current.dateTime}
          </Text>
        </View>

        {/* current weather */}
        <View style={customStyles.commonWeather}>
          <Image
            source={weather.current && {uri: weather.current.icon}}
            style={customStyles.commonIcon}
          />
          <Text style={customStyles.commonTemper}>
            {weather.current && weather.current.temper + '°C'}
          </Text>
          <Text style={customStyles.commonNote}>
            {weather.current && weather.current.desc}
          </Text>
        </View>

        {/* detail by hours */}
        <View style={customStyles.area}>
          <View style={customStyles.areaHeader}>
            <Text style={customStyles.areaTitle}>Hôm nay</Text>
            <Text style={customStyles.areaTemper}>
              {weather.daily &&
                weather.daily[0] &&
                weather.daily[0].minTemper +
                  '°C' +
                  ' / ' +
                  weather.daily[0].maxTemper +
                  '°C'}
            </Text>
          </View>
          <View style={customStyles.line}></View>
          {/* detail */}
          <FlatList
            data={weather.hourly}
            renderItem={({item, index}) => {
              return <WeatherByHours item={item} />;
            }}
            keyExtractor={item => item.id}
            horizontal={true}
          />
        </View>

        {/* detail by date */}
        <View style={customStyles.area}>
          <View style={customStyles.areaHeader}>
            <Text style={customStyles.areaTitle}>Tuần này</Text>
          </View>
          <View style={customStyles.line}></View>
          {/* detail */}
          <FlatList
            data={weather.daily}
            renderItem={({item, index}) => {
              return <WeatherByDate item={item} />;
            }}
            keyExtractor={item => item.id}
            horizontal={true}
          />
        </View>

        {/* thong tin chi tiet */}
        <View style={customStyles.info}>{renderInfo()}</View>
      </Container>
    </ImageBackground>
  );
};

export default WeatherScreen;
