import React, {useEffect, useCallback, Alert} from 'react';
import {
  View,
  Text,
  ImageBackground,
  FlatList,
  ActivityIndicator,
  Image,
  TouchableOpacity,
  Linking,
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import Container from '../../components/commons/Container';
import styles from './styles';
import InfoCovid from '../../components/InfoCovid';
import {fetchCovidInfo, fetchCovidNews} from '../../redux/actions/covidActions';
import NewsItem from '../../components/NewsItem';
import {InAppBrowser} from 'react-native-inappbrowser-reborn';

const CovidScreen = () => {
  const dispatch = useDispatch();
  const theme = useSelector(state => state.themeReducer);

  const customStyles = styles(theme);

  const covidInfo = useSelector(state => state.covid.info);
  const updatedInfo = useSelector(state => state.covid.updatedInfo);
  const loadingNews = useSelector(state => state.covid.loadingNews);
  const news = useSelector(state => state.covid.news);

  const getInfoCovid = () => {
    fetchCovidInfo()(dispatch);
  };

  const getNewsCovid = () => {
    fetchCovidNews()(dispatch);
  };

  const onPressNews = async link => {
    try {
      if (await InAppBrowser.isAvailable()) {
        const result = await InAppBrowser.open(link, {
          // iOS Properties
          dismissButtonStyle: 'cancel',
          preferredBarTintColor: '#453AA4',
          preferredControlTintColor: 'white',
          readerMode: false,
          animated: true,
          modalPresentationStyle: 'fullScreen',
          modalTransitionStyle: 'coverVertical',
          modalEnabled: true,
          enableBarCollapsing: false,
          // Android Properties
          showTitle: true,
          toolbarColor: '#6200EE',
          secondaryToolbarColor: 'black',
          navigationBarColor: 'black',
          navigationBarDividerColor: 'white',
          enableUrlBarHiding: true,
          enableDefaultShare: true,
          forceCloseOnRedirection: false,
          // Specify full animation resource identifier(package:anim/name)
          // or only resource name(in case of animation bundled with app).
          animations: {
            startEnter: 'slide_in_right',
            startExit: 'slide_out_left',
            endEnter: 'slide_in_left',
            endExit: 'slide_out_right',
          },
        });
      } else {
        const supported = await Linking.canOpenURL(link);
        if (supported) {
          await Linking.openURL(link);
        } else {
          Alert.Alert('Cannot open this link ' + link);
        }
      }
    } catch (error) {
      Alert.alert(error.message);
    }
  };

  const renderNews = () => {
    return (
      news &&
      news.map(item => {
        return (
          <TouchableOpacity
            onPress={() => onPressNews(item.link)}
            key={item.title}>
            <NewsItem item={item} />
          </TouchableOpacity>
        );
      })
    );
  };

  useEffect(() => {
    getInfoCovid();
    getNewsCovid();
  }, []);

  return (
    <ImageBackground
      source={require('../../assets/images/background_covid_tab.jpg')}
      resizeMode="cover"
      style={customStyles.background}>
      <Container style={styles.container}>
        {/* header */}
        <Text style={customStyles.header}>Covid-19</Text>

        {/* info */}
        <Text style={customStyles.updateInfo}>{'Update:' + updatedInfo}</Text>
        <FlatList
          style={customStyles.info}
          data={covidInfo}
          renderItem={({item}) => {
            return <InfoCovid item={item} />;
          }}
          keyExtractor={item => item.title}
          horizontal={true}
        />

        {/* news */}
        <View style={customStyles.news}>
          {loadingNews && <ActivityIndicator size="large" color="#999999" />}
          {renderNews()}
        </View>
      </Container>
    </ImageBackground>
  );
};

export default CovidScreen;
